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
Post a song in a playlist

**PUT /api/player/play**
Put isPlaying in the state to true

