$(document).ready(function() {

  /*** display current day ***/
  $("#currentDay").text(moment().format("MMMM Do YYYY"));
  let description = $(".description");
  let saveButton = $(".saveBtn");
  let currentHour = moment().hour();
  console.log(currentHour);
  console.log(typeof currentHour);

/*** color code time in space ***/
description.each(function () {
  let timeBlock = parseInt($(this).attr("id"));

  if (timeBlock === currentHour) {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
  }
  else if (timeBlock < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
  }
  else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
  }
});

// Function to save task input once the save button is clicked. 
function saveTasks () {
    let currentTime = $(this).data("hour");
    let rowHour = $(this).siblings(".hour").text();
    let task = $(this).siblings(".description").val();

    console.log(currentTime);
    console.log(rowHour);
    console.log(task);

    if (task === "") {
        localStorage.setItem(rowHour, "");
    }
    else {
        localStorage.setItem(rowHour, task);
    }
}

saveButton.on("click", saveTasks);

});