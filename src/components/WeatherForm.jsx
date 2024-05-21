import React, { useState } from 'react'

export const WeatherForm = ({onChangeCity}) => {

    const[city, setCity] = useState('');

    function onChange(e){
        let value = e.target.value;

        if(value === ''){
            setCity(value)
        }
    }

    function handleSubmit(e){
        e.preventDefault();

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
