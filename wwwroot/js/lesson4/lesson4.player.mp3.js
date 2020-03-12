"use strict";

// Task4.Object constructors

// MP3Player object constructor.
function PlayerMP3() {
    this.playlist = [];
    this.track = null;
    this.addTrack = (track) => {
        this.playlist.push(track);
    };
    this.clearPlaylist = () => {
        this.pause();
        this.track = null;
        this.playlist.splice(0, this.playlist.length);
    };
    this.play = () => {
        if (this.track !== null) {
            console.log(`Now playing: ${this.track.trackInfo()}`);
        } else if (this.playlist.length > 0) {
            this.track = this.playlist[0];
            console.log(`Now playing: ${this.track.trackInfo()}`);
        }
    };
    this.pause = () => {
        console.log("Pause");
    };
    this.preview = () => {
        let currentIndex = this.playlist.findIndex((element) => element === this.track);
        if (currentIndex > 0) {
            this.track = this.playlist[--currentIndex];
            this.play();
        }
    };
    this.next = () => {
        let currentIndex = this.playlist.findIndex((element) => element === this.track);
        if (currentIndex < this.playlist.length) {
            this.track = this.playlist[++currentIndex];
            this.play();
        }
    };
}

// Track object constructor.
function Track(name, artist) {
    this.name = name;
    this.artist = artist;
    this.trackInfo = () => {
        return `${this.artist} - ${this.name}`;
    };
}


// New MP3 player object.
const player = new PlayerMP3();
player.play();

player.addTrack(new Track(
    "Thunder",
    "Imagine Dragons"
));
player.play();

player.addTrack(new Track(
    "Adventure Of A Lifetime",
    "Coldplay"
));
player.addTrack(new Track(
    "Believer",
    "Imagine Dragon"
));

player.next();
player.preview();
player.preview();

player.clearPlaylist();
player.play();

player.addTrack(new Track(
    "Next to Me",
    "Imagine Dragon"
));
player.play();