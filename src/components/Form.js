import React, { useState } from 'react';

const Form = ({ search, saveSearch, saveConsult }) => {
  const [error, saveError] = useState(false);

  const { city, country } = search;

  const handleChange = (e) => {
    saveSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === '' || country.trim() === '') {
      saveError(true);
      return;
    }
    saveError(false);
    saveConsult(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <p className="red darken-4 error">All fields are required</p>
      ) : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City: </label>
      </div>
      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">-- Select a country --</option>
          <option value="ES">España</option>
          <option value="PO">Poland</option>
        </select>
        <label htmlFor="country">Country: </label>
      </div>
      <div className="input-field s12 col">
        <input
          type="submit"
          value="Search"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

export default Form;
