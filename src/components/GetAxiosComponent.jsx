import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const GetJoke = ({ jokeId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://official-joke-api.appspot.com/random_joke";

  useEffect(() => {
    const getJoke = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(url);
        const data = response.data;
        setData(data);

      } catch (error) {
        setError(error);

      } finally {
        setLoading(false);
      }
    };

    getJoke();
  }, [jokeId]);

  if (loading) {
    return <div className="download">"Завантаження даних..."</div>;
  }

  if (error) {
    return <div className="error">Виникла помилка: {error.message}</div>;
  }

  return (
    <div className="joke">
      <p>
        Setup: <span>{data.setup}</span>
      </p>
      <p>
        Punchline: <span>{data.punchline}</span>
      </p>
      <span>Id: {data.id}</span>
    </div>
  );
};

export default GetJoke;
