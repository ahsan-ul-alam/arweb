$( document ).ready(()=>{
    

    $(function () {
        $("#tabs").tabs();
    });
    
    
    $('.counter').counterUp({
        delay: 10,
        time: 2000
      });
      $('.counter').addClass('animated fadeInDownBig');
      $('h3').addClass('animated fadeIn');


      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });









});