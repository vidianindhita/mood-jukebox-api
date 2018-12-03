const Joi = require('joi');
const express = require('express');
const http = require('http');
const app = express();

app.use(express.json());

const songs = [
    {id: 1, title: 'I’m A Believer', artist: 'The Monkees', mood: 'happy', genre: 'rock', url : 'bc2542.itp.io/sound_files/1.wav'},
    {id: 2, title: 'Beautiful Day', artist: 'U2', mood: 'happy', genre: 'pop', url : 'bc2542.itp.io/sound_files/2.wav' },
    {id: 3, title: 'No Problem', artist: 'Chance The Rapper', mood: 'happy', genre: 'hip-hop', url : 'bc2542.itp.io/sound_files/3.wav' },
    {id: 4, title: 'Freddie Freeloader', artist: 'Miles Davis', mood: 'happy', genre: 'jazz', url : 'bc2542.itp.io/sound_files/4.wav' },
    {id: 5, title: 'Sonata No. 17 in C', artist: 'Mozart', mood: 'happy', genre: 'classical', url : 'bc2542.itp.io/sound_files/5.wav' },
    {id: 6, title: 'Middle of the Road', artist: 'The Pretenders', mood: 'sad', genre: 'rock', url : 'bc2542.itp.io/sound_files/6.wav' },
    {id: 7, title: 'Someone Like You', artist: 'Adele', mood: 'sad', genre: 'pop', url : 'bc2542.itp.io/sound_files/7.wav' },
    {id: 8, title: 'Stan', artist: 'Eminem', mood: 'sad', genre: 'hip-hop', url : 'bc2542.itp.io/sound_files/8.wav' },
    {id: 9, title: 'How High The Moon', artist: 'Ella Fitzgerald', mood: 'sad', genre: 'jazz', url : 'bc2542.itp.io/sound_files/9.wav' },
    {id: 10, title: 'Nocturnes', artist: 'Frédéric Chopin', mood: 'sad', genre: 'classical', url : 'bc2542.itp.io/sound_files/10.wav' },
    {id: 11, title: 'St. Anger', artist: 'Metallica', mood: 'angry', genre: 'rock', url : 'bc2542.itp.io/sound_files/11.wav' },
    {id: 12, title: 'Sail', artist: 'AWOLNATION', mood: 'angry', genre: 'pop', url : 'bc2542.itp.io/sound_files/12.wav' },
    {id: 13, title: 'Black Skinhead', artist: 'Kanye West', mood: 'angry', genre: 'hip-hop', url : 'bc2542.itp.io/sound_files/13.wav' },
    {id: 14, title: 'Africa', artist: 'John Coltrane', mood: 'angry', genre: 'jazz', url : 'bc2542.itp.io/sound_files/14.wav' },
    {id: 15, title: '5th Symphony', artist: 'Beethoven', mood: 'angry', genre: 'classical', url : 'bc2542.itp.io/sound_files/15.wav' },
    {id: 16, title: 'Black Sabbath', artist: 'Black Sabbath', mood: 'scared', genre: 'rock', url : 'bc2542.itp.io/sound_files/16.wav' },
    {id: 17, title: 'Haunted', artist: 'Beyonce', mood: 'scared', genre: 'pop', url : 'bc2542.itp.io/sound_files/17.wav' },
    {id: 18, title: 'Kids See Ghosts', artist: 'Kids See Ghosts', mood: 'scared', genre: 'hip-hop', url : 'bc2542.itp.io/sound_files/18.wav' },
    {id: 19, title: 'The Valley of the Shadows', artist: 'Bob James', mood: 'scared', genre: 'jazz', url : 'bc2542.itp.io/sound_files/19.wav' },
    {id: 20, title: 'In The Hall Of The Mountain King', artist: 'Edvard Grieg', mood: 'scared', genre: 'classical', url : 'bc2542.itp.io/sound_files/20.wav' },
    {id: 21, title: 'Comfortably Numb', artist: 'Pink Floyd', mood: 'chill', genre: 'rock', url : 'bc2542.itp.io/sound_files/21.wav' },
    {id: 22, title: 'Perfect To Me', artist: 'Anne-Marie', mood: 'chill', genre: 'pop', url : 'bc2542.itp.io/sound_files/22.wav' },
    {id: 23, title: 'Self Care', artist: 'Mac Miller', mood: 'chill', genre: 'hip-hop', url : 'bc2542.itp.io/sound_files/23.wav' },
    {id: 24, title: 'Sophisticated Lady', artist: 'Sarah Vaughan', mood: 'chill', genre: 'jazz', url : 'bc2542.itp.io/sound_files/24.wav' },
    {id: 25, title: 'Gymnopedie No.1', artist: 'Erik Satie', mood: 'chill', genre: 'classical', url : 'bc2542.itp.io/sound_files/25.wav' },
];

var state = {
    id: 0,
    title: 'null',
    artist: 'null',
    isPlaying: false,
    mood: 'null',
    genre: 'null',
    url: 'null'
};

var playlist = [];

app.get('/', (req, res) => {
    res.send('Hello from Mood Jukebox!');
});

// GET all list of songs
app.get('/api/songs', (req,res) => {
    res.send(songs);
});

// GET what is currently playing
app.get('/api/player/currently-playing', (req, res) => {
    res.send(state);
});

// GET happy mood
app.get('/api/songs/mood/happy', (req,res) => {
    let happyMood = [];
    for (i = 0; i < songs.length; i++) {
        if (songs[i].mood == "happy") {
            happyMood.push(songs[i]);
        }
    }
    let randomHappySong = happyMood[Math.floor(Math.random()*happyMood.length)];
    res.send(randomHappySong);
});

// GET sad mood
app.get('/api/songs/mood/sad', (req,res) => {
    let sadMood = [];
    for (i = 0; i < songs.length; i++) {
        if (songs[i].mood == "sad") {
            sadMood.push(songs[i]);
        }
    }
    let randomSadSong = sadMood[Math.floor(Math.random()*sadMood.length)];
    res.send(randomSadSong);
});

// GET angry mood
app.get('/api/songs/mood/angry', (req,res) => {
    let angryMood = [];
    for (i = 0; i < songs.length; i++) {
        if (songs[i].mood == "angry") {
            angryMood.push(songs[i]);
        }
    }
    let randomAngrySong = angryMood[Math.floor(Math.random()*angryMood.length)];
    res.send(randomAngrySong);
});

// GET scared mood
app.get('/api/songs/mood/scared', (req,res) => {
    let scaredMood = [];
    for (i = 0; i < songs.length; i++) {
        if (songs[i].mood == "scared") {
            scaredMood.push(songs[i]);
        }
    }
    let randomScaredSong = scaredMood[Math.floor(Math.random()*scaredMood.length)];
    res.send(randomScaredSong);
});

// GET chill mood
app.get('/api/songs/mood/chill', (req,res) => {
    let chillMood = [];
    for (i = 0; i < songs.length; i++) {
        if (songs[i].mood == "chill") {
            chillMood.push(songs[i]);
        }
    }
    let randomChillSong = chillMood[Math.floor(Math.random()*chillMood.length)];
    res.send(randomChillSong);
});

// GET rock genre
app.get('/api/songs/genre/rock', (req,res) => {
    let rockGenre = [];
    for (i = 0; i < songs.length; i++) {
        if (songs[i].genre == "rock") {
            rockGenre.push(songs[i]);
        }
    }
    let randomRockSong = rockGenre[Math.floor(Math.random()*rockGenre.length)];
    res.send(randomRockSong);
});

// GET pop genre
app.get('/api/songs/genre/pop', (req,res) => {
    let popGenre = [];
    for (i = 0; i < songs.length; i++) {
        if (songs[i].genre == "pop") {
            popGenre.push(songs[i]);
        }
    }
    let randomPopSong = popGenre[Math.floor(Math.random()*popGenre.length)];
    res.send(randomPopSong);
});

// GET hip-hop genre
app.get('/api/songs/genre/hip-hop', (req,res) => {
    let hiphopGenre = [];
    for (i = 0; i < songs.length; i++) {
        if (songs[i].genre == "hip-hop") {
            hiphopGenre.push(songs[i]);
        }
    }
    let randomHiphopSong = hiphopGenre[Math.floor(Math.random()*hiphopGenre.length)];
    res.send(randomHiphopSong);
});

// GET classical genre
app.get('/api/songs/genre/classical', (req,res) => {
    let classicalGenre = [];
    for (i = 0; i < songs.length; i++) {
        if (songs[i].genre == "classical") {
            classicalGenre.push(songs[i]);
        }
    }
    let randomClassicalSong = classicalGenre[Math.floor(Math.random()*classicalGenre.length)];
    res.send(randomClassicalSong);
});

// GET jazz genre
app.get('/api/songs/genre/jazz', (req,res) => {
    let jazzGenre = [];
    for (i = 0; i < songs.length; i++) {
        if (songs[i].genre == "jazz") {
            jazzGenre.push(songs[i]);
        }
    }
    let randomJazzSong = jazzGenre[Math.floor(Math.random()*jazzGenre.length)];
    res.send(randomJazzSong);
});

// GET list of song in the playlist
app.get('/api/playlist', (req, res) => {
    if (playlist.length < 1) {
        return res.status(404).send('There is no song in the playlist.');
    }
    res.send(playlist);
});

// POST a song to the playlist
app.post('/api/playlist', (req, res) => {
    const { error } = validateSong(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const song = {
        id : playlist.length + 1,
        title : req.body.title,
        artist : req.body.artist,
        isPlaying : false,
        mood : req.body.mood,
        genre : req.body.genre,
        url : req.body.url
    };
    playlist.push(song);
    res.send(song);
});

// PUT a song to Player (Play song)
app.put('/api/player/play', (req, res) => {

    state = {
        id : req.body.id,
        title: req.body.title,
        artist: req.body.artist,
        isPlaying: true,
        mood: req.body.mood,
        genre: req.body.genre,
        url: req.body.url
    }

    res.send(state);
});

// PUT a song to Player (Play song)
app.put('/api/player/stop', (req, res) => {

    state = {
        id : req.body.id,
        title: req.body.title,
        artist: req.body.artist,
        isPlaying: false,
        mood: req.body.mood,
        genre: req.body.genre,
        url: req.body.url
    }

    res.send(state);
});

function validateSong(song) {
    const schema = {
        title : Joi.string().required(),
        artist : Joi.string().required(),
        isPlaying : false,
        mood : Joi.string().required(),
        genre : Joi.string().required(),
        url : Joi.string().required()
    };

    return Joi.validate(song, schema);
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
