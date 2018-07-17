const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const methodOverride = require('method-override');
const Grid = require('gridfs-stream');
const path = require('path');
const GridFSStorage = require('multer-gridfs-storage');
const crypto = require('crypto');
const multer = require('multer');

// Define middleware here
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
const dbUri = process.env.MONGODB_URI || "mongodb://localhost:27017/artist_db";

mongoose.connect(dbUri).then(() => console.log('connected to DB!')).catch((err) => console.log(err));

let gfs;

mongoose.connection.once('open', function () {
  // Init stream
  gfs = Grid(mongoose.connection.db, mongoose.mongo);
  gfs.collection('uploads');
//   console.log(gfs);
})

// Create storage engine
const storage = new GridFSStorage({
  url: dbUri,
  file: (req, file) => {
      return new Promise((resolve, reject) => {
          crypto.randomBytes(16, (err, buf) => {
              if (err) {
                  return reject(err);
              }
              const filename = buf.toString('hex') + path.extname(file.originalname);
              const fileInfo = {
                  filename: filename,
                  bucketName: 'uploads'
              };
              resolve(fileInfo);
          });
      });
  }
});
const upload = multer({ storage });

// @route GET /
// @desc Loads form
app.get('/images', (req, res) => { 
  gfs.files.find().toArray((err, files) => {
    //   console.log('before actions', files)
      // Check if files
      if(!files || files.length ===0) {
        // console.log('after false', files)
          res.send({files: false})
      } else {
          files.map(file => {
            // console.log('after true: ', files)
              if(file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
                  file.isImage = true;
              } else {
                  file.isImage = false;
              }
          })
          res.send({files: files});

      }
  });
});

// @route POST /upload
// @desc Uploads file to DB
app.post('/upload', upload.single('file'), (req, res) => {
  // res.json({file: req.file});
  console.log('this is req.file: ', req.file)
})

// @route GET /files
// @desc Display all files in JSON
app.get('/files/', (req, res) => {
  gfs.files.find().toArray((err, files) => {
      // Check if files
      if(!files || files.length ===0) {
          return res.status(404).json({
              err: 'No files exist'
          });
      }

      // Files exist
      return res.json(files);
  });
});

// @route GET /files/:filename
// @desc Display single file object
app.get('/files/:filename/', (req, res) => {
  gfs.files.findOne({filename: req.params.filename}, (err, file) => {
      if (!file || file.length ===0) {
          return res.status(404).json({
              err: 'No file exist'
          });
      }
      //File exists
      return res.json(file);
  })
});

// @route GET /image/:filename
// @desc Display image
app.get('/images/:filename/', (req, res) => {
  gfs.files.findOne({filename: req.params.filename}, (err, file) => {
      if (!file || file.length ===0) {
          return res.status(404).json({
              err: 'No file exist'
          });
      }
      // Check if image
      if(file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
          // Read output to browser
          const readstream = gfs.createReadStream(file.filename);
          readstream.pipe(res);
      } else {
          res.status(404).json({err: 'Not and image'})
      }
  })
});

// @route DELETE /files/:id
// @desc Delete file
app.delete('/files/:id', (req, res) => {
  gfs.remove({_id: req.params.id, root: 'uploads'}, (err, GridFSBucket) => {
      if(err) {
          return res.status(404).json({ err: err })
      }
      res.redirect('/')
  })
})

// If no API routes are hit, send the React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "/client/public/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});