$(document).ready(function () {
  for (let index = 8; index <= 17; index++) {
    var saveTask = localStorage.getItem("hour" + index + "-task");

    $("textarea[name=hour-" + index + "]").val(saveTask);

    var currentHour = moment().format("H");

    if (currentHour == index) {
      $("textarea[name=hour-" + index + "]").addClass("present");
    } else if (currentHour < index) {
      $("textarea[name=hour-" + index + "]").addClass("future");
    } else {
      $("textarea[name=hour-" + index + "]").addClass("past");
    }

    $("#btn-" + index).on("click", function () {
      var taskItem = $("textarea[name=hour-" + index + "]").val();
      //   $("#hour-8").append("taskItemEight");
      console.log(taskItem);

      localStorage.setItem("hour" + index + "-task", taskItem);
    });
  }

  //   console.log("click");
});
var currentDay = moment().format("MMM D YYYY H:m a");
$("p[id=currentDay]").text(currentDay);
