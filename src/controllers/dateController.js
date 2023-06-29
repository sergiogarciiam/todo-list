const dateController = (() => {
  function getTodayDate() {
    var today = new Date();

    var year = today.getFullYear();
    var month = String(today.getMonth() + 1).padStart(2, "0");
    var day = String(today.getDate()).padStart(2, "0");

    var formattedDate = year + "-" + month + "-" + day;

    return formattedDate;
  }

  function getNextDayOfWeek(dayOfWeek) {
    var today = new Date();
    var currentDay = today.getDay();

    var distance = (dayOfWeek + 7 - currentDay + 1) % 7;

    today.setDate(today.getDate() + distance);

    var year = today.getFullYear();
    var month = String(today.getMonth() + 1).padStart(2, "0");
    var day = String(today.getDate()).padStart(2, "0");

    var formattedDate = year + "-" + month + "-" + day;

    return formattedDate;
  }

  return { getTodayDate, getNextDayOfWeek };
})();

export { dateController };
