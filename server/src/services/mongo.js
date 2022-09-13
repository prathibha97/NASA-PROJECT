const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://nasa-api:VWKYTXUeSnFxdTSc@nasacluster.2ycexic.mongodb.net/nasa";

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URI);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = { mongoConnect, mongoDisconnect };

