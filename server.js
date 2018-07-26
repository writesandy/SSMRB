const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 3001;
// const methodOverride = require('method-override');
=======
const PORT = process.env.PORT || 3003;
const methodOverride = require('method-override');
>>>>>>> 73a8bbd364e30d0b08e907150739d8749e9ac8c7
const path = require('path');

// Define middleware here
app.use('/upload', express.static('upload'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// app.use(methodOverride('_method'));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes)

app.post('/', (req, res) => {
  res.send();
})

mongoose.Promise = global.Promise;

// Connect to the Mongo DB
<<<<<<< HEAD
const dbUri = process.env.MONGODB_URI || "mongodb://localhost:27017/artist_db";
=======
>>>>>>> 73a8bbd364e30d0b08e907150739d8749e9ac8c7


mongoose.connect(dbUri).then(() => console.log('connected to DB!')).catch((err) => console.log(err));
 
// If no API routes are hit, send the React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "/client/public/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});