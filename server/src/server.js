const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const { loadPlanetData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const MONGO_URI =
  "mongodb://localhost:27017/nasa";

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URI);

  await loadPlanetData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();

// mongodb+srv://nasa-api:VWKYTXUeSnFxdTSc@nasacluster.2ycexic.mongodb.net/nasa