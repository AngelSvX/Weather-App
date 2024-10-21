import { useState } from "react";
import { MyContext } from "./Context/CreateContext";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ShowWeather from "./components/ShowWeather";
import DateWeather from "./components/DateWeather";

function App() {
  return (
    <MyContext>
      <div className="flex">
        <ShowWeather />
        <DateWeather />
      </div>
    </MyContext>
  );
}

export default App;
