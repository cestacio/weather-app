import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'bc4537db67dbdcefd7d1623251b735a5';

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/find?q=Seattle,us&appid=${API_KEY},&units=imperial`
    );
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
