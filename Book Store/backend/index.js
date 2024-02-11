const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoutes = require("./route/bookRoutes");

const app = express();
const PORT = 3500;

app.use(express.json());
app.use(cors());
app.use("/api/v1/", bookRoutes);

const MONGODB_URI = "mongodb://127.0.0.1:27017/Book-Store";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });
