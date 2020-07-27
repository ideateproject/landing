$(document).ready( function()
{
    var timing = 1000;
    counter = true;


    function showFirstSlide(delay) {
      $('#first_slide').fadeIn(timing);
      $('#second_slide').delay(delay).fadeOut(timing);
    }

    function showSecondSlide(delay){
      $('#first_slide').delay(timing).fadeOut(timing);
      $('#second_slide').delay(delay).fadeIn(timing);
    }
    // while(true){
      if(counter == true){
        showFirstSlide(timing);
        counter = false;
      }
      else{
        showSecondSlide(3 * timing);
        counter = true;
      }
    // }


});
