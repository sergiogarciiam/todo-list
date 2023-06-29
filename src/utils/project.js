export class Project {
  constructor() {
    this._name = "";
    this._description = "";
    this._isQuick = false;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get isQuick() {
    return this._isQuick;
  }

  set isQuick(value) {
    this._isQuick = value;
  }
}
