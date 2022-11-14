const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());





const { getCompliment, getFortune, getMovies, getTvShows, getRestraunts} = require('./controller') 

app.get("/api/compliment", getCompliment);
app.get("/api/fortunes", getFortune)
app.get("/api/movies", getMovies)
app.get("/api/tvShows", getTvShows)
app.get("/api/restraunts", getRestraunts)

app.listen(4000, () => console.log("Server running on 4000"));