export class Task {
  constructor(mainContainer = null) {
    this._name = "";
    this._project = this.getProjectName(mainContainer);
    this._priority = "4";
    this._date = this.getDateContainer(mainContainer);
    this._description = "";
    this._isComplete = false;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get project() {
    return this._project;
  }

  set project(value) {
    this._project = value;
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    this._priority = value;
  }

  get date() {
    return this._date;
  }

  set date(value) {
    this._date = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get isComplete() {
    return this._isComplete;
  }

  set isComplete(value) {
    this._isComplete = value;
  }

  getDateContainer(mainContainer) {
    if (mainContainer === null) {
      return "";
    }
    if (mainContainer.classList.contains("today-container")) {
      return dateController.getTodayDate();
    } else if (mainContainer.classList.contains("day-container")) {
      const dayOfWeek = getDayOfWeek(mainContainer);
      return dateController.getNextDayOfWeek(dayOfWeek);
    } else {
      return "";
    }
  }

  getProjectName(mainContainer) {
    if (mainContainer === null) {
      return "";
    } else if (mainContainer.classList.contains("specific-project-container")) {
      return mainContainer.id.substring(1);
    } else {
      return "Inbox";
    }
  }

  getDayOfWeek(mainContainer) {
    return Array.from(mainContainer.parentNode.children).indexOf(mainContainer);
  }
}
