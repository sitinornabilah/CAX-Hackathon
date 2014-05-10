$(document).scroll(function() {
	scrollTop = $(document).scrollTop();
	navbarToTop = $("#navbar").offset().top;
	if(scrollTop == navbarToTop){
		alert("Hey!");
	}
	
});

