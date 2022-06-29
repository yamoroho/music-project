const {Playlist} = require('../models/models');
class PlaylistController {
  async create(req, res) {
    const {name} = req.body;
    const playlist = await Playlist.create({name})
    return res.json(playlist)
  }

  async getAll(req, res) {
    const playlists = await Playlist.findAll()
    return res.json(playlists)
  }

  async getAllWithUserID(req, res) {
    const playlists = await Playlist.findAll()
    return res.json(playlists)
  }

}

module.exports = new PlaylistController();