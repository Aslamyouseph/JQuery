$(document).ready(function () {
  // Accessing the first heading to change the text
  $("#button1").on("click", function () {
    $("#heading1").text("Hello Aslam Youseph");
  });

  // Accessing the second heading to change the color
  $(".button2").on("click", function () {
    $(".heading2").css("color", "blue");
  });

  //Removing the particular text
  $(".button3").on("click", function () {
    // $(".heading3").remove(); // In here the text remove very fast
    $(".heading3").fadeOut(); // In here the text remove smoother
  });
});
