$(function(){

	
  //共通
  $(function(){
    $('a[href^="#"]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top -82;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });
  $(window).on("scroll", function(){
  	if($(this).scrollTop() > 500){
  		$('.header,.menu-trigger').addClass('up');
  	}else{
  		$('.header').removeClass('up');
  	}
  });
  $(document).ready(function() {
    var pagetop = $('.pagetop');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 2000) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
  });
  $('.menu-trigger').on('click',function(){
    $(this).toggleClass('active');
    $('.g-nav').stop().slideToggle();
  });


  

  $(window).on('load', function(){
    var winW = $(window).width();
    if(winW <= 779){//SP

      $('.solution-tab').slick({
        asNavFor: '.spec-area',
      });
      $('.spec-area').slick({
        arrows: false,
        swipe:false,
        dots:true
      });

      


    }else{//PC

      $('.solution-tab li').on('click',function(){
        var index = $(this).index();
        $('.solution-tab li').removeClass('active').eq(index).addClass('active');
        $('.spec').hide();
        $('.spec').eq(index).fadeIn();
      });


    }
  });






  
  


 
});
