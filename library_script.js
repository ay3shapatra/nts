function showLikedSongs() {
    document.getElementById('outputSection').style.display = 'none';
    document.getElementById('likedSongsList').style.display = 'block';
    document.getElementById('artistsList').style.display = 'none';
}

function hideLikedSongs() {
    document.getElementById('outputSection').style.display = 'block';
    document.getElementById('likedSongsList').style.display = 'none';
}

function showArtists() {
    document.getElementById('outputSection').style.display = 'none';
    document.getElementById('likedSongsList').style.display = 'none';
    document.getElementById('artistsList').style.display = 'block';
}

function hideArtists() {
    document.getElementById('outputSection').style.display = 'block';
    document.getElementById('artistsList').style.display = 'none';
}
