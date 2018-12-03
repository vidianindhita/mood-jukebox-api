# Mood Jukebox API

Server: http://206.189.186.47:3000

## REST API

**GET /api/songs**
Return: All song list

**GET /api/player/currently-playing**
Return: A song which state isPlaying is true

**GET /api/songs/mood/happy**
Return: A random song which mood is equal happy

**GET /api/songs/mood/sad**
Return: A random song which mood is equal sad

**GET /api/songs/mood/angry**
Return: A random song which mood is equal angry

**GET /api/songs/mood/scared**
Return: A random song which mood is equal scared

**GET /api/songs/mood/chill**
Return: A random song which mood is equal chill

**GET /api/songs/genre/rock**
Return: A random song which genre is equal rock

**GET /api/songs/genre/pop**
Return: A random song which genre is equal pop

**GET /api/songs/genre/hip-hop**
Return: A random song which genre is equal hip-hop

**GET /api/songs/genre/classical**
Return: A random song which genre is equal classical

**GET /api/songs/genre/jazz**
Return: A random song which genre is equal jazz

**GET /api/playlist**
Return: list of songs in a playlist

**POST /api/playlist**
Post a song in a playlist. This function will CREATE a new object (a song) in a playlist. Example of request body object:

{
    "title": "How High The Moon",
    "artist": "Ella Fitzgerald",
    "mood": "sad",
    "genre": "jazz",
    "url": "http://206.189.186.47:3000/sound_files/9.wav"
}

**PUT /api/player/play**
Put play will update the state isPlaying to true. If isPlaying is true, the server know that the song is currently playing. Once the song is done playing, use PUT /api/player/stop to tell the server that the song is done playing. Example of request body object:

{
    "id": 9,
    "title": "How High The Moon",
    "artist": "Ella Fitzgerald",
    "mood": "sad",
    "genre": "jazz",
    "url": "http://206.189.186.47:3000/sound_files/9.wav"
}

**PUT /api/player/play**
Put stop will tell the server that the song is done playing. Example of request body object:

{
    "id": 9,
    "title": "How High The Moon",
    "artist": "Ella Fitzgerald",
    "mood": "sad",
    "genre": "jazz",
    "url": "http://206.189.186.47:3000/sound_files/9.wav"
}