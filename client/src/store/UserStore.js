import {makeAutoObservable} from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    this._album = {};
    this._playlist = {};
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }
  setAlbum(album) {
    this._album = album;
  }
  setPlaylist(playlist) {
    this._playlist = playlist;
  }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }

  get album() {
    return this._album
  }

  get playlist() {
    return this._playlist
  }
}