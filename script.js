/* ============================================================
   My Music Playlist — vanilla JS port of the Java Song project
   ============================================================ */

// --- Song "class" (mirrors Song.java) -------------------------
function Song(title, artist, genre, rating, lengthInSeconds, songUrl) {
  this.title = title;
  this.artist = artist;
  this.genre = genre;
  this.rating = rating;
  this.lengthInSeconds = lengthInSeconds;
  this.songUrl = songUrl;
}

// likeSong() from Java: bump rating, cap at 10
Song.prototype.likeSong = function () {
  this.rating++;
  if (this.rating > 10) this.rating = 10;
};

// toString() from Java
Song.prototype.toString = function () {
  return this.title + " by " + this.artist +
    " \n Genre: " + this.genre +
    " \n Rating: " + this.rating + "/10" +
    " \n Length: " + this.lengthInSeconds + " seconds";
};

// --- Playlist state (max 5, like the Song[5] array) ----------
const MAX_SONGS = 5;
let playlist = [];

// Seed with the three songs from SongRunner.java
playlist.push(new Song("Fever", "Buckshot and Fakemink", "rap", 9, 145,
  "https://www.youtube.com/watch?v=mqEZcXdtAUA"));
playlist.push(new Song("Feel It", "D4vd", "pop", 8.5, 157,
  "https://www.youtube.com/watch?v=N4lQtxmOwSg"));
playlist.push(new Song("No Lie", "Sean Paul and Dua Lipa", "pop", 8.5, 221,
  "https://www.youtube.com/watch?v=GzU8KqOY8YA"));

// --- Helpers (ports of the static methods in SongRunner) -----
function findAverageRating() {
  if (playlist.length === 0) return 0;
  let total = 0;
  for (const s of playlist) total += s.rating;
  return total / playlist.length;
}

function findFavorite() {
  if (playlist.length === 0) return null;
  let fav = playlist[0];
  for (const s of playlist) {
    if (s.rating > fav.rating) fav = s;
  }
  return fav;
}

function findTotalTime() {
  let total = 0;
  for (const s of playlist) total += s.lengthInSeconds;
  return total;
}

// Rating rules from the assignment spec
function playlistVerdict(avg) {
  if (playlist.length === 0) return { text: "Add a song to see your rating.", cls: "empty" };
  if (avg >= 9) return { text: "AMAZING!", cls: "amazing" };
  if (avg >= 7) return { text: "GREAT PLAYLIST!", cls: "great" };
  return { text: "KEEP WORKING ON IT!", cls: "keep" };
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return m + "m " + s + "s";
}

// --- Add / Remove (ports of addSong / removeSong) -------------
function addSong(song) {
  if (playlist.length >= MAX_SONGS) {
    alert("Your playlist is full (5 songs). Remove a song first.");
    return false;
  }
  playlist.push(song);
  render();
  return true;
}

function removeSongByTitle(title) {
  const idx = playlist.findIndex(function (s) { return s.title === title; });
  if (idx === -1) return false;
  playlist.splice(idx, 1); // shifts remaining elements left, like the Java version
  render();
  return true;
}

// --- Prompt-based flows (mirror the Scanner input in Java) -----
function promptForNewSong() {
  if (playlist.length >= MAX_SONGS) {
    alert("Your playlist already has 5 songs. Remove one first.");
    return;
  }

  const title = prompt("Enter song title:");
  if (!title) return;
  const artist = prompt("Enter artist:");
  if (!artist) return;
  const genre = prompt("Enter genre:");
  if (!genre) return;

  const ratingRaw = prompt("Enter rating (0–10):");
  const rating = parseFloat(ratingRaw);
  if (isNaN(rating)) { alert("Invalid rating."); return; }

  const lengthRaw = prompt("Enter length in seconds:");
  const lengthInSeconds = parseInt(lengthRaw, 10);
  if (isNaN(lengthInSeconds)) { alert("Invalid length."); return; }

  const songUrl = prompt("Enter song URL:");
  if (!songUrl) return;

  addSong(new Song(title, artist, genre, rating, lengthInSeconds, songUrl));
}

function promptForRemoval() {
  if (playlist.length === 0) {
    alert("There are no songs to remove.");
    return;
  }
  const title = prompt("Enter the title of the song you want to remove:");
  if (!title) return;
  const removed = removeSongByTitle(title);
  if (removed) {
    alert('"' + title + '" was removed successfully.');
  } else {
    alert("Song was not found. No song was removed.");
  }
}

// --- Rendering ----------------------------------------------
const grid = document.getElementById("grid");
const statsEl = document.getElementById("stats");
const capacityEl = document.getElementById("capacity");
const emptyEl = document.getElementById("empty");

function render() {
  renderCards();
  renderStats();
}

function renderCards() {
  grid.innerHTML = "";
  emptyEl.hidden = playlist.length > 0;

  playlist.forEach(function (song, i) {
    const card = document.createElement("article");
    card.className = "card";
    card.style.animationDelay = (i * 0.04) + "s";

    const pct = Math.max(0, Math.min(100, (song.rating / 10) * 100));

    card.innerHTML =
      '<div class="cover"><span class="note">♪</span></div>' +
      '<span class="genre">' + escapeHtml(song.genre) + '</span>' +
      '<h3>' + escapeHtml(song.title) + '</h3>' +
      '<div class="artist">' + escapeHtml(song.artist) + '</div>' +
      '<div class="meta">' +
        '<div class="rating">' +
          '<span>' + song.rating + '/10</span>' +
          '<span class="bar"><i style="width:' + pct + '%"></i></span>' +
        '</div>' +
        '<span>' + formatTime(song.lengthInSeconds) + '</span>' +
      '</div>' +
      '<div class="actions">' +
        '<button class="play">▶ Play Song</button>' +
        '<button class="like" title="Like this song (+1 rating, max 10)">♥</button>' +
      '</div>';

    // Play button → open songUrl in a new tab
    card.querySelector(".play").addEventListener("click", function () {
      window.open(song.songUrl, "_blank", "noopener");
    });

    // Like button → Song.likeSong()
    card.querySelector(".like").addEventListener("click", function () {
      song.likeSong();
      render();
    });

    grid.appendChild(card);
  });
}

function renderStats() {
  const count = playlist.length;
  const avg = findAverageRating();
  const fav = findFavorite();
  const total = findTotalTime();
  const verdict = playlistVerdict(avg);

  capacityEl.textContent = count + " / " + MAX_SONGS + " songs";
  capacityEl.classList.toggle("full", count >= MAX_SONGS);

  statsEl.innerHTML =
    statCell("Total Songs", String(count)) +
    statCell("Average Rating", count ? avg.toFixed(2) + " / 10" : "—") +
    statCell("Highest Rated", fav ? fav.title + " — " + fav.rating + "/10" : "—", true) +
    statCell("Playlist Time", count ? formatTime(total) : "—") +
    statCell("Songs Created", String(count)) +
    '<div class="verdict ' + verdict.cls + '">Playlist Rating: ' + verdict.text + '</div>';
}

function statCell(key, value, small) {
  return '<div class="stat">' +
    '<div class="k">' + key + '</div>' +
    '<div class="v' + (small ? " small" : "") + '">' + value + '</div>' +
  '</div>';
}

// --- Tiny escaping helper (safe rendering of user input) ----
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// --- Wire up buttons ----------------------------------------
document.getElementById("addBtn").addEventListener("click", promptForNewSong);
document.getElementById("removeBtn").addEventListener("click", promptForRemoval);

// First paint
render();
