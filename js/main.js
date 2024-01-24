
/*leftmenu*/

$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'250px'},50)
   $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},50)
   $("#home-content").animate({marginLeft :'0px'},50)
})



/*scrollmenu*/
$("#leftMenu a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var position_Section = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:position_Section},2000);
    
})

/*Accordion*/


$('#sliderDown .toggle').click(function(){
  $('.inner').not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});



/*counter*/

  $(function(){
    var endDate = new Date("2024-10-31T23:59:59").getTime();
  
    var countdown = setInterval(function() {
      var dateTimeNow = new Date().getTime();
      var remainingTime = endDate - dateTimeNow;
  
      var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ minutes } m`);
    $('.seconds').html(`${ seconds} s`)
  
      
   }, 1000);
 });

 
  /*textarea*/
  $('textarea').keyup(function () {
     var max = 100;
     var len = $(this).val().length;
     if (len >= max) {
       $('#chars').text(' you have reached the limit');
     } else {
      var char = max - len;
       $('#chars').text(char + ' characters left');
      }
   });
  