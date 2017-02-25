$(function () {
	init();
	$("select").on("change", function() {
		highlight($(".pr-type").find(":selected").val(), $(".lvl-ed").find(":selected").val());
	});
	$("#search-form").on("submit", function(e) {
		e.preventDefault();
		highlight($(".pr-type").find(":selected").val(), $(".lvl-ed").find(":selected").val());
	});
});

function init () {
	$.each($(".img-container"), function() {
		$(this).css("background-image", "url(\"images/" + $(this).data("img") + "-fade.png\")");
	});
}

function highlight (programType, lvlEducation) {
	$.each($(".img-container"), function() {
		if (($(this).data("prgrm") === programType || programType === "all") && ($(this).data("lvled") === lvlEducation || lvlEducation === "all")) {
			$(this).css("background-image", "url(\"images/" + $(this).data("img") + "-color.png\")");
		} else {
			$(this).css("background-image", "url(\"images/" + $(this).data("img") + "-fade.png\")");
		}
	});
}