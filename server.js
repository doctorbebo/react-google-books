const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
import mongoose from "mongoose";

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const apiRoutes = require("./routes/apiRoutes");
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

await mongoose.connect( process.env.MONGOOSE_URI ||'mongodb://bebo:bebo92@ds119688.mlab.com:19688/heroku_js5xsb6j', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api', apiRoutes);

// Define API routes here
// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
