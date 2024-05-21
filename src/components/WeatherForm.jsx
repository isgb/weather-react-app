import React, { useState } from 'react'

export const WeatherForm = ({onChangeCity}) => {

    const[city, setCity] = useState('');

    function onChange(e){
        let value = e.target.value;

        if(value !== ''){
            console.log(value);
            setCity(value)
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(city);
        onChangeCity(city)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={onChange}/>
        </form>
    </div>
  )
}
