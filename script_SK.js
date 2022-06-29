$(document).ready(function() {

  /*** display current day ***/
let NowMoment = moment().format("MMMM Do YYYY");
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML = NowMoment;
let currenthour = moment().format("HH");


/*** functions for displaying all timeblock rows ***/
function displayTimeblockRows(currentTime) {
  const currentHour = currentTime.hour();
  for (let i = 9; i <= 17; i ++) {
    const timeblock = createTimeblockRow(i);
    const hourCol = createCol(createHourDiv(i), 1);
    const textArea = createCol(createTextArea(i, currentHour), 10);
    const saveBtn = createCol(createSaveBtn(i), 1);
    appendTimeblockColumns(timeblock, hourCol, textArea, saveBtn);
    document.querySelector('.container').appendChild(timeblock);
  }
}

/*** color code time in space ***/
$(".time-div").each(function () {
var timeDiv = $(this).attr("id").split("-")[1]

if (currentHour == timeDiv) {
  $(this).addClass("present");
  $(this).children(".description").addClass("white-text");
} else if (currentHour < timeDiv) {
  $(this).removeClass("present");
  $(this).addClass("future");
} else if (currentHour > timeDiv) {
  $(this).removeClass("future");
  $(this).addClass("past");
}
});

  //grabs values from time and value divs and saves them to local storage
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  //retrieves items from local storage and sets them in proper places
  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));
});