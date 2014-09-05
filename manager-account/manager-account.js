
$(document).ready(function() {
   $(".contectmodify").click(function() {
        var type = $(this).parents("span").attr("id");
        if(type == "accounttel") {
            $("#accounttel").hide();
            $("#accounttelmodify>input").val($("#accounttelnum").text().trim());
            $("#accounttelmodify").show();
        } else if(type == "accountemail") {
            $("#accountemail").hide();
            $("#accountemailmodify>input").val($("#accountemailnum").text().trim());
            $("#accountemailmodify").show();
        }
   });

   $(".telok").click(function() {
   		$("#accounttel").show();
        $("#accounttelmodify").hide();
   });

   $(".emailok").click(function() {
   		$("#accountemail").show();
        $("#accountemailmodify").hide();
   });

   $(".pwmodify").click(function() {
   		locateGlassWindow();
   		$(".glasswindow").show();
   });
});
