import React from "react";
import { useWeatherContext } from "../Context/CreateContext";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

function DateWeather() {

  const leafletIcon = new L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    iconSize: [25,41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: markerShadow,
    shadowSize: [41, 41],
  })

  const { weatherData, coordinatesMap, mapZoom } = useWeatherContext();
  return (
    <div className="bg-slate-900 w-1/2 h-screen flex items-center justify-start">
      <div className="bg-slate-800 w-1/2 h-2/3 border-r-4 border-t-4 border-b-4 rounded-r-lg flex items-center justify-center">
        {weatherData && (
          <div className="flex flex-col items-center justify-center w-10/12 h-5/6 bg-slate-700 text-xl font-medium text-slate-300">

            <MapContainer
              center={coordinatesMap}
              zoom={mapZoom}
              style={{width:'100%', height: '400px'}}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={coordinatesMap} icon={leafletIcon}>
                <Popup>{weatherData.name}</Popup>
              </Marker>
            </MapContainer>

            {/* <div>Contry: {weatherData.sys.country}</div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default DateWeather;
