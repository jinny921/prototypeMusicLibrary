function Library(inputName,inputCreator) {
  this.name = inputName;
  this.creator = inputCreator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function(newPlaylist) {
  this.playlists.push(newPlaylist);
}

Playlist.prototype.addTrack = function(newTrack) {
  this.tracks.push(newTrack);
}

function Playlist(playlistName) {
  this.name = playlistName;
  this.tracks = [];
  this.overallRating = function() {
    let ratingSum = 0;
    if (this.tracks.length > 0) {
      for (track of this.tracks) {
        ratingSum += track.rating;
      }
      return (ratingSum / this.tracks.length);
    }
  }
  this.totalDuration = function() {
    let sumOfDuration = 0;
    if (this.tracks.length > 0) {
      for (track of this.tracks) {
        sumOfDuration += track.length;
      }
      return sumOfDuration;
    }
  }
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;//integer from 1 - 5
  this.length = length;//integer in seconds
}


var library1 = new Library('My-Music', 'Jinny');
var p1 = new Playlist('Madilyn Bailey');
var p2 = new Playlist('Pop Songs');
var t1 = new Track('Something Just Like This', 5, 178);
var t2 = new Track('Shape of You', 4, 196);
var t3 = new Track('All of You', 1, 163);
var t4 = new Track('Thinking OutLoud', 4, 170);
var t5 = new Track('Million Reasons', 5, 153);
var t6 = new Track('Human', 2, 160);

library1.addPlaylist(p2);
library1.addPlaylist(p1);
p1.addTrack(t1);
p1.addTrack(t2);
p1.addTrack(t3);
p2.addTrack(t4);
p2.addTrack(t5);
p2.addTrack(t6);

console.log('tracks:', p1.tracks);
console.log('tracks:', p2.tracks);

console.log('playlist 1 overall rating', p1.overallRating());
console.log('playlist 2 overall rating', p2.overallRating());

console.log('playlist 1 total duration', p1.totalDuration());
console.log('playlist 2 total duration', p2.totalDuration());

console.log('This is play list 1: ' + p1.name + ', and these are the tracks: ' + library1.playlists[0].name);
console.log('The playlist ' + p1.name + 'it has overall rating of: ' + library1.playlists[0].overallRating());
// console.log(p1.totalDuration);
// Date.prototype.friendlyFormat = function() {
//   return this.day + "/ " + this.month;
// }
