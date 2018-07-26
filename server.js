const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3003;
const methodOverride = require('method-override');
const path = require('path');

// Define middleware here
app.use('/upload', express.static('upload'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(methodOverride('_method'));

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


mongoose.connect(dbUri).then(() => console.log('connected to DB!')).catch((err) => console.log(err));
 
// If no API routes are hit, send the React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "/client/public/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});