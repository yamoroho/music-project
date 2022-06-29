import {makeAutoObservable} from "mobx";

export default class PlayerStore {
  constructor() {
    this._tracks = []


    makeAutoObservable(this);
  }
}