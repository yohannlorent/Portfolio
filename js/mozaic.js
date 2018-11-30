
function init_mozaic(){


    chargementImages();
}

function chargementImages(){

	creationMozaic();
	
}

function creationMozaic(){

	$('body').append("<div class='mozaic'></div>");
	$('.mozaic').css('position','absolute');
    $('.mozaic').css('right','60px');
    $('.mozaic').css('top','50%');
    $('.mozaic').css('z-index','10');
    $('.mozaic').css('width','815px');
    $('.mozaic').css('height','500px');
    $('.mozaic').css('-webkit-transform','translateY(-50%)');
	$('.mozaic').css('-ms-transform','translateY(-50%)');
	$('.mozaic').css('transform','translateY(-50%)');

    $('.mozaic').append("<div class='mozaic-conteneur-relatif'></div>");
    $('.mozaic-conteneur-relatif').css('position','relative');
    $('.mozaic-conteneur-relatif').css('width','100%');
    $('.mozaic-conteneur-relatif').css('height','100%');

    $('.mozaic-conteneur-relatif').append("<div class='kikkoman'></div>");
    $('.kikkoman').css('position','absolute');
    $('.kikkoman').css('left','50%');
    $('.kikkoman').css('top','50%');
    $('.kikkoman').css('z-index','10');
    $('.kikkoman').css('width','186px');
    $('.kikkoman').css('height','215px');
    $('.kikkoman').css('margin-top','-215px');
    $('.kikkoman').css('margin-left','-186px');

    $('.mozaic-conteneur-relatif').append("<div class='kinepolis'></div>");
    $('.kinepolis').css('position','absolute');
    $('.kinepolis').css('left','50%');
    $('.kinepolis').css('top','50%');
    $('.kinepolis').css('z-index','11');
    $('.kinepolis').css('width','164px');
    $('.kinepolis').css('height','164px');
    $('.kinepolis').css('margin-top','-164px');
    $('.kinepolis').css('margin-left','-360px');

    $('.mozaic-conteneur-relatif').append("<div class='bonduelle'></div>");
    $('.bonduelle').css('position','absolute');
    $('.bonduelle').css('left','50%');
    $('.bonduelle').css('top','50%');
    $('.bonduelle').css('z-index','12');
    $('.bonduelle').css('width','295px');
    $('.bonduelle').css('height','181px');
    $('.bonduelle').css('margin-top','-181px');
    $('.bonduelle').css('margin-left','10px');

    $('.mozaic-conteneur-relatif').append("<div class='st-sever'></div>");
    $('.st-sever').css('position','absolute');
    $('.st-sever').css('left','50%');
    $('.st-sever').css('top','50%');
    $('.st-sever').css('z-index','13');
    $('.st-sever').css('width','350px');
    $('.st-sever').css('height','215px');
    $('.st-sever').css('margin-top','10px');
    $('.st-sever').css('margin-left','-240px');

    $('.mozaic-conteneur-relatif').append("<div class='weldom'></div>");
    $('.weldom').css('position','absolute');
    $('.weldom').css('left','50%');
    $('.weldom').css('top','50%');
    $('.weldom').css('z-index','14');
    $('.weldom').css('width','241px');
    $('.weldom').css('height','181px');
    $('.weldom').css('margin-top','10px');
    $('.weldom').css('margin-left','122px');

    setTimeout(animeKikkoman, 50);
    setTimeout(animeBonduelle, 150);
	setTimeout(animeStSever, 300);
	setTimeout(animeWeldom, 450);
	setTimeout(animeKinepolis, 600);


	 
    
    


}

function animeKikkoman(){
	$('.kikkoman').append("<div class='kikkoman-conteneur-relatif'></div>");
    $('.kikkoman-conteneur-relatif').css('position','relative');
    $('.kikkoman-conteneur-relatif').css('width','100%');
    $('.kikkoman-conteneur-relatif').css('height','100%');


    $('.kikkoman-conteneur-relatif').append("<div class='kikkoman-bg01'></div>");
    $('.kikkoman-bg01').css('position','absolute');
    $('.kikkoman-bg01').css('right','0');
    $('.kikkoman-bg01').css('bottom','0');
    $('.kikkoman-bg01').css('z-index','1');
    $('.kikkoman-bg01').css('width','0');
    $('.kikkoman-bg01').css('height','0');
    $('.kikkoman-bg01').css('background-color','#f35c1a');

    $('.kikkoman-conteneur-relatif').append("<div class='kikkoman-bg02'></div>");
    $('.kikkoman-bg02').css('position','absolute');
    $('.kikkoman-bg02').css('right','0');
    $('.kikkoman-bg02').css('bottom','0');
    $('.kikkoman-bg02').css('z-index','2');
    $('.kikkoman-bg02').css('width','0');
    $('.kikkoman-bg02').css('height','0');
    $('.kikkoman-bg02').css('background-image','linear-gradient(0deg, #cd2412 20%, #f35c1a 70%)');
   

    setTimeout(animebg01Kikkoman, 0);
    setTimeout(animebg02Kikkoman, 150);
    

}

function animebg01Kikkoman(){
	$('.kikkoman-bg01').animate({width:'100%',height:'100%' },300, function() { });
}
function animebg02Kikkoman(){
	$('.kikkoman-bg02').animate({width:'100%',height:'100%' },300, function() { 

        $('.kikkoman-bg02').append("<div class='kokki-conteneur-bg'></div>");
        $('.kokki-conteneur-bg').css('position','relative');
        $('.kokki-conteneur-bg').css('width','100%');
        $('.kokki-conteneur-bg').css('height','100%');

        $('.kokki-conteneur-bg').append("<img src='img/bg-kikko.jpg' class='kiko-bg-vide'>");
        $('.kiko-bg-vide').css('position','absolute');
        $('.kiko-bg-vide').css('z-index','1');
        $('.kiko-bg-vide').css('width','100%');
        $('.kiko-bg-vide').css('height','100%');
        $('.kiko-bg-vide').css('left','0');
        $('.kiko-bg-vide').css('top','0');
        $('.kiko-bg-vide').css('opacity','0');


        $('.kokki-conteneur-bg').append("<img src='img/kikkoman-logo-vector.svg' class='kiko-logo'>");
        $('.kiko-logo').css('position','absolute');
        $('.kiko-logo').css('z-index','15');
        $('.kiko-logo').css('width','80%');
        $('.kiko-logo').css('height','auto');
        $('.kiko-logo').css('left','50%');
        $('.kiko-logo').css('top','50%');
        $('.kiko-logo').css('-webkit-transform','translate(-50%,-50%)');
        $('.kiko-logo').css('-ms-transform','translate(-50%,-50%)');
        $('.kiko-logo').css('transform','translate(-50%,-50%)');
        $('.kiko-logo').css('opacity','0');

        $('.kokki-conteneur-bg').append("<img src='img/bouteille.png' class='kiko-bouteille'>");
        $('.kiko-bouteille').css('position','absolute');
        $('.kiko-bouteille').css('z-index','20');
        $('.kiko-bouteille').css('left','0');
        $('.kiko-bouteille').css('bottom','0');
        $('.kiko-bouteille').css('opacity','0');

        $('.kokki-conteneur-bg').append("<img src='img/bol01.png' class='kiko-bol01'>");
        $('.kiko-bol01').css('position','absolute');
        $('.kiko-bol01').css('z-index','18');
        $('.kiko-bol01').css('left','0');
        $('.kiko-bol01').css('bottom','20px');
        $('.kiko-bol01').css('margin-left','70px');
        $('.kiko-bol01').css('opacity','0');

        $('.kokki-conteneur-bg').append("<img src='img/bol02.png' class='kiko-bol02'>");
        $('.kiko-bol02').css('position','absolute');
        $('.kiko-bol02').css('z-index','17');
        $('.kiko-bol02').css('left','50%');
        $('.kiko-bol02').css('bottom','30px');
        $('.kiko-bol02').css('margin-left','-15px');
        $('.kiko-bol02').css('opacity','0');

        $('.kokki-conteneur-bg').append("<img src='img/petale01.png' class='kiko-fleur01'>");
        $('.kiko-fleur01').css('position','absolute');
        $('.kiko-fleur01').css('z-index','22');
        $('.kiko-fleur01').css('left','0');
        $('.kiko-fleur01').css('bottom','60px');
        $('.kiko-fleur01').css('margin-left','45px');
        $('.kiko-fleur01').css('opacity','0');

        $('.kokki-conteneur-bg').append("<img src='img/petale02.png' class='kiko-fleur02'>");
        $('.kiko-fleur02').css('position','absolute');
        $('.kiko-fleur02').css('z-index','23');
        $('.kiko-fleur02').css('right','40px');
        $('.kiko-fleur02').css('bottom','40px');
        $('.kiko-fleur02').css('opacity','0');

        $('.kokki-conteneur-bg').append("<img src='img/petale03.png' class='kiko-fleur03'>");
        $('.kiko-fleur03').css('position','absolute');
        $('.kiko-fleur03').css('z-index','16');
        $('.kiko-fleur03').css('right','35px');
        $('.kiko-fleur03').css('top','110px');
        $('.kiko-fleur03').css('opacity','0');

        $('.kokki-conteneur-bg').append("<img src='img/petale04.png' class='kiko-fleur04'>");
        $('.kiko-fleur04').css('position','absolute');
        $('.kiko-fleur04').css('z-index','15');
        $('.kiko-fleur04').css('right','30px');
        $('.kiko-fleur04').css('top','40px');
        $('.kiko-fleur04').css('opacity','0');

        $('.kokki-conteneur-bg').append("<img src='img/petale05.png' class='kiko-fleur05'>");
        $('.kiko-fleur05').css('position','absolute');
        $('.kiko-fleur05').css('z-index','14');
        $('.kiko-fleur05').css('right','35px');
        $('.kiko-fleur05').css('top','10px');
        $('.kiko-fleur05').css('opacity','0');

        $('.kokki-conteneur-bg').append("<img src='img/petale06.png' class='kiko-fleur06'>");
        $('.kiko-fleur06').css('position','absolute');
        $('.kiko-fleur06').css('z-index','30');
        $('.kiko-fleur06').css('left','55px');
        $('.kiko-fleur06').css('top','-20px');
        $('.kiko-fleur06').css('opacity','0');

        $('.kokki-conteneur-bg').append("<img src='img/petale07.png' class='kiko-fleur07'>");
        $('.kiko-fleur07').css('position','absolute');
        $('.kiko-fleur07').css('z-index','31');
        $('.kiko-fleur07').css('left','25px');
        $('.kiko-fleur07').css('top','30px');
        $('.kiko-fleur07').css('opacity','0');

        $('.kokki-conteneur-bg').append("<img src='img/petale08.png' class='kiko-fleur08'>");
        $('.kiko-fleur08').css('position','absolute');
        $('.kiko-fleur08').css('z-index','32');
        $('.kiko-fleur08').css('left','70px');
        $('.kiko-fleur08').css('top','65px');
        $('.kiko-fleur08').css('opacity','0');

        $('.kokki-conteneur-bg').append("<div class='kiko-espace-click'></div>");
        $('.kiko-espace-click').css('position','absolute');
        $('.kiko-espace-click').css('z-index','80');
        $('.kiko-espace-click').css('width','100%');
        $('.kiko-espace-click').css('height','100%');
        $('.kiko-espace-click').css('left','0');
        $('.kiko-espace-click').css('top','0');
        $('.kiko-espace-click').css('opacity','0');


        
        $('.kiko-logo').animate({opacity:1 },200, function() { });

          //Action au survol
        $('.kiko-espace-click').mouseover(function() {  
            $(this).css('cursor', 'pointer');
            $('.kikkoman').css('z-index','25');
             $('.kiko-bg-vide').animate({opacity:1 },200, function() { });
            $('.kiko-logo').animate({opacity:0 },200, function() { });
            
            timerbouteille = setTimeout(animeBouteille, 50);
            timerbol01 =  setTimeout(animebol01, 300);
            timerbol02 = setTimeout(animebol02, 150);
            timerfleur01 = setTimeout(animefleur1, 200);
            timerfleur02 = setTimeout(animefleur2, 250);
            timerfleur03 = setTimeout(animefleur3, 300);
            timerfleur04 = setTimeout(animefleur4, 350);
            timerfleur05 = setTimeout(animefleur5, 400);
            timerfleur06 = setTimeout(animefleur6, 450);
            timerfleur07 = setTimeout(animefleur7, 500);
            timerfleur08 = setTimeout(animefleur8, 550);
         
         });

        $('.kiko-espace-click').mouseout(function() { 

            clearTimeout(timerbouteille); 
            clearTimeout(timerbol01); 
            clearTimeout(timerbol02); 
            clearTimeout(timerfleur01); 
            clearTimeout(timerfleur02); 
            clearTimeout(timerfleur03); 
            clearTimeout(timerfleur04); 
            clearTimeout(timerfleur05); 
            clearTimeout(timerfleur06); 
            clearTimeout(timerfleur07); 
            clearTimeout(timerfleur08);  
           $('.kikkoman').css('z-index','10');
           
            
           $('.kiko-bol01').animate({opacity:0 },400, function() { $('.kiko-bol01').css('margin-left','70px');});
           $('.kiko-bol02').animate({opacity:0 },400, function() { $('.kiko-bol02').css('margin-left','-15px'); $('.kiko-bouteille').animate({opacity:0 },400, function() { $('.kiko-logo').animate({opacity:1 },200, function() { });$('.kiko-bg-vide').animate({opacity:0},200, function() { }); });});
           $('.kiko-fleur01').animate({opacity:0 },400, function() { $('.kiko-fleur01').css('bottom','60px'); $('.kiko-fleur01').css('margin-left','45px'); });
           $('.kiko-fleur02').animate({opacity:0 },400, function() { $('.kiko-fleur02').css('right','40px'); $('.kiko-fleur02').css('bottom','40px'); });
           $('.kiko-fleur03').animate({opacity:0 },400, function() { $('.kiko-fleur03').css('right','35px');$('.kiko-fleur03').css('top','110px'); });
           $('.kiko-fleur04').animate({opacity:0 },400, function() { $('.kiko-fleur04').css('right','30px'); $('.kiko-fleur04').css('top','40px');});
           $('.kiko-fleur05').animate({opacity:0 },400, function() { $('.kiko-fleur05').css('right','35px'); $('.kiko-fleur05').css('top','10px');});
           $('.kiko-fleur06').animate({opacity:0 },400, function() { $('.kiko-fleur06').css('left','55px');  $('.kiko-fleur06').css('top','-20px');});
           $('.kiko-fleur07').animate({opacity:0 },400, function() { $('.kiko-fleur07').css('left','25px'); $('.kiko-fleur07').css('top','30px');});
           $('.kiko-fleur08').animate({opacity:0 },400, function() {  $('.kiko-fleur08').css('left','70px'); $('.kiko-fleur08').css('top','65px');});     
         });


    });
}

function animeBouteille(){
   $('.kiko-bouteille').animate({opacity:1 },400, function() {  });
  }
  function animebol01(){
     $('.kiko-bol01').animate({opacity:1,marginLeft:'15px' },400, function() { });
  }
  function animebol02(){
    $('.kiko-bol02').animate({opacity:1,marginLeft:'25px' },400, function() { });
  }
  function animefleur1(){
     $('.kiko-fleur01').animate({opacity:1,marginLeft:'25px',bottom:'80px' },400, function() { });
  }

  function animefleur2(){
      $('.kiko-fleur02').animate({opacity:1,right:'10px',bottom:'20px' },400, function() { });
  }

  
  function animefleur3(){
      $('.kiko-fleur03').animate({opacity:1,right:'15px',top:'80px' },400, function() { });
  }

  function animefleur4(){
      $('.kiko-fleur04').animate({opacity:1,right:'25px',top:'30px' },300, function() { });
  }

  function animefleur5(){
     $('.kiko-fleur05').animate({opacity:1,right:'15px',top:'-15px' },400, function() { });
  }
 
  function animefleur6(){
     $('.kiko-fleur06').animate({opacity:1,left:'35px',top:'-40px' },250, function() { });
  }

  function animefleur7(){
     $('.kiko-fleur07').animate({opacity:1,left:'15px',top:'20px' },400, function() { });
  }
  
  function animefleur8(){
      $('.kiko-fleur08').animate({opacity:1,left:'50px',top:'35px' },300, function() { });
  }


function animeBonduelle(){
	$('.bonduelle').append("<div class='bonduelle-conteneur-relatif'></div>");
    $('.bonduelle-conteneur-relatif').css('position','relative');
    $('.bonduelle-conteneur-relatif').css('width','100%');
    $('.bonduelle-conteneur-relatif').css('height','100%');


    $('.bonduelle-conteneur-relatif').append("<div class='bonduelle-bg01'></div>");
    $('.bonduelle-bg01').css('position','absolute');
    $('.bonduelle-bg01').css('left','0');
    $('.bonduelle-bg01').css('bottom','0');
    $('.bonduelle-bg01').css('z-index','1');
    $('.bonduelle-bg01').css('width','0');
    $('.bonduelle-bg01').css('height','0');
    $('.bonduelle-bg01').css('background-color','#f7f6b4');

    $('.bonduelle-conteneur-relatif').append("<div class='bonduelle-bg02'></div>");
    $('.bonduelle-bg02').css('position','absolute');
    $('.bonduelle-bg02').css('left','0');
    $('.bonduelle-bg02').css('bottom','0');
    $('.bonduelle-bg02').css('z-index','2');
    $('.bonduelle-bg02').css('width','0');
    $('.bonduelle-bg02').css('height','0');
    $('.bonduelle-bg02').css('background-image','linear-gradient(30deg, #bde10f 20%, #fbf906 70%)');

    setTimeout(animebg01bonduelle, 0);
    setTimeout(animebg02bonduelle, 150);

   
    

}

function animebg01bonduelle(){
	$('.bonduelle-bg01').animate({width:'100%',height:'100%' },300, function() { });
}
function animebg02bonduelle(){
	$('.bonduelle-bg02').animate({width:'100%',height:'100%' },300, function() { 

        $('.bonduelle-bg02').append("<div class='bonduelle-conteneur-bg'></div>");
        $('.bonduelle-conteneur-bg').css('position','relative');
        $('.bonduelle-conteneur-bg').css('width','100%');
        $('.bonduelle-conteneur-bg').css('height','100%');

        $('.bonduelle-conteneur-bg').append("<img src='img/bg-bonduelle.png' class='bonduelle-bg-vide'>");
        $('.bonduelle-bg-vide').css('position','absolute');
        $('.bonduelle-bg-vide').css('z-index','1');
        $('.bonduelle-bg-vide').css('left','0');
        $('.bonduelle-bg-vide').css('bottom','0');
        $('.bonduelle-bg-vide').css('opacity','0');


        $('.bonduelle-conteneur-bg').append("<img src='img/Bonduelle_Logo_Vector_2017_col.svg' class='bonduelle-logo'>");
        $('.bonduelle-logo').css('position','absolute');
        $('.bonduelle-logo').css('z-index','15');
        $('.bonduelle-logo').css('width','134px');
        $('.bonduelle-logo').css('height','auto');
        $('.bonduelle-logo').css('left','50%');
        $('.bonduelle-logo').css('top','50%');
        $('.bonduelle-logo').css('-webkit-transform','translate(-50%,-50%)');
        $('.bonduelle-logo').css('-ms-transform','translate(-50%,-50%)');
        $('.bonduelle-logo').css('transform','translate(-50%,-50%)');
        $('.bonduelle-logo').css('opacity','0');

       

         $('.bonduelle-conteneur-bg').append("<div class='bonduelle-conteneur-bg2'></div>");
        $('.bonduelle-conteneur-bg2').css('position','absolute');
        $('.bonduelle-conteneur-bg2').css('width','100%');
        $('.bonduelle-conteneur-bg2').css('height','100%');
        $('.bonduelle-conteneur-bg2').css('left','0');
        $('.bonduelle-conteneur-bg2').css('top','0%');
        $('.bonduelle-conteneur-bg2').css('z-index','40');
            

         $('.bonduelle-conteneur-bg2').append("<div class='bonduelle-conteneur-bg3'></div>");
        $('.bonduelle-conteneur-bg3').css('position','relative');
        $('.bonduelle-conteneur-bg3').css('width','100%');
        $('.bonduelle-conteneur-bg3').css('height','100%');
        $('.bonduelle-conteneur-bg3').css('overflow','hidden');
        



        $('.bonduelle-conteneur-bg3').append("<img src='img/torchon.png' class='bonduelle-torchon'>");
        $('.bonduelle-torchon').css('position','absolute');
        $('.bonduelle-torchon').css('z-index','20');
        $('.bonduelle-torchon').css('left','0');
        $('.bonduelle-torchon').css('top','-50px');
        $('.bonduelle-torchon').css('opacity','0');

        $('.bonduelle-conteneur-bg3').append("<img src='img/sac-bonduelle.png' class='bonduelle-sac'>");
        $('.bonduelle-sac').css('position','absolute');
        $('.bonduelle-sac').css('z-index','21');
        $('.bonduelle-sac').css('right','-80px');
        $('.bonduelle-sac').css('bottom','0');
        $('.bonduelle-sac').css('opacity','0');

        $('.bonduelle-conteneur-bg3').append("<img src='img/main-chef.png' class='bonduelle-main'>");
        $('.bonduelle-main').css('position','absolute');
        $('.bonduelle-main').css('z-index','21');
        $('.bonduelle-main').css('left','37px');
        $('.bonduelle-main').css('bottom','-180px');
        $('.bonduelle-main').css('opacity','0');

         $('.bonduelle-conteneur-bg').append("<div class='bonduelle-espace-click'></div>");
        $('.bonduelle-espace-click').css('position','absolute');
        $('.bonduelle-espace-click').css('z-index','80');
        $('.bonduelle-espace-click').css('width','100%');
        $('.bonduelle-espace-click').css('height','100%');
        $('.bonduelle-espace-click').css('left','0');
        $('.bonduelle-espace-click').css('top','0');
        $('.bonduelle-espace-click').css('background-color','#0f0');
        $('.bonduelle-espace-click').css('opacity','0');



        $('.bonduelle-logo').animate({opacity:1 },200, function() { });

         //Action au survol
        $('.bonduelle-espace-click').mouseover(function() {  
            $(this).css('cursor', 'pointer');
            $('.bonduelle').css('z-index','25');
            $('.bonduelle-logo').animate({opacity:0 },200, function() { });
            timertorchon = setTimeout(animetorchon, 50);
            timermain =  setTimeout(animemain, 100);
            timersac = setTimeout(animesac, 150);
            timerfondbonduelle = setTimeout(animefondbonduelle, 400);
            timersuppressionbonduelle = setTimeout(suppressionbonduelle, 850);

            
            
           
           
         });

        $('.bonduelle-espace-click').mouseout(function() {  
            clearTimeout(timertorchon); 
            clearTimeout(timermain); 
            clearTimeout(timersac); 
            clearTimeout(timerfondbonduelle); 
            clearTimeout(timersuppressionbonduelle); 
        
            $('.bonduelle-conteneur-bg').animate({opacity:0 },400, function() { 

                $('.bonduelle-main').css('left','37px');
                $('.bonduelle-main').css('bottom','-180px');
                $('.bonduelle-main').css('opacity','0');
                $('.bonduelle-sac').css('right','-80px');
                $('.bonduelle-sac').css('bottom','0');
                $('.bonduelle-sac').css('opacity','0');
                $('.bonduelle-torchon').css('left','0');
                $('.bonduelle-torchon').css('top','-50px');
                $('.bonduelle-torchon').css('opacity','0');
                $('.bonduelle-bg-vide').css('opacity','0');
                $('.bonduelle-conteneur-bg').css('opacity','1');
                $('.bonduelle').css('z-index','12'); 
                $('.bonduelle-logo').animate({opacity:1 },200, function() { });

            });
           
          //$('.bonduelle-bg-vide').animate({opacity:0 },400, function() { $('.bonduelle').css('z-index','12'); $('.bonduelle-logo').animate({opacity:1 },200, function() { }); }); 
            
         });


    });
}

function animetorchon(){
    $('.bonduelle-torchon').animate({opacity:1,top:0 },200, function() { });
  }
  function animemain(){
    $('.bonduelle-main').animate({opacity:1,bottom:0 },200, function() { });
  }
  function animesac(){
   $('.bonduelle-sac').animate({opacity:1,right:0 },200, function() {  });
  }
  function animefondbonduelle(){
  $('.bonduelle-bg-vide').animate({opacity:1 },400, function() {   });
  }
  function suppressionbonduelle(){
    $('.bonduelle-torchon').css('opacity','0');
    $('.bonduelle-main').css('opacity','0');
    $('.bonduelle-sac').css('opacity','0');
    $('.bonduelle-main').css('left','37px');
    $('.bonduelle-main').css('bottom','-180px');
    $('.bonduelle-sac').css('right','-80px');
    $('.bonduelle-sac').css('bottom','0');
    $('.bonduelle-torchon').css('left','0');
    $('.bonduelle-torchon').css('top','-50px');
  }

function animeStSever(){
	$('.st-sever').append("<div class='st-sever-conteneur-relatif'></div>");
    $('.st-sever-conteneur-relatif').css('position','relative');
    $('.st-sever-conteneur-relatif').css('width','100%');
    $('.st-sever-conteneur-relatif').css('height','100%');


    $('.st-sever-conteneur-relatif').append("<div class='st-sever-bg01'></div>");
    $('.st-sever-bg01').css('position','absolute');
    $('.st-sever-bg01').css('right','0');
    $('.st-sever-bg01').css('top','0');
    $('.st-sever-bg01').css('z-index','1');
    $('.st-sever-bg01').css('width','0');
    $('.st-sever-bg01').css('height','0');
    $('.st-sever-bg01').css('background-color','#fca18a');

    $('.st-sever-conteneur-relatif').append("<div class='st-sever-bg02'></div>");
    $('.st-sever-bg02').css('position','absolute');
    $('.st-sever-bg02').css('right','0');
    $('.st-sever-bg02').css('top','0');
    $('.st-sever-bg02').css('z-index','2');
    $('.st-sever-bg02').css('width','0');
    $('.st-sever-bg02').css('height','0');
    $('.st-sever-bg02').css('background-color','#000');
    $('.st-sever-bg02').css('background-image','linear-gradient(30deg, #de3e16 20%, #b21212 70%)');

    setTimeout(animebg01StSever, 0);
    setTimeout(animebg02StSever, 150);
    

}

function animebg01StSever(){
	$('.st-sever-bg01').animate({width:'100%',height:'100%' },300, function() { });
}
function animebg02StSever(){
	$('.st-sever-bg02').animate({width:'100%',height:'100%' },300, function() { 

        $('.st-sever-bg02').append("<div class='st-sever-conteneur-bg'></div>");
        $('.st-sever-conteneur-bg').css('position','relative');
        $('.st-sever-conteneur-bg').css('width','100%');
        $('.st-sever-conteneur-bg').css('height','100%');

        $('.st-sever-conteneur-bg').append("<img src='img/St-sever.svg' class='st-sever-logo'>");
        $('.st-sever-logo').css('position','absolute');
        $('.st-sever-logo').css('z-index','15');
        $('.st-sever-logo').css('width','132px');
        $('.st-sever-logo').css('height','auto');
        $('.st-sever-logo').css('left','50%');
        $('.st-sever-logo').css('top','50%');
        $('.st-sever-logo').css('-webkit-transform','translate(-50%,-50%)');
        $('.st-sever-logo').css('-ms-transform','translate(-50%,-50%)');
        $('.st-sever-logo').css('transform','translate(-50%,-50%)');
        $('.st-sever-logo').css('opacity','0');

        
        $('.st-sever-logo').animate({opacity:1 },200, function() { });

    });
}


function animeWeldom(){
	$('.weldom').append("<div class='weldom-conteneur-relatif'></div>");
    $('.weldom-conteneur-relatif').css('position','relative');
    $('.weldom-conteneur-relatif').css('width','100%');
    $('.weldom-conteneur-relatif').css('height','100%');


    $('.weldom-conteneur-relatif').append("<div class='weldom-bg01'></div>");
    $('.weldom-bg01').css('position','absolute');
    $('.weldom-bg01').css('top','0');
    $('.weldom-bg01').css('left','0');
    $('.weldom-bg01').css('z-index','1');
    $('.weldom-bg01').css('width','0');
    $('.weldom-bg01').css('height','0');
    $('.weldom-bg01').css('background-color','#f8e795');

    $('.weldom-conteneur-relatif').append("<div class='weldom-bg02'></div>");
    $('.weldom-bg02').css('position','absolute');
    $('.weldom-bg02').css('top','0');
    $('.weldom-bg02').css('left','0');
    $('.weldom-bg02').css('z-index','2');
    $('.weldom-bg02').css('width','0');
    $('.weldom-bg02').css('height','0');
    $('.weldom-bg02').css('background-image','linear-gradient(30deg, #b85914 20%, #e7c62a 70%)');

    setTimeout(animebg01weldom, 0);
    setTimeout(animebg02weldom, 150);
    

}

function animebg01weldom(){
	$('.weldom-bg01').animate({width:'100%',height:'100%' },300, function() { });
}
function animebg02weldom(){
	$('.weldom-bg02').animate({width:'100%',height:'100%' },300, function() { 

        $('.weldom-bg02').append("<div class='weldom-conteneur-bg'></div>");
        $('.weldom-conteneur-bg').css('position','relative');
        $('.weldom-conteneur-bg').css('width','100%');
        $('.weldom-conteneur-bg').css('height','100%');

        $('.weldom-conteneur-bg').append("<img src='img/logo-weldom.png' class='weldom-logo'>");
        $('.weldom-logo').css('position','absolute');
        $('.weldom-logo').css('z-index','15');
        $('.weldom-logo').css('left','50%');
        $('.weldom-logo').css('top','50%');
        $('.weldom-logo').css('-webkit-transform','translate(-50%,-50%)');
        $('.weldom-logo').css('-ms-transform','translate(-50%,-50%)');
        $('.weldom-logo').css('transform','translate(-50%,-50%)');
        $('.weldom-logo').css('opacity','0');

        $('.weldom-logo').animate({opacity:1 },200, function() { });


    });
}


function animeKinepolis(){
	$('.kinepolis').append("<div class='kinepolis-conteneur-relatif'></div>");
    $('.kinepolis-conteneur-relatif').css('position','relative');
    $('.kinepolis-conteneur-relatif').css('width','100%');
    $('.kinepolis-conteneur-relatif').css('height','100%');


    $('.kinepolis-conteneur-relatif').append("<div class='kinepolis-bg01'></div>");
    $('.kinepolis-bg01').css('position','absolute');
    $('.kinepolis-bg01').css('bottom','0');
    $('.kinepolis-bg01').css('right','0');
    $('.kinepolis-bg01').css('z-index','1');
    $('.kinepolis-bg01').css('width','0');
    $('.kinepolis-bg01').css('height','0');
    $('.kinepolis-bg01').css('background-color','#1673a3');

    $('.kinepolis-conteneur-relatif').append("<div class='kinepolis-bg02'></div>");
    $('.kinepolis-bg02').css('position','absolute');
    $('.kinepolis-bg02').css('bottom','0');
    $('.kinepolis-bg02').css('right','0');
    $('.kinepolis-bg02').css('z-index','2');
    $('.kinepolis-bg02').css('width','0');
    $('.kinepolis-bg02').css('height','0');
    $('.kinepolis-bg02').css('background-color','#194574');

    setTimeout(animebg01kinepolis, 0);
    setTimeout(animebg02kinepolis, 150);
    

}

function animebg01kinepolis(){
	$('.kinepolis-bg01').animate({width:'100%',height:'100%' },300, function() { });
}
function animebg02kinepolis(){
	$('.kinepolis-bg02').animate({width:'100%',height:'100%' },300, function() { 


        $('.kinepolis-bg02').append("<div class='kinepolis-conteneur-bg'></div>");
        $('.kinepolis-conteneur-bg').css('position','relative');
        $('.kinepolis-conteneur-bg').css('width','100%');
        $('.kinepolis-conteneur-bg').css('height','100%');

        $('.kinepolis-conteneur-bg').append("<img src='img/bg-kine.jpg' class='kinepolis-bg-vide'>");
        $('.kinepolis-bg-vide').css('position','absolute');
        $('.kinepolis-bg-vide').css('z-index','1');
        $('.kinepolis-bg-vide').css('width','100%');
        $('.kinepolis-bg-vide').css('height','100%');
        $('.kinepolis-bg-vide').css('left','0');
        $('.kinepolis-bg-vide').css('top','0');
        $('.kinepolis-bg-vide').css('opacity','0');


        $('.kinepolis-conteneur-bg').append("<img src='img/kinepolis.svg' class='kinepolis-logo'>");
        $('.kinepolis-logo').css('position','absolute');
        $('.kinepolis-logo').css('z-index','15');
        $('.kinepolis-logo').css('width','93px');
        $('.kinepolis-logo').css('height','auto');
        $('.kinepolis-logo').css('left','50%');
        $('.kinepolis-logo').css('top','50%');
        $('.kinepolis-logo').css('-webkit-transform','translate(-50%,-50%)');
        $('.kinepolis-logo').css('-ms-transform','translate(-50%,-50%)');
        $('.kinepolis-logo').css('transform','translate(-50%,-50%)');
        $('.kinepolis-logo').css('opacity','0');


        $('.kinepolis-conteneur-bg').append("<img src='img/bg-kine-peliculle.jpg' class='kinepolis-bg-pellicule'>");
        $('.kinepolis-bg-pellicule').css('position','absolute');
        $('.kinepolis-bg-pellicule').css('z-index','5');
        $('.kinepolis-bg-pellicule').css('width','100%');
        $('.kinepolis-bg-pellicule').css('height','100%');
        $('.kinepolis-bg-pellicule').css('left','0');
        $('.kinepolis-bg-pellicule').css('top','0');
        $('.kinepolis-bg-pellicule').css('opacity','0');

        $('.kinepolis-conteneur-bg').append("<img src='img/ruban.png' class='kinepolis-ruban-01'>");
        $('.kinepolis-ruban-01').css('position','absolute');
        $('.kinepolis-ruban-01').css('z-index','6');
        $('.kinepolis-ruban-01').css('width','0');
        $('.kinepolis-ruban-01').css('height','0');
        $('.kinepolis-ruban-01').css('transform-origin','100% 100%');
        $('.kinepolis-ruban-01').css('left','50%');
        $('.kinepolis-ruban-01').css('top','50%');
        $('.kinepolis-ruban-01').css('margin-top','-0');
        $('.kinepolis-ruban-01').css('margin-left','-0');
        $('.kinepolis-ruban-01').css('opacity','0');

        $('.kinepolis-conteneur-bg').append("<img src='img/ruban-2.png' class='kinepolis-ruban-02'>");
        $('.kinepolis-ruban-02').css('position','absolute');
        $('.kinepolis-ruban-02').css('z-index','7');
        $('.kinepolis-ruban-02').css('right','0');
        $('.kinepolis-ruban-02').css('bottom','0');
        $('.kinepolis-ruban-02').css('margin-bottom','25px');
        $('.kinepolis-ruban-02').css('opacity','0');

        $('.kinepolis-conteneur-bg').append("<div class='kinepolis-espace-click'></div>");
        $('.kinepolis-espace-click').css('position','absolute');
        $('.kinepolis-espace-click').css('z-index','80');
        $('.kinepolis-espace-click').css('width','100%');
        $('.kinepolis-espace-click').css('height','100%');
        $('.kinepolis-espace-click').css('left','0');
        $('.kinepolis-espace-click').css('top','0');
        $('.kinepolis-espace-click').css('opacity','0');

 
        $('.kinepolis-bg-vide').animate({opacity:1 },200, function() { });
        $('.kinepolis-logo').animate({opacity:1 },200, function() { });

         //Action au survol
        $('.kinepolis-espace-click').mouseover(function() {  
            $(this).css('cursor', 'pointer');
            $('.kinepolis').css('z-index','25');
            $('.kinepolis-bg-pellicule').animate({opacity:1 },400, function() { });
            $('.kinepolis-ruban-01').animate({opacity:1,width:'180px',height:'114px',marginTop:'-114px',marginLeft:'-137px' },400, function() { });
            $('.kinepolis-ruban-02').animate({opacity:1,marginBottom:'-25px' },400, function() { });
            //$('.kinepolis-logo').animate({width:'110px' },400, function() { });
         });

        $('.kinepolis-espace-click').mouseout(function() {   
            $('.kinepolis-bg-pellicule').animate({opacity:0 },400, function() { });
            $('.kinepolis-ruban-01').animate({opacity:0,width:'0',height:'0',marginTop:'-0',marginLeft:'-0' },400, function() { });
            $('.kinepolis-ruban-02').animate({opacity:0,marginBottom:'-0' },400, function() { $('.kinepolis').css('z-index','11'); });
            //$('.kinepolis-logo').animate({width:'93px' },300, function() { });     
         });



    });
}






