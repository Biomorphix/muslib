var http = require('http'),
    express = require('express');
    mongoose = require('mongoose');
 
var app = express();
var Schema = mongoose.Schema;

// setting model
var albumSchema = new Schema({
  id: String,
  artist: String,
  type: String,
  name: String,
  year: Number,
  description: String,
  image: String,
  archive: String,
  email: String,
  isDead: Boolean,
  postDate: Date,
  inSocialMedia: [{
      title: String,
      link: String
  }],
  tracklist: [{
      title: String,
      length: Number
  }],
  genres: [{
      genre: String
  }]
});
var Album = mongoose.model('Album', albumSchema, 'albums');

// connecting to DB
mongoose.connect('mongodb://user:password@ds019816.mlab.com:19816/muslib');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log("Connected to database");});

// GET ALL ALBUM PREVIEWS
app.get('/albums', function (req, res) {

    var allAlbumsResponse = {
        albums: []
    }
    Album.find({}, function(err, albums) {
        if (err) throw err;
        albums.forEach(function(exstAlbum){
            var album = {
                id: exstAlbum.id,
                name: exstAlbum.name,
                artist: exstAlbum.artist,
                image: exstAlbum.image,
                year: exstAlbum.year
               };
            console.log(album);
            allAlbumsResponse.albums.push(album)
        });
        res.send(allAlbumsResponse);
        console.log("Returned all albums.");
    });
})
// GET ONE ALBUM BY ID
app.get('/album/:albumId', function (req, res) {
    var searchId = req.albumId;
    Album.find({id: searchId}, function(err, album) {
        if (err) throw err;
        console.log(album);
        res.send(album);
        console.log("Returned one album.");
    });
})
// SAVE ONE ALBUM 
app.put('/album/:albumId', function (req, res) {
    var searchId = req.albumId;
    Album.find({id: searchId}, function(err, album) {
        if (err) throw err;
        album.artist = req.artist,
        album.type = req.type,
        album.name = req.name,
        album.year = req.year,
        album.description = req.description,
        album.image = req.image
        console.log("Updated album:");
        console.log(album);
        res.send("Success");
    });
})
// CREATE NEW ALBUM
app.post('/album', function (req, res) {
    var newAlbum = Album({
        id: req.name,
        artist: req.artist,
        type: req.type,
        album: req.album,
        year: req.year,
        description: req.description,
        image: req.image
    })
    newUser.save(function(err) {
        if (err) throw err;
        console.log('Album added');
    });
    res.send("Success");
})


// creating server
var server = app.listen(1488, function () {
  //var host = server.address().address
  var host =  '0.0.0.0'
  var port = server.address().port
  console.log("Listening at http://%s:%s", host, port)

})