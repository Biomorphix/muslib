var http = require('http'),
    express = require('express');
    mongoose = require('mongoose');
 
var app = express();
var Schema = mongoose.Schema;

// setting model
var albumSchema = new Schema({
  artist: String,
  type: String,
  album: String,
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


// creating server
app.set('port', process.env.PORT || 1488); 
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// connecting to DB
mongoose.connect('mongodb://user:password@ds019816.mlab.com:19816/muslib');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log("Connected to database");});

//doing something
var first_album = new Album({artist: 'abc', album: '123'});
first_album.save(function (err, first_album) {
    if (err) return console.error(err);
});