$(document).scroll(function() {
	scrollTop = $(document).scrollTop();
	navbarToTop = $("#navbar").offset().top;
	if(scrollTop == navbarToTop){
		alert("hey");
		/*$("#navbar").css('position','fixed');
		$("#navbar").css('top',0);*/
	}
	
});

