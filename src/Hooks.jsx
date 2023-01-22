import { useState, useEffect } from 'react';

export const useTemperature = (city) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!city) {
      return;
    }
    const myAbortController = new AbortController();

    (async () => {
      try {
        const currentWeatherFetch = await fetch(`https://api.meteo.lt/v1/places/${city}/forecasts/long-term`, {
          signal: myAbortController.signal,
        });
        const json = await currentWeatherFetch.json();
        const currentWeather = json.forecastTimestamps.filter((timeUtc) => {
          return timeUtc.forecastTimeUtc;
        });
        setWeather(currentWeather[0].airTemperature);
      } catch (e) {
        console.log(e);
        if (!myAbortController.signal.aborted) {
          return { error: e.message };
        }
      }
    })();
    return () => {
      myAbortController.abort();
    };
  }, [city]);

  return weather;
};

export const useCity = () => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.meteo.lt/v1/places`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an error: The status is ${response.status}`);
        }
        const respond = response.json();
        return respond;
      })
      .then((actualData) => {
        setCity(actualData);
      })
      .catch((error) => {
        if (error) {
          console.log(`There is a problem fetching the post data - ${error}`);
        }
        setError(error.message);
        setCity(null);
      })
      .finally((loading) => {
        // console.log('A moment please...');
        setLoading(false);
      });
  }, []);
  return city;
};
