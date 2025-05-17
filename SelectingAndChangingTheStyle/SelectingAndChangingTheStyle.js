$(document).ready(function () {
  // Accessing the first heading to change the text
  $("#button1").click(function () {
    $("#heading1").text("Hello Aslam Youseph");
  });
  // Accessing the Second heading to change the Color
  $(".button2").click(function () {
    $(".heading2").css("color", "blue");
  });
});
