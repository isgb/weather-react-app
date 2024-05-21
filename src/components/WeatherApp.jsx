import React, { useState } from "react";
import { WeatherForm } from "./WeatherForm";

export const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  async function loadInfo(city = 'london'){
    try {
        console.log("test",city);
        const request = await fetch(`${process.env.REACT_APP_URL}key=${process.env.REACT_APP_KEY}&q=${city}&aqi=no`);
        
        const json = await request.json();

        console.log(json);

    } catch (error) {
        
    }
  }

  function handleChangeCity(city){
    setWeather(null)
    loadInfo(city);
  }

  return (
    <>
      <WeatherForm onChangeCity={handleChangeCity}/>
      <div>Info</div>
    </>
  );
};
