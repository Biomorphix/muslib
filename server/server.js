var http = require('http'),
    express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    bodyParser = require('body-parser');
 
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
// mongoose.connect('mongodb://user:password@ds019816.mlab.com:19816/muslib');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {console.log("Connected to database");});


app.use(express.static(path.join(__dirname + '/../client')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../client/index.html'));
})

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// GET ALL ALBUM PREVIEWS
app.get('/albums', function (req, res) {
    /*
    * MOCK
    */
    res.send([
                    {   
                        id: '23',                     
                        artist: 'Moby',
                        type: 'lp', //lp, ep, full albom, live
                        album: 'Destroyed/Japane Edition',
                        year: 2011,
                        genres: ['electronic', 'idm'],
                        description: 'Destroyed — десятый студийный альбом американского музыканта Moby. Большая часть песен была записана Моби во время гастролей. В основном запись велась в позднее время, когда он ночевал в отелях. Ему казалось, «что весь остальной мир спит». Вокальные партии вомногих песнях исполнили его друзья и знакомые: Эмили Зузик, Инянг Басси, Джой Малькольн, а также сам музыкант. Моби оценивал свой альбом как «музыка для ночного прослушивания в пустом городе». По словам Моби, обложка альбома была сделана из фотографии в аэропорту Ла Гардиакогда музыкант ожидал рейс из Нью-Йорка и случайно заметил бегущую строку, с текстом: «Оставленный без присмотра багаж будет уничтожен».',
                        image: path.join(__dirname + '5EhafjKbCIk.jpg'), //link
                        href: '#', //link
                        email: 'vampcore1@gmail.com',
                        isDead: true,
                        inSocialMedia: [
                            {
                            title: 'vk',
                            link: 'https://vk.com/vampcore?w=wall176087526_761%2Fall'
                            }
                        ],
                        tracklist: [
                            {
                            title: 'The day'
                            },
                            {title: 'Destroyed'},
                            {title: 'Ebash'}
                        ]
                    },
                    {   
                        id: '23',                     
                        artist: 'Moby',
                        type: 'lp', //lp, ep, full albom, live
                        album: 'Destroyed/Japane Edition',
                        year: 2011,
                        genres: ['electronic', 'idm'],
                        description: 'Destroyed — десятый студийный альбом американского музыканта Moby. Большая часть песен была записана Моби во время гастролей. В основном запись велась в позднее время, когда он ночевал в отелях. Ему казалось, «что весь остальной мир спит». Вокальные партии вомногих песнях исполнили его друзья и знакомые: Эмили Зузик, Инянг Басси, Джой Малькольн, а также сам музыкант. Моби оценивал свой альбом как «музыка для ночного прослушивания в пустом городе». По словам Моби, обложка альбома была сделана из фотографии в аэропорту Ла Гардиакогда музыкант ожидал рейс из Нью-Йорка и случайно заметил бегущую строку, с текстом: «Оставленный без присмотра багаж будет уничтожен».',
                        image: path.join(__dirname + '5EhafjKbCIk.jpg'), //link
                        href: '#', //link
                        email: 'vampcore1@gmail.com',
                        isDead: true,
                        inSocialMedia: [
                            {
                            title: 'vk',
                            link: 'https://vk.com/vampcore?w=wall176087526_761%2Fall'
                            }
                        ],
                        tracklist: [
                            {
                            title: 'The day'
                            },
                            {title: 'Destroyed'},
                            {title: 'Ebash'}
                        ]
                    }
                ]);
    // Album.find({}, function(err, albums) {
    //     if (err) throw err;
    //     res.send(albums);
    //     console.log("Returned all albums.");
    // });
})

// GET ONE ALBUM BY ID 
app.get('/album/:albumId', function (req, res) {
    var searchId = req.params.albumId;

    res.send({   
                        id: '23',                     
                        artist: 'Moby',
                        type: 'lp', //lp, ep, full albom, live
                        album: 'Destroyed/Japane Edition',
                        year: 2011,
                        genres: ['electronic', 'idm'],
                        description: 'Destroyed — десятый студийный альбом американского музыканта Moby. Большая часть песен была записана Моби во время гастролей. В основном запись велась в позднее время, когда он ночевал в отелях. Ему казалось, «что весь остальной мир спит». Вокальные партии вомногих песнях исполнили его друзья и знакомые: Эмили Зузик, Инянг Басси, Джой Малькольн, а также сам музыкант. Моби оценивал свой альбом как «музыка для ночного прослушивания в пустом городе». По словам Моби, обложка альбома была сделана из фотографии в аэропорту Ла Гардиакогда музыкант ожидал рейс из Нью-Йорка и случайно заметил бегущую строку, с текстом: «Оставленный без присмотра багаж будет уничтожен».',
                        image: 'https://pp.vk.me/c630026/v630026942/3c294/mLrNKRmis_c.jpg', //link
                        href: '#', //link
                        email: 'vampcore1@gmail.com',
                        isDead: true,
                        inSocialMedia: [
                            {
                            title: 'vk',
                            link: 'https://vk.com/vampcore?w=wall176087526_761%2Fall'
                            }
                        ],
                        tracklist: [
                            {
                            title: 'The day'
                            },
                            {title: 'Destroyed'},
                            {title: 'Ebash'}
                        ]
                    })
    Album.find({id: searchId}, function(err, album) {
        if (err) throw err;
        console.log(album);
        res.send(album);
        console.log("Returned one album.");
    });
})


// SAVE ONE ALBUM 
app.put('/album/:albumId', function (req, res) {
    var searchId = req.params.albumId;

    Album.find({id: searchId}, function(err, album) {
        if (err) throw err;
        album = req.body;
        album.save();
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
    newAlbum.save(function(err) {   //newUser ??
        if (err) throw err;
        console.log('Album added');
    });
    res.send("Success");
})


// creating server
var server = app.listen(1488, function () { //Фашист, 1337 ставь
  //var host = server.address().address
  var host =  '0.0.0.0'
  var port = server.address().port
  console.log("Listening at http://%s:%s", host, port)

})