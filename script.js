# script.js

```javascript
// ==========================================
// SONG OBJECT
// ==========================================

class Song {

    constructor(title, artist, genre, rating, lengthInSeconds, songUrl) {
        this.title = title;
        this.artist = artist;
        this.genre = genre;
        this.rating = rating;
        this.lengthInSeconds = lengthInSeconds;
        this.songUrl = songUrl;
    }

    likeSong() {
        this.rating++;

        if (this.rating > 10) {
            this.rating = 10;
        }
    }
}


// ==========================================
// PLAYLIST
// Maximum of 5 songs
// ==========================================

let playlist = [
    new Song(
        "Fever",
        "Buckshot and Fakemink",
        "rap",
        9,
        145,
        "https://www.youtube.com/watch?v=mqEZcXdtAUA"
    ),

    new Song(
        "Feel It",
        "D4vd",
        "pop",
        8.5,
        157,
        "https://www.youtube.com/watch?v=N4lQtxmOwSg"
    ),

    new Song(
        "No Lie",
        "Sean Paul and Dua Lipa",
        "pop",
        8.5,
        221,
        "https://www.youtube.com/watch?v=GzU8KqOY8YA"
    )
];


// ==========================================
// DISPLAY PLAYLIST
// ==========================================

function displayPlaylist() {

    const playlistElement = document.getElementById("playlist");

    playlistElement.innerHTML = "";

    if (playlist.length === 0) {
        playlistElement.innerHTML =
            '<div class="empty">Your playlist is empty. Add a song!</div>';
        return;
    }

    for (let i = 0; i < playlist.length; i++) {

        const song = playlist[i];

        const minutes = Math.floor(song.lengthInSeconds / 60);
        const seconds = song.lengthInSeconds % 60;

        const formattedSeconds =
            seconds < 10 ? "0" + seconds : seconds;

        const card = document.createElement("div");

        card.className = "song-card";

        card.innerHTML = `
            <div class="song-number">SONG ${i + 1}</div>

            <h2>${song.title}</h2>

            <p class="artist">by ${song.artist}</p>

            <span class="genre">${song.genre}</span>

            <p class="rating">
                ⭐ ${song.rating}/10
            </p>

            <p class="length">
                ⏱️ ${minutes}:${formattedSeconds}
            </p>

            <button class="play-button"
                onclick="playSong(${i})">
                ▶ Play Song
            </button>
        `;

        playlistElement.appendChild(card);
    }
}


// ==========================================
// PLAY SONG
// Opens songUrl in a new browser tab
// ==========================================

function playSong(index) {

    const song = playlist[index];

    window.open(song.songUrl, "_blank");
}


// ==========================================
// FIND AVERAGE RATING
// Same idea as findAverageRating()
// from the Java project
// ==========================================

function findAverageRating() {

    if (playlist.length === 0) {
        return 0;
    }

    let total = 0;

    for (let i = 0; i < playlist.length; i++) {
        total += playlist[i].rating;
    }

    return total / playlist.length;
}


// ==========================================
// FIND HIGHEST-RATED SONG
// Same idea as findFavorite()
// ==========================================

function findFavorite() {

    if (playlist.length === 0) {
        return null;
    }

    let favorite = playlist[0];

    for (let i = 1; i < playlist.length; i++) {

        if (playlist[i].rating > favorite.rating) {
            favorite = playlist[i];
        }
    }

    return favorite;
}


// ==========================================
// FIND TOTAL PLAYLIST TIME
// Same idea as findTotalTime()
// ==========================================

function findTotalTime() {

    let total = 0;

    for (let i = 0; i < playlist.length; i++) {
        total += playlist[i].lengthInSeconds;
    }

    return total;
}


// ==========================================
// FORMAT TIME
// ==========================================

function formatTime(totalSeconds) {

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedSeconds =
        seconds < 10 ? "0" + seconds : seconds;

    return minutes + ":" + formattedSeconds;
}


// ==========================================
// UPDATE FINAL REPORT
// ==========================================

function updateReport() {

    const averageRating = findAverageRating();
    const favorite = findFavorite();
    const totalSeconds = findTotalTime();

    document.getElementById("totalSongs").textContent =
        playlist.length;

    document.getElementById("averageRating").textContent =
        averageRating.toFixed(1) + "/10";

    document.getElementById("totalTime").textContent =
        formatTime(totalSeconds);

    if (favorite !== null) {

        document.getElementById("favoriteSong").textContent =
            favorite.title;

    } else {

        document.getElementById("favoriteSong").textContent =
            "None";
    }


    // ======================================
    // PLAYLIST RATING
    // ======================================

    const ratingElement =
        document.getElementById("playlistRating");

    if (averageRating >= 9) {

        ratingElement.textContent = "AMAZING!";

    } else if (averageRating >= 7) {

        ratingElement.textContent = "GREAT PLAYLIST!";

    } else {

        ratingElement.textContent =
            "KEEP WORKING ON IT!";
    }
}


// ==========================================
// REMOVE SONG
// Asks user for the title
// ==========================================

function removeSong() {

    if (playlist.length === 0) {
        alert("There are no songs to remove.");
        return;
    }

    const titleToRemove =
        prompt("Enter the title of the song you want to remove:");

    if (titleToRemove === null) {
        return;
    }

    const searchTitle = titleToRemove.trim().toLowerCase();

    let found = false;

    for (let i = 0; i < playlist.length; i++) {

        if (playlist[i].title.toLowerCase() === searchTitle) {

            playlist.splice(i, 1);

            found = true;

            break;
        }
    }

    if (found) {

        alert("Song removed successfully.");

        displayPlaylist();
        updateReport();

    } else {

        alert("Song was not found. No song was removed.");
    }
}


// ==========================================
// ADD SONG
// ==========================================

function addSong() {

    // Check maximum of 5 songs

    if (playlist.length >= 5) {

        alert(
            "Your playlist already has 5 songs. " +
            "Please remove a song before adding another."
        );

        return;
    }


    const title = prompt("Enter song title:");

    if (title === null || title.trim() === "") {
        alert("Song was not added.");
        return;
    }


    const artist = prompt("Enter artist:");

    if (artist === null || artist.trim() === "") {
        alert("Song was not added.");
        return;
    }


    const genre = prompt("Enter genre:");

    if (genre === null || genre.trim() === "") {
        alert("Song was not added.");
        return;
    }


    const ratingInput =
        prompt("Enter rating from 0 to 10:");

    if (ratingInput === null) {
        return;
    }

    const rating = Number(ratingInput);

    if (isNaN(rating) || rating < 0 || rating > 10) {

        alert("Rating must be a number between 0 and 10.");

        return;
    }


    const lengthInput =
        prompt("Enter length in seconds:");

    if (lengthInput === null) {
        return;
    }

    const lengthInSeconds = Number(lengthInput);

    if (isNaN(lengthInSeconds) || lengthInSeconds <= 0) {

        alert("Length must be a positive number.");

        return;
    }


    const songUrl = prompt("Enter song URL:");

    if (songUrl === null || songUrl.trim() === "") {

        alert("Song was not added.");

        return;
    }


    // Create new Song object

    const newSong = new Song(
        title.trim(),
        artist.trim(),
        genre.trim(),
        rating,
        Math.floor(lengthInSeconds),
        songUrl.trim()
    );


    // Add to playlist

    playlist.push(newSong);

    alert("Song added successfully!");

    displayPlaylist();
    updateReport();
}


// ==========================================
// BUTTON EVENTS
// ==========================================

document
    .getElementById("addSongButton")
    .addEventListener("click", addSong);

document
    .getElementById("removeSongButton")
    .addEventListener("click", removeSong);


// ==========================================
// START WEBSITE
// ==========================================

displayPlaylist();
updateReport();
```
