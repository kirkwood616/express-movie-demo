import express from "express";
import Movie from "../models/Movie";

const movieRoutes = express.Router();

const movies: Movie[] = [
  {
    id: 1,
    title: "The Return of the Living Dead",
    year: 1985,
    animated: false,
  },
  {
    id: 2,
    title: "Night of the Living Dead",
    year: 1968,
    animated: false,
  },
  {
    id: 3,
    title: "Up",
    year: 2009,
    animated: true,
  },
  {
    id: 4,
    title: "Dune",
    year: 2021,
    animated: false,
  },
  {
    id: 4,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    animated: true,
  },
];

movieRoutes.get("/", function (req, res) {
  res.json(movies);
});

movieRoutes.get("/:id", function (req, res) {
  let idNum: number = parseInt(req.params.id);
  let match = movies.find((movie) => movie.id === idNum);
  if (match) {
    res.json(match);
  } else {
    res.status(404).send({ error: `Movie with id ${idNum} does not exist` });
  }
});

export default movieRoutes;
