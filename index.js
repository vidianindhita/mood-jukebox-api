const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const songs = [
    {id: 1, title: 'I’m A Believer', artist: 'The Monkees', mood: 'happy', genre: 'rock' },
    {id: 2, title: 'Beautiful Day', artist: 'U2', mood: 'happy', genre: 'pop' },
    {id: 3, title: 'No Problem', artist: 'Chance The Rapper', mood: 'happy', genre: 'hip-hop' },
    {id: 4, title: 'Freddie Freeloader', artist: 'Miles Davis', mood: 'happy', genre: 'jazz' },
    {id: 5, title: 'Sonata No. 17 in C', artist: 'Mozart', mood: 'happy', genre: 'classical' },
    {id: 6, title: 'Middle of the Road', artist: 'The Pretenders', mood: 'sad', genre: 'rock' },
    {id: 7, title: 'Someone Like You', artist: 'Adele', mood: 'sad', genre: 'pop' },
    {id: 8, title: 'Stan', artist: 'Eminem', mood: 'sad', genre: 'hip-hop' },
    {id: 9, title: 'How High The Moon', artist: 'Ella Fitzgerald', mood: 'sad', genre: 'jazz' },
    {id: 10, title: 'Nocturnes', artist: 'Frédéric Chopin', mood: 'sad', genre: 'classical' },
    {id: 11, title: 'St. Anger', artist: 'Metallica', mood: 'angry', genre: 'rock' },
    {id: 12, title: 'Sail', artist: 'AWOLNATION', mood: 'angry', genre: 'pop' },
    {id: 13, title: 'Black Skinhead', artist: 'Kanye West', mood: 'angry', genre: 'hip-hop' },
    {id: 14, title: 'Africa', artist: 'John Coltrane', mood: 'angry', genre: 'jazz' },
    {id: 15, title: '5th Symphony', artist: 'Beethoven', mood: 'angry', genre: 'classical' },
    {id: 16, title: 'Black Sabbath', artist: 'Black Sabbath', mood: 'scared', genre: 'rock' },
    {id: 17, title: 'Haunted', artist: 'Beyonce', mood: 'scared', genre: 'pop' },
    {id: 18, title: 'Kids See Ghosts', artist: 'Kids See Ghosts', mood: 'scared', genre: 'hip-hop' },
    {id: 19, title: 'The Valley of the Shadows', artist: 'Bob James', mood: 'scared', genre: 'jazz' },
    {id: 20, title: 'In The Hall Of The Mountain King', artist: 'Edvard Grieg', mood: 'scared', genre: 'classical' },
    {id: 21, title: 'Comfortably Numb', artist: 'Pink Floyd', mood: 'chill', genre: 'rock' },
    {id: 22, title: 'Perfect To Me', artist: 'Anne-Marie', mood: 'chill', genre: 'pop' },
    {id: 23, title: 'Self Care', artist: 'Mac Miller', mood: 'chill', genre: 'hip-hop' },
    {id: 24, title: 'Sophisticated Lady', artist: 'Sarah Vaughan', mood: 'chill', genre: 'jazz' },
    {id: 25, title: 'Gymnopedie No.1', artist: 'Erik Satie', mood: 'chill', genre: 'classical' },
];

var state = {
    id: 0,
    title: 'null',
    artist: 'null',
    isPlaying: false,
    mood: 'null',
    genre: 'null'
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
    if (state.isPlaying == false) {
        return res.status(404).send('There is currently no song being played.');
    }
    res.send(state);
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
        genre : req.body.genre
    };
    playlist.push(song);
    res.send(song);
});

// PUT a song to Player (Play song)
app.put('/api/player/play', (req, res) => {

    if (state.isPlaying == false) {
        return res.status(404).send('There is no song to play.');
    }
    
    const state = {
        id : req.body.id,
        title: req.body.title,
        artist: req.body.artist,
        isPlaying: true,
        mood: req.body.mood,
        genre: req.body.genre
    }

    res.send(state);
});

function validateSong(song) {
    const schema = {
        title : Joi.string().required(),
        artist : Joi.string().required(),
        isPlaying : false,
        mood : Joi.string().required(),
        genre : Joi.string().required()
    };

    return Joi.validate(song, schema);
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
