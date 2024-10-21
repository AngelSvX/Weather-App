import React, { useEffect } from "react";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";
import {useWeatherContext} from '../Context/CreateContext'

function ShowWeather() {
  
  
  const { weatherData, fetchData, city, setCity, handleClick } = useWeatherContext()
  
  useEffect(() =>{
    fetchData('Lima')
  }, [])
  return (
    <div className="bg-slate-900 w-1/2 h-screen flex flex-col items-end justify-center">
      <div className="bg-slate-800 w-1/2 h-2/3 flex flex-col items-center border-l-4 border-t-4 border-b-4 rounded-l-lg">
        <div className="flex flex-col items-center justify-evenly w-10/12 h-1/3">
          <Input
            size="lg"
            color="default"
            isInvalid={false}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type="email"
            
            variant="underlined"
            label="City"
            classNames={{
              inputWrapper: [
                'hover:bg-slate-700 border-slate-600 hover:border-slate-400'
              ],
              label:[
                'text-slate-400 font-normal'
              ],
              input:[
                'text-md font-thin'
              ]
            }}
          />
      

          <Button
            radius="sm"
            className="text-slate-400 font-normal text-base"
            onClick={handleClick}
            color="primary"
            variant="flat"
          >
            Encontrar
          </Button>
        </div>

        {weatherData && (
          <div className="h-2/3 w-10/12">
            <div className="text-slate-400 font-thin text-xl h-5/6 bg-slate-900 flex flex-col items-start justify-evenly rounded-lg border-2 border-slate-500 mt-4">
              <div className="w-full text-center font-bold text-xl">{weatherData.name}</div>
              <div className="pl-4">Lon: <span className="font-semibold">{weatherData.coord.lon}</span></div>
              <div className="pl-4">Lat: <span className="font-semibold">{weatherData.coord.lat}</span></div>
              <div className="pl-4">Description: <span className="font-semibold">{weatherData.weather[0].description}</span></div>
              <div className="pl-4">Timezone: <span className="font-semibold">{weatherData.timezone}</span></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowWeather;
