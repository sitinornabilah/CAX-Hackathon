
var navbarToTop;
$(document).ready(function(){
	navbarToTop = $("#navbar").offset().top;
});

$(document).scroll(function() {
	scrollTop = $(document).scrollTop();
	if(scrollTop >= navbarToTop){
		$("#navbar").css('position','fixed');
		$("#navbar").css('top',0);
	}else if (scrollTop < navbarToTop){
		$("#navbar").css('position','static');
	}
});

