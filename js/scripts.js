/*placeholder*/
$(document).ready(function () {
	$.Placeholder.init({
		color: "#ffffff"
	});
	
	$(document).ready(function(){
	dynamicFaq();
		
		$(function() {

  $('input, select').styler();

});
});

function dynamicFaq(){
	$('dd').hide();
	$('dt').bind('click', function(){
		var dt = $('dt');
		var dtOpened = $($('dt.open')[0]);
		if(dt.index(dtOpened) != dt.index($(this))) {
			dtOpened.toggleClass('open').next().slideToggle();
		}
		$(this).toggleClass('open').next().slideToggle();
	});
}
	
	$(document).ready(function(){
   $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 700);
      e.preventDefault();
   });
   return false;
});
	

	
	
	 var img1=new Image();
    img1.src='http://test.buyhtml.ru/images/SVG/arrow.svg';
    var img2=new Image();
    img2.src='http://test.buyhtml.ru/images/SVG/arrow-bottom.svg';
    var img3=new Image();
    img3.src='http://test.buyhtml.ru/images/SVG/arrow-carusel.svg';
		  var img4=new Image();
    img4.src='http://test.buyhtml.ru/images/SVG/cars.svg';
		  var img5=new Image();
    img5.src='http://test.buyhtml.ru/images/SVG/cars-white.svg';
		  var img6=new Image();
    img6.src='http://test.buyhtml.ru/images/SVG/close.svg';
		  var img7=new Image();
    img7.src='http://test.buyhtml.ru/images/SVG/facebook-logo.svg';
		  var img8=new Image();
    img8.src='http://test.buyhtml.ru/images/SVG/family-room.svg';
		  var img9=new Image();
    img9.src='http://test.buyhtml.ru/images/SVG/family-room-white.svg';
		  var img10=new Image();
    img10.src='http://test.buyhtml.ru/images/SVG/google-plus-symbol.svg';
		  var img11=new Image();
    img11.src='http://test.buyhtml.ru/images/SVG/heartbeat.svg';
		  var img12=new Image();
    img12.src='http://test.buyhtml.ru/images/SVG/heartbeat-white.svg';
		  var img13=new Image();
    img13.src='http://test.buyhtml.ru/images/SVG/login.svg';
		  var img14=new Image();
    img14.src='http://test.buyhtml.ru/images/SVG/login-white.svg';
		  var img15=new Image();
    img15.src='http://test.buyhtml.ru/images/SVG/mail.svg';
			  var img16=new Image();
    img16.src='http://test.buyhtml.ru/images/SVG/menu.svg';
		  var img17=new Image();
    img17.src='http://test.buyhtml.ru/images/SVG/odnoklassniki-ok.svg';
		  var img18=new Image();
    img18.src='http://test.buyhtml.ru/images/SVG/vk.svg';
//		var img19=new Image();
//    img19.src='http://test.buyhtml.ru/images/SVG/arrow.svg';
//		  var img20=new Image();
//    img20.src='http://test.buyhtml.ru/images/SVG/arrow.svg';
//		  var img21=new Image();
//    img21.src='http://test.buyhtml.ru/images/SVG/arrow.svg';
//			var img22=new Image();
//    img22.src='http://test.buyhtml.ru/images/SVG/arrow.svg';
//		  var img23=new Image();
//    img23.src='http://test.buyhtml.ru/images/SVG/arrow.svg';
//		  var img24=new Image();
//    img24.src='http://test.buyhtml.ru/images/SVG/arrow.svg';

	
    
});



var mySwiper = new Swiper('.swiper-container-3', {
	speed: 500,
	slidesPerView: 5,
	spaceBetween: 10,
	centeredSlides: true,
	initialSlide: 1,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',

	// Responsive breakpoints
	breakpoints: {
		
	
		415: {
		speed: 500,
			slidesPerView: 2,
			spaceBetween: 0,
			centeredSlides: false,
			initialSlide: 0,
			freeMode: true,
	autoplay: 2000,
		},
		
		767: {
		speed: 500,
			slidesPerView: 2,
			spaceBetween: 0,
			centeredSlides: false,
			initialSlide: 0,
				freeMode: true,
	autoplay: 2000,
		},
	
		991: {
			speed: 500,
			slidesPerView: 4,
			spaceBetween: 0,
			centeredSlides: false,
			initialSlide: 0,
		},
		
		1200: {
			speed: 500,
			slidesPerView: 5,
			spaceBetween: 0,
			centeredSlides: false,
			initialSlide: 0,
		},
		1920: {
			speed: 500,
			slidesPerView: 5,
			spaceBetween: 0,
			centeredSlides:false,
			initialSlide: 0,
			
    

		}
	}
});






$(document).ready(function(){
	$("#header .close.cross").click(function(){
		$(".navbar-collapse.collapse.in").addClass("close-menu").removeClass("in"); return false;
	});
//	setTimeout(function(){
//			$(".navbar-collapse.collapse.in").removeClass("close-menu");
//	}, 2000); 
	
	$("#header .navbar-toggle").click(function(){
		$(".navbar-collapse.collapse").removeClass("close-menu");
	});
});



	$(document).ready(function(){
        var $menu = $(".top-header");
   $(window).scroll(function(){
            if ( $(this).scrollTop() > 223 && $menu.hasClass("default") ){
        $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <=223 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll

 
    });




