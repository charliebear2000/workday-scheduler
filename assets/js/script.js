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
      //var hourLabel = parseInt($(this).attr("id").split("hour")[1]);

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


$("#hourOne.description").val(localStorage.getItem("hourOne"));
$("#hourTwo.description").val(localStorage.getItem("hourTwo"));
$("#hourThree.description").val(localStorage.getItem("hourThree"));
$("#hourFour.description").val(localStorage.getItem("hourFour"));
$("#hourFive.description").val(localStorage.getItem("hourFive"));
$("#hourSix.description").val(localStorage.getItem("hourSix"));
$("#hourSeven.description").val(localStorage.getItem("hourSeven"));
$("#hourEight.description").val(localStorage.getItem("hourEight"));
$("#hourNine.description").val(localStorage.getItem("hourNine"));

presentTime();

})