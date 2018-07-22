import axios from "axios";

export default {
  // Gets all arists
  getArtists: function() {
    console.log('it works get artists')
    return axios.get("/api/artist");
  },
  // Gets the artist with the given id
  getOneArtist: function(id) {
    return axios.get("/api/artist/" + id);
  },
  // Deletes the artist with the given id
  deleteArtist: function(id) {
    return axios.delete("/api/artist/" + id);
  },
  // Saves a artist to the database
  saveArtist: function(artistData) {
    return axios.post("/api/artist", artistData);
  },
  
  getImages: function() {
    return axios.get("/files");
  },
  saveImages: function(userImage) {
    return axios.post('/upload', userImage);
  },
  findImage: function(id) {
    return axios.get("/images/:filename" + id)
  },
  deleteImage: function(id) {
    return axios.delete('files/:id', + id);
  }
};
