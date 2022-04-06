$("#currentDay").html(moment().format("dddd, MMMM Do YYYY"));

$(document).ready(function() {

  $(".saveBtn").on("click", function() {
    var activity = $(this).siblings(".description").val();
    var timeOfDay = $(this).parent().attr("id");
    localStorage.setItem(timeOfDay, activity);
    })


$("#hourOne.description").val(localStorage.getItem("hourOne"));
$("#hourTwo.description").val(localStorage.getItem("hourTwo"));
$("#hourThree.description").val(localStorage.getItem("hourThree"));
$("#hourFour.description").val(localStorage.getItem("hourFour"));
$("#hourFive.description").val(localStorage.getItem("hourFive"));
$("#hourSix.description").val(localStorage.getItem("hourSix"));
$("#hourSeven.description").val(localStorage.getItem("hourSeven"));
$("#hourEight.description").val(localStorage.getItem("hourEight"));
$("#hourNine.description").val(localStorage.getItem("hourNine"));

  })