import express from "express";
import movieRoutes from "./routes/movie-routes";

const app = express();

app.use(express.json());

const port = 3000;

app.listen(port, () => console.log(`Listening on ${port}`));

app.use("/api/movies", movieRoutes);
