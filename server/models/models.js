const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Track = sequelize.define( 'track', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING},
  artist: {type: DataTypes.STRING},
  text: {type: DataTypes.STRING},
  listens: {type: DataTypes.INTEGER},
  picture: {type: DataTypes.STRING, allowNull: false},
  audio: {type: DataTypes.STRING, allowNull: false}
})

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  nickname: {type: DataTypes.STRING, unique: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Album = sequelize.define( 'album', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  user_id: {type: DataTypes.INTEGER},
  name: {type: DataTypes.STRING},
  author: {type: DataTypes.STRING},
  text: {type: DataTypes.STRING},
  picture: {type: DataTypes.STRING, allowNull: false},
  Tracks: {type: DataTypes.ARRAY(DataTypes.STRING)}
})

const Playlist = sequelize.define('playlist', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  user_id: {type: DataTypes.INTEGER},
  name: {type: DataTypes.STRING},
  author: {type: DataTypes.STRING},
  text: {type: DataTypes.STRING},
  picture: {type: DataTypes.STRING, allowNull: false},
  Tracks: {type: DataTypes.ARRAY(DataTypes.STRING)}
})

Album.hasMany(Track);
Track.belongsTo(Album);

Playlist.hasMany(Track);
Track.belongsTo(Playlist);


User.hasMany(Playlist);
Playlist.belongsTo(User);

User.hasMany(Album);
Album.belongsTo(User);

module.exports = {
  Track, 
  Album,
  User,
  Playlist
}