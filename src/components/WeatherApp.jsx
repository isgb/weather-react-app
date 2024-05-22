import React, { useEffect, useState } from "react";
import { WeatherForm } from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";

import styles from './WeatherApp.module.css'

export const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  },[]);

  useEffect(() =>{
    document.title = `Weather | ${weather?.location.name ?? ""}`; 
  },[weather])

  async function loadInfo(city = 'london'){
    try {
        console.log("test",city);
        const request = await fetch(`${process.env.REACT_APP_URL}key=${process.env.REACT_APP_KEY}&q=${city}&aqi=no`, {
          referrerPolicy: "unsafe-url" 
      });
        const json = await request.json();
        setWeather(json)

    } catch (error) { }
  }

  function handleChangeCity(city){
    setWeather(null)
    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity}/>
      <WeatherMainInfo weather={weather}/>
    </div>
  );
};
