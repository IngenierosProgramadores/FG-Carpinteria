$(document).ready(function () {
  var $window = $(window);
  $(window).resize(function () {
    let maskHeight = $(document).height();
    let maskWidth = $window.width();
    $("#mask").css({ width: maskWidth, height: maskHeight });
    let id = $(".gallery-picture").attr("href");
    let winW = $window.width();
    $(id).css("left", winW / 2 - $(id).width() / 2);
  });
  $(".gallery-picture").click(function (e) {
    //Cancel the link behavior
    e.preventDefault();
    //Get the A tag
    var id = $(this).attr("href");
    //Get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $window.width() + 20;

    //Set height and width to mask to fill up the whole screen
    $("#mask").css({ width: maskWidth, height: maskHeight });

    //transition effect
    $("#mask").fadeIn(200);
    $("#mask").fadeTo("slow", 0.8);

    //Get the window height and width
    var winH = $window.height();
    var winW = $window.width();

    //Set the popup window to center
    $(id).css("top", winH / 2 - $(id).height() / 2);
    $(id).css("left", winW / 2 - $(id).width() / 2);

    //transition effect
    $(id).fadeIn(500);
    const title = $(this).find("h1").text();
    const description = $(this).find("p").text();
    const img = $(this).find("img");
    $(".modal-img").attr("src", img[0].src);
    $("#modal-title").text(title);
    $("#modal-desc").text(description);
    $("body").css("overflow", "hidden");
  });

  //if close button is clicked
  $(".window .close").click(function (e) {
    console.log("close button");
    //Cancel the link behavior
    e.preventDefault();
    $("#mask, .window").hide();
  });

  //if mask is clicked
  $("#mask").click(function () {
    $(this).hide();
    $(".window").hide();
    $("body").css("overflow", "visible");
  });
});
