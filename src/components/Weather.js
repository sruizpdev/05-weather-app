import React, { Fragment } from 'react';
const Weather = ({ weather }) => {
  const { name, main } = weather;
  if (!name) return null;

  const kelvin = 273.15;
  return (
    <Fragment>
      <div className="card-panel white col s12">
        <div className="black-text">
          <h2>The weather in {name} is: </h2>
          <p className="temperature">
            {parseFloat(main.temp - kelvin, 10).toFixed(2)}{' '}
            <span>&#x2103;</span>
          </p>
          <p>
            Max temp:
            {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}{' '}
            <span>&#x2103;</span>
          </p>
          <p>
            Min temp:
            {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}{' '}
            <span>&#x2103;</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Weather;
