$(document).ready(function() {
	$(".contectmodify").click(function() {
		$(this).parent().hide().siblings().show();
		$(this).parent().hide().siblings().children("input").val($(this).siblings().text().trim());
	});

	$(".modifyok").click(function() {
		$(this).parent().hide().siblings().show();
	});

	$(".pwmodify").click(function() {
		locateGlassWindow();
		$(".glasswindow").show();
	});
});
