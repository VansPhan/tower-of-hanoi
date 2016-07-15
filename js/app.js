$(document).ready(function() {
	function collision($div1, $div2) {
		var x1 = $div1.offset().left;
		var y1 = $div1.offset().top;
		var h1 = $div1.outerHeight(true);
		var w1 = $div1.outerWidth(true);
		var b1 = y1 + h1;
		var r1 = x1 + w1;
		var x2 = $div2.offset().left;
		var y2 = $div2.offset().top;
		var h2 = $div2.outerHeight(true);
		var w2 = $div2.outerWidth(true);
		var b2 = y2 + h2;
		var r2 = x2 + w2;
		if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
		return true;
    }
    function update(e) {
    	var stack = $("#" + (e.toElement.id));
		if(stack[0].className == "stack") {
			if(collision($(stack),$("#t1"))) {
				// if(stack[0].id == "d2" && $("#t1.stack:last-child") );
				stack.css("position", "");
				$("#t1").append(stack);
			}
			else if(collision($(stack),$("#t2"))) {
				stack.css("position", "");
				$("#t2").append(stack);
			}
			else if(collision($(stack),$("#t3"))) {
				stack.css("position", "");
				$("#t3").append(stack);
			}
			else {
				console.log("ERROR: For some reason the if statements are not being triggered. LINE 44 in app.js");
			}
			$("#moves").html((parseInt($("#moves").html())) + 1);
		}
    }
	$(".stack").on("mousedown", function() { 
		$(this).bind("mousemove" , function(e) {
			var stack = $("#" + (e.toElement.id));
			stack.css("position", "absolute");
			stack.css("top", ((e.clientY + document.body.scrollTop - document.body.clientTop - 30) + "px"));
			stack.css("left", ((e.clientX + document.body.scrollLeft - document.body.clientLeft - 60) + "px"));
		})
		$(document).one("mouseup", function(e) {
			$(".stack").unbind("mousemove");
			update(e);
		})
	})
})
