$("#currentDay").html(moment().format("dddd, MMMM Do YYYY"));

// saves the task in local storage
var saveTasks = function() {
   localStorage.setItem("tasks", JSON.stringify(tasks));
 };

 // task text was clicked
$(".description").on("click", "p", function() {
   console.log("<p> was clicked");
   // get current text of p element
   var text = $(this)
     .text()
     .trim();
 
   // replace p element with a new textarea
   var textInput = $("<textarea>").addClass("form-control").val(text);
   $(this).replaceWith(textInput);
 
   // auto focus new element
   textInput.trigger("focus");
 });
 
 // editable field was un-focused
 $(".description").on("blur", "textarea", function() {
   // get current value of textarea
   var text = $(this).val();
 
   // get status type and position in the list
   var status = $(this)
     .closest(".description")
     .attr("id")
     .replace("list-", "");
   var index = $(this)
     .closest(".list-group-item")
     .index();
 
   // update task in array and re-save to localstorage
   tasks[status][index].text = text;
   saveTasks();
 
   // recreate p element
   var taskP = $("<p>")
     .addClass("m-1")
     .text(text);
 
   // replace textarea with new content
   $(this).replaceWith(taskP);
 });
 