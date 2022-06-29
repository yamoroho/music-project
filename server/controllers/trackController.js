const uuid = require('uuid');
const path = require('path')
const {Track} = require('../models/models');
const ApiError = require('../error/ApiError');

class TrackController {
  async create(req, res, next) {
    try {
      let {name, artist, text} = req.body;
      console.log(req.body);
      console.log(req.files);
      const {picture} = req.files;
      const {audio} = req.files;
      let fileName = uuid.v4() + ".jpg";
      let audioName = uuid.v4() + ".mp3";
      picture.mv(path.resolve(__dirname, '..', 'static/img', fileName));
      audio.mv(path.resolve(__dirname, '..', 'static/track', audioName));
      const track = await Track.create({name, artist, text, picture: fileName, audio: audioName})
      
      return res.json(track)
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    let tracks = await Track.findAndCountAll();

    return res.json(tracks)
  }

  async getOne(req, res) {
    const {id} = req.params
    const track = await Track.findOne(
      {
        where: {id},
        // include: [{model: DeviceInfo, as: 'info'}]
      }      
    )

    return res.json(track)
  }
}

module.exports = new TrackController();