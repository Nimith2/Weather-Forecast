import React, { useState } from 'react'
import "./Styling/style.css"

const Weather = () => {
  let api ={
    key:"1feb099f982c91273d9511c9ecb0f2e2",
    url:"https://api.openweathermap.org/data/2.5/weather"
  };
  let [search,setSearch]=useState("");
  let [weather,setWeather]=useState({})
  function searchweather(){
    fetch(`${api.url}?q=${search}&appid=${api.key}&units=metric`)
    .then(res=>res.json()).then(x=>{console.log(x);setWeather(x)})
  }

  function enter(e) {
    if (e.key === 'Enter')
    {
      searchweather();
    }
  }

  return (
    <div>
    <section>
    <input type='text' placeholder='Enter City' onChange={(e)=>setSearch(e.target.value)} onKeyPress={enter}/>
    <button onClick={searchweather} >Search</button>
    </section>
    {(weather.main !==undefined)?(
      <>
      <h2>Name:{weather.name}</h2>
      <p>Temperature : {weather.main.temp}</p>
      <h5>Longitude: {weather.coord.lon}</h5>
      <h5>Latitude: {weather.coord.lat}</h5>
      </>
    ):(weather.cod===404?(<p>City Not Found</p>):(""))}

    </div>
  )
}
export default Weather

