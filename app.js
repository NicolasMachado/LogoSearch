$(function () {
	init();
	// when option changed
	$("select").on("change", function() {
		highlight($(".pr-type").find(":selected").val(), $(".lvl-ed").find(":selected").val());
	});
	// when form submitted (after reload)
	$("#search-form").on("submit", function(e) {
		e.preventDefault();
		highlight($(".pr-type").find(":selected").val(), $(".lvl-ed").find(":selected").val());
	});
});

function init () {
	// initialize all images to fade
	$.each($(".img-container"), function() {
		$(this).css("background-image", "url(\"images/" + $(this).data("img") + "-fade.png\")");
	});
}

function highlight (programType, lvlEducation) {
	// select which image to highlight
	$.each($(".img-container"), function() {
		if (($(this).data("prgrm") === programType || programType === "all") && ($(this).data("lvled") === lvlEducation || lvlEducation === "all")) {
			$(this).css("background-image", "url(\"images/" + $(this).data("img") + "-color.png\")");
		} else {
			$(this).css("background-image", "url(\"images/" + $(this).data("img") + "-fade.png\")");
		}
	});
}