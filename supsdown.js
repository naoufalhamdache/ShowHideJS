$(document).ready(function(){
/*	var i = 0;
	$("#showhide").click(function(){
		if (i==0){
				$("#contenant").animate({height: "+=200px"}, 1000,
				function (){$("#showhide").html("Replier"); i=1;}
				);
			}
		else if (i==1){
				$("#contenant").animate({height: "-=200px"}, 1000,
				function(){$("#showhide").html("Déplier");i=0;}
				);
			}
		});
*/
	var i = 1;
	$("#showhide2").click(function(){
		if (i==0){
				$("#contenant").slideDown("slow",
				function(){$("#showhide2").html("Replier"); i=1;}
				);
			}
		else if (i==1){
				$("#contenant").slideUp("slow",
				function(){$("#showhide2").html("Déplier");i=0;}
				);
			}
		});

});


