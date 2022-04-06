$("#currentDay").html(moment().format("dddd, MMMM Do YYYY"));

$(document).ready(function() {

  $(".saveBtn").on("click", function() {
    var activity = $(this).siblings(".description").val();
    var timeOfDay = $(this).parent().attr("id");
    localStorage.setItem(timeOfDay, activity);
    })

  function presentTime() {
    var currentTime = moment().hour();
    console.log(currentTime);

    $(".current-time").each(function() {
      var hourLabel = parseInt($(this).attr("id"));

      if (hourLabel < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (hourLabel === currentTime) {
        $(this).removeClass("future");
        $(this).addClass("present");
        $(this).removeClass("past");
      }
      else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }
      
    })
  }

  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  presentTime();

})