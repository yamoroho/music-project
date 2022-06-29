import {makeAutoObservable} from "mobx";

export default class TrackStore {
  constructor() {
    this._tracks = [{
      "id": 5,
      "name": "test5",
      "artist": "test5",
      "text": "test5",
      "listens": null,
      "picture": "2c373a9e-6307-4d63-8fba-98c4bfd0161a.jpg",
      "audio": "61719f8a-8769-4c73-922e-ce9898abbf93.mp3",
      "createdAt": "2022-06-23T08:39:16.176Z",
      "updatedAt": "2022-06-23T08:39:16.176Z",
      "albumId": null
    }]
     this._selectedTrack = {
      "id": 5,
      "name": "test5",
      "artist": "test5",
      "text": "test5",
      "listens": null,
      "picture": "3a996ff5-29ff-407e-8af2-534a25c983bf.jpg",
      "audio": "61719f8a-8769-4c73-922e-ce9898abbf93.mp3",
      "createdAt": "2022-06-23T08:39:16.176Z",
      "updatedAt": "2022-06-23T08:39:16.176Z",
      "albumId": null
    }
    // this._selectedBrand = {}
    // this._page = 1
    // this._totalCount = 0
    // this._limit = 3

    makeAutoObservable(this);
  }

  setTracks(tracks) {
    this._tracks = tracks;
  }

  setSelectedTrack(selectedTrack) {
    this._selectedTrack = selectedTrack;
  }

  get tracks() {
    return this._tracks
  }

  get selectedTrack() {
    return this._selectedTrack
  }


}