var GS, async, http, _;

http = require('http');

async = require('async');

_ = require('lodash');

GS = require('grooveshark-streaming');

exports.getSongId = function(song, callback) {
  if (song == null) {
    throw new Error('Missing song argument');
  }
  return GS.Tinysong.getSongInfo(song.title, song.artist, function(error, songInfo) {
    if (error != null) {
      return callback(error);
    }
    if (songInfo == null) {
      return callback(new Error("Unknown song: " + song.artist + " - " + song.title));
    }
    return callback(null, songInfo.SongID);
  });
};

exports.getStreamingUrl = function(songId, callback) {
  if (songId == null) {
    throw new Error('Missing song id argument');
  }
  if (!_.isNumber(songId)) {
    throw new Error("Invalid song id argument: " + songId);
  }
  return GS.Grooveshark.getStreamingUrl(songId, function(error, streamingUrl) {
    if (error != null) {
      return callback(error);
    }
    if (streamingUrl == null) {
      return callback(new Error("Unknown song id: " + songId));
    }
    return callback(null, streamingUrl);
  });
};

exports.getStreamFromUrl = function(url, callback) {
  var request;
  if (url == null) {
    throw new Error('Missing url argument');
  }
  request = http.get(url);
  request.on('error', callback);
  return request.on('response', function(stream) {
    return callback(null, stream);
  });
};

exports.search = function(song, callback) {
  return async.compose(exports.getStreamFromUrl, exports.getStreamingUrl, exports.getSongId).apply(null, arguments);
};
