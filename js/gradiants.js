
function init_gradiants(){

	$('body').append("<div class='content-gradients'></div>");
	$('.content-gradients').css('position','relative');
	$('.content-gradients').css('width','100%');
	$('.content-gradients').css('height','100vh');
	$('.content-gradients').css('overflow','hidden');

	$('.content-gradients').append("<div class='gradient01'></div>");
	$('.gradient01').css('position','absolute');
	$('.gradient01').css('z-index','1');
	$('.gradient01').css('width','60%');
    $('.gradient01').css('height','100%');
    $('.gradient01').css('left','5%');
    $('.gradient01').css('top','0');
	$('.gradient01').css('background-image','radial-gradient(rgba(54,22,82,0.6) 25%, rgba(54,22,82,0) 75%)');

	$('.content-gradients').append("<div class='gradient02'></div>");
	$('.gradient02').css('position','absolute');
	$('.gradient02').css('z-index','2');
	$('.gradient02').css('width','60%');
    $('.gradient02').css('height','100%');
    $('.gradient02').css('left','0%');
    $('.gradient02').css('top','0');
	$('.gradient02').css('background-image','radial-gradient(rgba(43,36,102,0.4) 25%, rgba(43,36,102,0) 75%)');

	$('.content-gradients').append("<div class='gradient03'></div>");
	$('.gradient03').css('position','absolute');
	$('.gradient03').css('z-index','3');
	$('.gradient03').css('width','60%');
    $('.gradient03').css('height','100%');
    $('.gradient03').css('right','5%');
    $('.gradient03').css('top','0');
	$('.gradient03').css('background-image','radial-gradient(rgba(27,26,87,0.6) 25%, rgba(27,26,87,0) 75%)');

	$('.content-gradients').append("<div class='gradient04'></div>");
	$('.gradient04').css('position','absolute');
	$('.gradient04').css('z-index','4');
	$('.gradient04').css('width','50%');
    $('.gradient04').css('height','100%');
    $('.gradient04').css('left','5%');
    $('.gradient04').css('top','0');
	$('.gradient04').css('background-image','radial-gradient(rgba(47,38,56,0.6) 25%, rgba(47,38,56,0) 75%)');

	$('.content-gradients').append("<div class='gradient05'></div>");
	$('.gradient05').css('position','absolute');
	$('.gradient05').css('z-index','5');
	$('.gradient05').css('width','50%');
    $('.gradient05').css('height','100%');
    $('.gradient05').css('right','5%');
    $('.gradient05').css('top','0');
	$('.gradient05').css('background-image','radial-gradient(rgba(47,38,56,0.8) 25%, rgba(47,38,56,0) 75%)');

	$('.content-gradients').append("<div class='gradient06'></div>");
	$('.gradient06').css('position','absolute');
	$('.gradient06').css('z-index','6');
	$('.gradient06').css('width','100%');
    $('.gradient06').css('height','100%');
    $('.gradient06').css('left','0');
    $('.gradient06').css('top','0');
	$('.gradient06').css('background-image','radial-gradient(rgba(48,6,79,0.4) 25%, rgba(48,6,79,0) 75%)');

	$('.content-gradients').append("<div class='gradient07'></div>");
	$('.gradient07').css('position','absolute');
	$('.gradient07').css('z-index','7');
	$('.gradient07').css('width','70%');
    $('.gradient07').css('height','100%');
    $('.gradient07').css('left','0');
    $('.gradient07').css('top','50%');
	$('.gradient07').css('background-image','radial-gradient(rgba(13,55,106,0.8) 25%, rgba(13,55,106,0) 75%)');

	$('.content-gradients').append("<div class='gradient08'></div>");
	$('.gradient08').css('position','absolute');
	$('.gradient08').css('z-index','8');
	$('.gradient08').css('width','40%');
    $('.gradient08').css('height','100%');
    $('.gradient08').css('right','0%');
    $('.gradient08').css('top','0');
	$('.gradient08').css('background-image','radial-gradient(rgba(13,55,106,0.6) 25%, rgba(13,55,106,0) 75%)');

	$('.content-gradients').append("<div class='masque-noir'></div>");
	$('.masque-noir').css('position','absolute');
	$('.masque-noir').css('z-index','9');
	$('.masque-noir').css('width','100%');
    $('.masque-noir').css('height','100%');
    $('.masque-noir').css('left','0');
    $('.masque-noir').css('top','0');
	$('.masque-noir').css('background-color','rgba(0,0,0,0.3)');

	$('.content-gradients').append("<div class='masque-noir-anime'></div>");
	$('.masque-noir-anime').css('position','absolute');
	$('.masque-noir-anime').css('z-index','9');
	$('.masque-noir-anime').css('width','100%');
    $('.masque-noir-anime').css('height','100%');
    $('.masque-noir-anime').css('left','0');
    $('.masque-noir-anime').css('top','0');
	$('.masque-noir-anime').css('background-color','#10052d');

	 $(window).mousemove(function(e){
         bouge_objet($('.gradient01'),25,e);
         bouge_objet($('.gradient02'),32,e);
         bouge_objet($('.gradient03'),15,e);
         bouge_objet($('.gradient04'),25,e);
         bouge_objet($('.gradient05'),10,e);
         bouge_objet($('.gradient06'),5,e);
         bouge_objet($('.gradient07'),15,e);
         bouge_objet($('.gradient08'),10,e);
         
      }); 

 	setTimeout(apparitionfond, 1000);

}

function apparitionfond(){
	$('.masque-noir-anime').animate({opacity:0 },600, function() { });
}

function bouge_objet(objet,tempo,event){
	valueX=(event.pageX * -1 / tempo);
	  objet.css({
              'transform':'translate3d('+valueX+'px,0,0) '
          });
}