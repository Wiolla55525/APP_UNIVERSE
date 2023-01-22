import { React, useState } from 'react';
import { useTemperature, useCity } from './Hooks';

export function Weather() {
  const [city, setCity] = useState('');
  const citySelect = useCity();
  const temperature = useTemperature(city);

  return (
    <div className=" text-center p-2 m-auto">
      <h3 className="p-3">Select city to check weather</h3>
      {citySelect.length === 0 && <div>{'A moment please...'}</div>}
      <select value={city} name="city" onChange={(e) => setCity(e.target.value)} className="form-control text-center">
        <option value="">Select City</option>
        {citySelect &&
          citySelect.map(({ code, name }) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
      </select>

      <h4 className="pt-4">Temperature: {JSON.stringify(temperature)} &deg;C</h4>
    </div>
  );
}

//
