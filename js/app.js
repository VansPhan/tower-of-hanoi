$(document).ready(function() {
	$(".stack").on("mousedown", function() { 
		$(this).on("mousemove" , function(e) {
			var stack = $("#" + (e.toElement.id));
			stack.css("position", "absolute");
			stack.css("top", ((e.clientY + document.body.scrollTop - document.body.clientTop - 30) + "px"));
			stack.css("left", ((e.clientX + document.body.scrollLeft - document.body.clientLeft - 90) + "px"));
		})
		$(document).on("mouseup", function() {
			$(".stack").off("mousemove");
		});
	})
})
