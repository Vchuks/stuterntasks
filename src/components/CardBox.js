import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardBox = () => {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [movie, setMovie] = useState([]);
  console.log(movie);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://swapi.dev/api/films");
        setMovie(response.data.results);
        setErr(null);
      } catch (error) {
        console.log(error.message);
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  const mapMovie = movie.map((list) => (
    <Card
      key={list.episode_id}
      title={list.title}
      release_date={list.release_date}
      opening_crawl={list.opening_crawl}
    />
  ));
  return (
    <div className="container">
      <h1>STAR WARS</h1>
      {loading && <h3 className="text">Loading...</h3>}
      {err && <h3 className="text">An error occured: {err}!</h3>}
      <div className="card-container">{mapMovie}</div>
    </div>
  );
};

export default CardBox;
