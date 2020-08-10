if (window.screen.width < 900)
{
  // resolution is below 10 x 7
  window.location = "http://www.ideateproject.org/mobile.html "; //for example
}

// When the user scrolls the page, execute myFunction
window.onscroll = function()
{
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("grad1");

// Get the offset position of the navbar
var sticky = 30; //grad1.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction()
{
  if (window.pageYOffset >= sticky)
  {
    grad1.classList.add("sticky");
    grad1.style.height = "50px";
    document.getElementById("logo").style.display = "none";
    document.getElementById("navigation").style.marginTop = "10px";

    document.getElementById("jumbotron").style.marginTop = "110px";
  }
  else
  {
    grad1.classList.remove("sticky");
    grad1.style.height = "100px";
    document.getElementById("logo").style.display = "block";
    document.getElementById("navigation").style.marginTop = "30px";
    document.getElementById("grad1").style.marginTop = "0px";
    document.getElementById("jumbotron").style.marginTop = "0px";

  }
}

$(document).ready(function()
{
  // $("#corporation").click(function()
  // {
  //   $('#first').fadeIn("slow");
  //
  //   $('#first').css('display', 'block');
  //   $('#second').css('display', 'none');
  //   $('#third').css('display', 'none');
  //
  //   $('#corporation').css('background-color', '#c8c8c8');
  //   $('#startup').css('background-color', '#dddddd');
  //   $('#venture').css('background-color', '#dddddd');
  //
  // });
  // $("#startup").click(function()
  // {
  //   $('#second').fadeIn("slow");
  //
  //   $('#first').css('display', 'none');
  //   $('#second').css('display', 'block');
  //   $('#third').css('display', 'none');
  //
  //   $('#corporation').css('background-color', '#dddddd');
  //   $('#startup').css('background-color', '#c8c8c8');
  //   $('#venture').css('background-color', '#dddddd');
  // });
  $("#venture").click(function()
  {
    $('#third').fadeIn("slow");

    $('#first').css('display', 'none');
    $('#second').css('display', 'none');
    $('#third').css('display', 'block');

    $('#corporation').css('background-color', '#dddddd');
    $('#startup').css('background-color', '#dddddd');
    $('#venture').css('background-color', '#c8c8c8');
  });
});
