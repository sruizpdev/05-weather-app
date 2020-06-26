import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [search, saveSearch] = useState({
    city: '',
    country: '',
  });
  const { city, country } = search;
  const [consult, saveConsult] = useState(false);
  const [weather, saveWeather] = useState({});

  useEffect(() => {
    const searchApi = async () => {
      if (consult) {
        const appId = '7623fcf6c90f00b8b38b0d9a0825846b';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
        const resp = await fetch(url);
        const result = await resp.json();
        saveWeather(result);
      }
    };
    searchApi();
  }, [consult]);

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
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
