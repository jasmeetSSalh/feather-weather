import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import axios from "axios";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=20b0c349a6e11ca54207bdd502ebf617");
    const result = response.data;
    const { name } = result;
    const { icon, description } = result.weather[0];
    const { temp, humidity } = result.main;
    const { wind } = result.wind;

    res.render("index.ejs", { 
      name: name,
      icon: icon,
      description: description,
      temp: temp,
      humidity: humidity,
      wind: wind,
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/search", async (req, res) => {
  try {
    const searchQuery = req.body.search;
    const apiKey = "20b0c349a6e11ca54207bdd502ebf617";

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${apiKey}`);
    const result = response.data;
    const { name } = result;
    const { icon, description } = result.weather[0];
    const { temp, humidity } = result.main;

    res.render("index.ejs", {
      name: name,
      icon: icon,
      description: description,
      temp: temp,
      humidity: humidity,
    });
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
