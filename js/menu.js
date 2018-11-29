
function init_menu(nom_div){

	//On crée une variable globale d'état du menu
	window.menu_ouvert=false;

	//On crée une variable globale pour que la div cible soit accessible depuis n'importe quelle fonction
    window.div_globale= nom_div;

    //on crée un contenur relatif pour placer les points
    div_globale.append("<div class='conteneur-points-picto-menu'></div>");
    $('.conteneur-points-picto-menu').css('position','relative');
    $('.conteneur-points-picto-menu').css('width','100%');
    $('.conteneur-points-picto-menu').css('height','100%');

    //On crée les points
     $('.conteneur-points-picto-menu').append("<div class='point-haut-gauche'></div>");
     $('.point-haut-gauche').css('position','absolute');
     $('.point-haut-gauche').css('left','0');
     $('.point-haut-gauche').css('top','0');
     $('.point-haut-gauche').css('z-index','10');
     $('.point-haut-gauche').css('width','5px');
     $('.point-haut-gauche').css('height','5px');
     $('.point-haut-gauche').css('background-color','#a9adcf');

     $('.conteneur-points-picto-menu').append("<div class='point-haut-centre'></div>");
     $('.point-haut-centre').css('position','absolute');
     $('.point-haut-centre').css('left','7px');
     $('.point-haut-centre').css('top','0');
     $('.point-haut-centre').css('z-index','20');
     $('.point-haut-centre').css('width','5px');
     $('.point-haut-centre').css('height','5px');
     $('.point-haut-centre').css('background-color','#a9adcf');

     $('.conteneur-points-picto-menu').append("<div class='point-haut-droite'></div>");
     $('.point-haut-droite').css('position','absolute');
     $('.point-haut-droite').css('right','0');
     $('.point-haut-droite').css('top','0');
     $('.point-haut-droite').css('z-index','30');
     $('.point-haut-droite').css('width','5px');
     $('.point-haut-droite').css('height','5px');
     $('.point-haut-droite').css('background-color','#a9adcf');

     $('.conteneur-points-picto-menu').append("<div class='point-milieu-gauche'></div>");
     $('.point-milieu-gauche').css('position','absolute');
     $('.point-milieu-gauche').css('left','0');
     $('.point-milieu-gauche').css('top','7px');
     $('.point-milieu-gauche').css('z-index','40');
     $('.point-milieu-gauche').css('width','5px');
     $('.point-milieu-gauche').css('height','5px');
     $('.point-milieu-gauche').css('background-color','#a9adcf');

     $('.conteneur-points-picto-menu').append("<div class='point-milieu-centre'></div>");
     $('.point-milieu-centre').css('position','absolute');
     $('.point-milieu-centre').css('left','7px');
     $('.point-milieu-centre').css('top','7px');
     $('.point-milieu-centre').css('z-index','50');
     $('.point-milieu-centre').css('width','5px');
     $('.point-milieu-centre').css('height','5px');
     $('.point-milieu-centre').css('background-color','#a9adcf');

     $('.conteneur-points-picto-menu').append("<div class='point-milieu-droite'></div>");
     $('.point-milieu-droite').css('position','absolute');
     $('.point-milieu-droite').css('right','0');
     $('.point-milieu-droite').css('top','7px');
     $('.point-milieu-droite').css('z-index','60');
     $('.point-milieu-droite').css('width','5px');
     $('.point-milieu-droite').css('height','5px');
     $('.point-milieu-droite').css('background-color','#a9adcf');

     $('.conteneur-points-picto-menu').append("<div class='point-bas-gauche'></div>");
     $('.point-bas-gauche').css('position','absolute');
     $('.point-bas-gauche').css('left','0');
     $('.point-bas-gauche').css('bottom','0');
     $('.point-bas-gauche').css('z-index','70');
     $('.point-bas-gauche').css('width','5px');
     $('.point-bas-gauche').css('height','5px');
     $('.point-bas-gauche').css('background-color','#a9adcf');

     $('.conteneur-points-picto-menu').append("<div class='point-bas-centre'></div>");
     $('.point-bas-centre').css('position','absolute');
     $('.point-bas-centre').css('left','7px');
     $('.point-bas-centre').css('bottom','0');
     $('.point-bas-centre').css('z-index','80');
     $('.point-bas-centre').css('width','5px');
     $('.point-bas-centre').css('height','5px');
     $('.point-bas-centre').css('background-color','#a9adcf');

     $('.conteneur-points-picto-menu').append("<div class='point-bas-droite'></div>");
     $('.point-bas-droite').css('position','absolute');
     $('.point-bas-droite').css('right','0');
     $('.point-bas-droite').css('bottom','0');
     $('.point-bas-droite').css('z-index','90');
     $('.point-bas-droite').css('width','5px');
     $('.point-bas-droite').css('height','5px');
     $('.point-bas-droite').css('background-color','#a9adcf');

     //on crée une div transparente pour créer un espace cliquable qui prend toute la surface
     $('.conteneur-points-picto-menu').append("<div class='point-cover'></div>");
     $('.point-cover').css('position','absolute');
     $('.point-covere').css('right','0');
     $('.point-cover').css('top','0');
     $('.point-cover').css('z-index','100');
     $('.point-cover').css('width','100%');
     $('.point-cover').css('height','100%');
     $('.point-cover').css('background-color','#0f0');
     $('.point-cover').css('opacity','0');
    
    // on initialise le style de la div globale pour l'animer (rotation)
     div_globale.css('-webkit-transform','rotate(0)');
     div_globale.css(' -moz-transform','rotate(0)');
     div_globale.css('transform','rotate(0)');
     div_globale.css('-webkit-transition','-webkit-transform 0.2s linear 0.2s');
     div_globale.css('-moz-transition','-moz-transform 0.2s linear 0.2s');
     div_globale.css('transition','transform 0.2s linear 0.2s');


     //Action au click
     $('.point-cover').click(function() {
	      if (menu_ouvert){
	       	desactive_menu(); 
	      }else if (!menu_ouvert){
	        active_menu();

	      }
     });

     //Action au survol
     $('.point-cover').mouseover(function() {	
     	$(this).css('cursor', 'pointer');
		active_hover();
		
	});


    $('.point-cover').mouseout(function() {	
		active_hover_menu_ouvert();
	});
			
	

}

///////////////////////////////////
//       ACTIVATION DU MENU      //
///////////////////////////////////

function active_menu(){
	menu_ouvert=true;
    //on tourne la div globale de 45 degrés
      div_globale.css('transform','rotate(45deg)');
    //on annime les différentx points    
    setTimeout(activepoint01, 50);
    setTimeout(activepoint02, 100);
    setTimeout(activepoint03, 150);
    setTimeout(activepoint04, 200);
    setTimeout(activepoint05, 250);
    setTimeout(activepoint06, 300);
    setTimeout(activepoint07, 350);
    setTimeout(activepoint08, 400);
}

///////////////////////////////////
//     DESACTIVATION DU MENU     //
///////////////////////////////////

function desactive_menu(){
 	menu_ouvert=false;

 	//on remet la div globale à sa rotation d'origine
 	div_globale.css('transform','rotate(0deg)');

 	//On retransforme els barre de la croix en points
 	$('.point-centre-01').animate({width:'5px'},200, function() {});

 	//Lorsque la seconde barre sera arrivée à la même taille qu'un point
 	$('.point-centre-02').animate({height:'5px'},200, function() {

	 	//on rend visible les points
		$('.point-haut-gauche').css('display','block');
		$('.point-haut-centre').css('display','block');
		$('.point-haut-droite').css('display','block');
		$('.point-milieu-gauche').css('display','block');
		$('.point-milieu-centre').css('display','block');
		$('.point-milieu-droite').css('display','block');
		$('.point-bas-gauche').css('display','block');
		$('.point-bas-centre').css('display','block');
		$('.point-bas-droite').css('display','block');

		//On supprime els barres de la croix
		$('.point-centre-01').remove();
		$('.point-centre-02').remove();

		// on appelle les fonction qui vont mettre els points à leurs place d'origine
		setTimeout(originepoint01, 50);
	    setTimeout(originepoint02, 100);
		setTimeout(originepoint03, 150);
		setTimeout(originepoint04, 200);
		setTimeout(originepoint05, 250);
		setTimeout(originepoint06, 300);
		setTimeout(originepoint07, 350);
		setTimeout(originepoint08, 400);

 	 })

}


///////////////////////////////////////////////////////////////////
//     FONCTIONS DE MISE EN PLACE DE TOUS ELS POINTS AU CENTRE   //
///////////////////////////////////////////////////////////////////

  function activepoint01(){
      
     $('.point-haut-gauche').animate({left:7,top:7 },100, function() { });
  }
  function activepoint02(){
     $('.point-haut-centre').animate({left:7,top:7 },100, function() { });
  }
  function activepoint03(){
     $('.point-haut-droite').animate({left:7,top:7 },100, function() { });
  }
  function activepoint04(){
    $('.point-milieu-gauche').animate({left:7,top:7 },100, function() { });
  }
  function activepoint05(){
     $('.point-milieu-droite').animate({left:7,top:7 },100, function() { });
  }
  function activepoint06(){
     $('.point-bas-gauche').animate({left:7,top:7 },100, function() { });
  }
  function activepoint07(){
     $('.point-bas-centre').animate({left:7,top:7 },100, function() { });
  }
  function activepoint08(){
     $('.point-bas-droite').animate({left:7,top:7 },100, function() { 

     	// Lorsque tous les points sont au centre
     	//on désactive la lisibilité des points
     	$('.point-haut-gauche').css('display','none');
     	$('.point-haut-centre').css('display','none');
     	$('.point-haut-droite').css('display','none');
     	$('.point-milieu-gauche').css('display','none');
     	$('.point-milieu-centre').css('display','none');
     	$('.point-milieu-droite').css('display','none');
     	$('.point-bas-gauche').css('display','none');
     	$('.point-bas-centre').css('display','none');
     	$('.point-bas-droite').css('display','none');

     

     	// on crée un premier point qui va se transformer en barre horizontale de la croix
     	$('.conteneur-points-picto-menu').append("<div class='point-centre-01'></div>");
	    $('.point-centre-01').css('position','absolute');
	    $('.point-centre-01').css('left','50%');
	    $('.point-centre-01').css('top','50%');
	    $('.point-centre-01').css('z-index','95');
	    $('.point-centre-01').css('width','5px');
	    $('.point-centre-01').css('height','5px');
	    $('.point-centre-01').css('background-color','#a9adcf');
	    $('.point-centre-01').css('-webkit-transform','translate(-50%,-50%)');
	    $('.point-centre-01').css('-ms-transform','translate(-50%,-50%)');
	    $('.point-centre-01').css('transform','translate(-50%,-50%)');

	    // on transforme le point en barre horizontale
	    $('.point-centre-01').animate({width:'100%'},200, function() {});

	    // on crée le second point qui va se transformer en barre verticale de la croix
	    $('.conteneur-points-picto-menu').append("<div class='point-centre-02'></div>");
	    $('.point-centre-02').css('position','absolute');
	    $('.point-centre-02').css('left','50%');
	    $('.point-centre-02').css('top','50%');
	    $('.point-centre-02').css('z-index','96');
	    $('.point-centre-02').css('width','5px');
	    $('.point-centre-02').css('height','5px');
	    $('.point-centre-02').css('background-color','#a9adcf');
	    $('.point-centre-02').css('-webkit-transform','translate(-50%,-50%)');
	    $('.point-centre-02').css('-ms-transform','translate(-50%,-50%)');
	    $('.point-centre-02').css('transform','translate(-50%,-50%)');

	    // on transforme le point en barre verticale avec un décalage de temps
	    setTimeout(activepointbarre, 400);
	    


     });  
  }


  ////////////////////////////////////////////////////////
  //     FONCTIONS DE CREATION DE LA BARRE VERTICALE    //
  ////////////////////////////////////////////////////////

  function activepointbarre(){
  	// on transforme le point en barre verticale
     $('.point-centre-02').animate({height:'100%'},200, function() {})
  }


////////////////////////////////////////////////////////////////////////////////////////
//     FONCTIONS DE MISE EN PLACE DE TOUS LES POINTS A LEURS EMPLACEMENTS D'ORIGINE   //
////////////////////////////////////////////////////////////////////////////////////////

  function originepoint01(){
     $('.point-haut-gauche').animate({left:0,top:0 },100, function() { });
  }
  function originepoint02(){
     $('.point-haut-centre').animate({left:7,top:0 },100, function() { });
  }
  function originepoint03(){
     $('.point-haut-droite').animate({left:14,top:0 },100, function() { });
  }
  function originepoint04(){
    $('.point-milieu-gauche').animate({left:0,top:7 },100, function() { });
  }
  function originepoint05(){
     $('.point-milieu-droite').animate({left:14,top:7 },100, function() { });
  }
  function originepoint06(){
     $('.point-bas-gauche').animate({left:0,top:14 },100, function() { });
  }
  function originepoint07(){
     $('.point-bas-centre').animate({left:7,top:14 },100, function() { });
  }
  function originepoint08(){
     $('.point-bas-droite').animate({left:14,top:14 },100, function() { });  
  }



  ///////////////////////////////////
  //          AU ROLLOVER          //
  ///////////////////////////////////

  function active_hover(){
  	
  	//Si le menu est ouvert
  	 if (menu_ouvert){

  	 	//on rapetisse la croix
  	 	$('.point-centre-01').animate({width:'80%'},200, function() {  });
		$('.point-centre-02').animate({height:'80%'},200, function() {  });
		//elle se colore en blanc
		$('.point-centre-01').animate({backgroundColor:'#fff' },100, function() {  });
		$('.point-centre-02').animate({backgroundColor:'#fff' },100, function() {  });

	  	
	}else{
		
		//Si il est fermé, on crée une animation de rollover
		setTimeout(animehover01, 0);
	    setTimeout(animehover02, 50);
		setTimeout(animehover03, 100);
		setTimeout(animehover04, 150);
		setTimeout(animehover05, 200);
		
	}
  }

  ///////////////////////////////////
  //           AU ROLLOUT          //
  ///////////////////////////////////

  // Il n'y a une animation au rollout que si le menu est ouvert, c'est à dire une animation sur la croix
  function active_hover_menu_ouvert(){

  	//On remet al croix à sa taille d'origine
  	$('.point-centre-01').animate({width:'100%'},200, function() {  });	
	$('.point-centre-02').animate({height:'100%'},200, function() {  });
	//On remet la couleur d'origine
	$('.point-centre-01').animate({backgroundColor:'#a9adcf' },200, function() {  });
	$('.point-centre-02').animate({backgroundColor:'#a9adcf' },200, function() {  });
  }

  
  ///////////////////////////////////////////////////////
  //     FONCTIONS D'ANIMATION AU ROLLOVER DU DAMIER   //
  ///////////////////////////////////////////////////////
  function animehover01(){
     $('.point-bas-gauche').animate({backgroundColor:'#fff' },100, function() { desanimehover01(); });
  }
  function animehover02(){
     $('.point-milieu-gauche').animate({backgroundColor:'#fff' },100, function() { });
     $('.point-bas-centre').animate({backgroundColor:'#fff' },100, function() { desanimehover02(); });
  }
  function animehover03(){
     $('.point-haut-gauche').animate({backgroundColor:'#fff' },100, function() {  });
     $('.point-milieu-centre').animate({backgroundColor:'#fff' },100, function() { });
     $('.point-bas-droite').animate({backgroundColor:'#fff' },100, function() { desanimehover03(); });
  }
  function animehover04(){
     $('.point-milieu-droite').animate({backgroundColor:'#fff' },100, function() { });
     $('.point-haut-centre').animate({backgroundColor:'#fff' },100, function() { desanimehover04(); });
  }
  function animehover05(){
     $('.point-haut-droite').animate({backgroundColor:'#fff' },100, function() { desanimehover05(); });
  }

  function desanimehover01(){
     $('.point-bas-gauche').animate({backgroundColor:'#a9adcf' },100, function() { });
  }
  function desanimehover02(){
     $('.point-milieu-gauche').animate({backgroundColor:'#a9adcf' },100, function() { });
     $('.point-bas-centre').animate({backgroundColor:'#a9adcf' },100, function() { });
  }
  function desanimehover03(){
   	 $('.point-haut-gauche').animate({backgroundColor:'#a9adcf' },100, function() { });
     $('.point-milieu-centre').animate({backgroundColor:'#a9adcf' },100, function() { });
     $('.point-bas-droite').animate({backgroundColor:'#a9adcf' },100, function() { });
  }
  function desanimehover04(){
      $('.point-milieu-droite').animate({backgroundColor:'#a9adcf' },100, function() { });
     $('.point-haut-centre').animate({backgroundColor:'#a9adcf' },100, function() { });
  }
  function desanimehover05(){
     $('.point-haut-droite').animate({backgroundColor:'#a9adcf' },100, function() {  });
  }




