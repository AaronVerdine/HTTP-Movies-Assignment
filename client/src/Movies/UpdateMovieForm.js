import React, { useState, useEffect } from "react";
import axios from "axios";

const initialItem = {
  title: "",
  director: "",
  metascore: "",
  stars: []
};

const UpdateMovieForm = props => {
  const [updateMovie, setUpdateMovie] = useState(initialItem);

  const changeHandler = e => {
    e.preventDefault();

    setUpdateMovie({ ...updateMovie, [e.target.name]: e.target.value });
    console.log(updateMovie);
  };

  return (
    <div>
      <h2>Update Movie</h2>
      <form>
        <input type="text" name="title" placeholder="Title" />
        <br />
        <input type="text" name="director" placeholder="Director" />
        <br />
        <input type="text" name="metascore" placeholder="Metascore" />
        <br />
        <input type="text" name="stars" placeholder="Stars" />
        <br />
      </form>
      <button type="submit">Update Movie</button>
    </div>
  );
};

export default UpdateMovieForm;
