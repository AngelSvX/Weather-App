import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

//Creamos el contexto
const weatherContext = createContext();

//Creamos la estructura del proveedor del contexto
export const MyContext = ({ children }) => {
  //Cualquier lógica de algún hook, función o parámetro que querramos proveer
  //Dentro de value de nuestro Provider, colocamos las funciones, hooks o estados que deseamos proveer

  const APIKEY = "f3a6986b5b12f1dc18edc523d991f3f5";
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [coordinatesMap, setCoordinatesMap] = useState([0, 0])
  const [mapZoom, setMapZoom] = useState(1)

  const fetchData = async (ciudad) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${APIKEY}`
      );

      if (!response.data) {
        throw new Error("Error al obtener datos del clima");
      }

      const datosDelClima = response.data;
      setWeatherData(datosDelClima);

        setCoordinatesMap([datosDelClima.coord.lat, datosDelClima.coord.lon])
        setMapZoom(8)


    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () =>{
    fetchData(city)
  }

  return (
    <weatherContext.Provider value={{ fetchData, weatherData, city, setCity, coordinatesMap, mapZoom, handleClick}}>
      {children}
    </weatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  return useContext(weatherContext);
};