$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


$(".burger").on("click", activeted);
var count =0;
function activeted (){
	if (count % 2 === 0){
	$(".burger").addClass("active");
	$(".mobail_mnu").css("display", "block");
	}
	if (count % 2 !== 0){
		$(".burger").removeClass("active");
		$(".mobail_mnu").css("display", "none");
	}
	count++;
}

});

$( ".open" ).click(function() {
  $(".par").toggleClass("active")
});