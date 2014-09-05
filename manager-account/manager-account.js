
$(document).ready(function() {
    $(".usrfilter").click(function() {
        $(this).addClass("filterselected").siblings().removeClass("filterselected");
    });

    $(".usermodify").click(function() {
        var $main = $(this).parents(".usermain");
        var type = $main.find(".typeinfo").text();

        var bzname = $main.find(".bzinfo").text();
        var nickname = $main.find(".nickinfo").text();
        if(bzname != "") {
            nickname = nickname.substring(1,nickname.length-1);
        }
        var email = $main.find(".emaillink").text();
        var tel = $main.find(".telnum").text();
        
        if(type == "员工") {
            showBigGlassWindow("修改资料", nickname, bzname, email, tel, 0);
        } else if(type == "粉丝") {
            showSmallGlassWindow("修改资料", nickname, bzname, 0);
        }
    });

    $(".fanstostaff").click(function() {
        var $main = $(this).parents(".usermain");
        var nickname = $main.find(".nickinfo").text();
        nickname = nickname.substring(1,nickname.length-1);
        showBigGlassWindow("提升为员工", nickname, "", "", "", 1);
    });

    $(".windowclose,.windowcancel,.windowopok").click(function() {
        $(".glasswindow").hide();
    });
});

var showBigGlassWindow = function(title, nickname, bzname, email, tel, btnType) {
    locateGlassWindow();
    $(".glasswindow").show();
    $($(".glasswindow").find(".windowtitle span")[0]).html(title).next().html(nickname);
    $("#remark").val(bzname);
    $("#email").val(email);
    $("#tel").val(tel);
    $(".windowcontentp").children().show();
    if(btnType == 0) {
        $($(".windowoperationp").children()[0]).html("修&nbsp;&nbsp;改");
    } else if(btnType == 1) {
        $($(".windowoperationp").children()[0]).html("确&nbsp;&nbsp;定");
    }
}

var showSmallGlassWindow = function(title, nickname, bzname, btnType) {
    locateGlassWindow();
    $(".glasswindow").show();
    $($(".glasswindow").find(".windowtitle span")[0]).html(title).next().html(nickname);
    $("#remark").val(bzname);
    $(".windowcontentp").children().first().next().hide().next().hide();
    
}

var hideGlassWindow = function() {

}

var locateGlassWindow = function() {
    $(".glasswindow").css({
        "left": parseInt(($(window).width()-$(".glasswindow").width())/2) + "px",
        "top": parseInt(($(window).height()-$(".glasswindow").height())/2)+ "px"
    });
}