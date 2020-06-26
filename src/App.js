import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {
  const [search, saveSearch] = useState({
    city: '',
    country: '',
  });
  const { city, country } = search;
  const [consult, saveConsult] = useState(false);
  const [weather, saveWeather] = useState({});
  const [error, saveError] = useState(false);

  useEffect(() => {
    const searchApi = async () => {
      if (consult) {
        const appId = '7623fcf6c90f00b8b38b0d9a0825846b';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
        const resp = await fetch(url);
        const result = await resp.json();
        saveWeather(result);
        saveConsult(false);
        if (result.cod === '404') {
          saveError(true);
        } else {
          saveError(false);
        }
      }
    };
    searchApi();
  }, [consult]);

  let component;
  if (error) {
    component = <Error message="No results" />;
  } else {
    component = <Weather weather={weather} />;
  }

  return (
    <Fragment>
      <Header title="Weather app" />
      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                saveSearch={saveSearch}
                saveConsult={saveConsult}
              />
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
