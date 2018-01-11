$(document).ready(function(){

	$("#mobileMenuBar").click(function(){
		console.log("check");
		$(".mobileMenu").toggle(1000);
		$("#mobileMenuBar").toggle();
		$("#mobileMenuCross").toggle();
	})

	$("#mobileMenuCross").click(function(){
		console.log("check");
		$(".mobileMenu").toggle(1000);
		$("#mobileMenuCross").toggle();
		$("#mobileMenuBar").toggle();
	})


})