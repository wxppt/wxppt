
$(document).ready(function() {
    $(".msgpic").click(function() {
        zoomPic(this);
    });
    
    $(".msgreply").click(function() {
        $(this).hide();
        $(this).parents(".messagerow").animate({"height":"430px"});
        $(this).parents(".messagerow").children(".msgmain").children(".replypanel").show();
    });

    $(".cancelreply").click(function() {
        $(this).parents(".messagerow").animate({"height":"180px"}, function() {
            $(this).children(".msgmain").children(".msgbar").children(".msgreply").show();
            $(this).children(".msgmain").children(".replypanel").hide();
        });
    });

    setMsgDetailHeight();
});

var zoomPic = function(pic) {
    var aspect = $(pic).width() / $(pic).height();
    var wMargin = parseInt($(pic).parents(".msgdetail").width() * 0.8);
    $(pic).parents(".msgmain").children(".replypanel").hide();

    $(pic).animate({"height": wMargin / aspect + "px"});
    $(pic).parents(".messagerow").animate({"height": wMargin / aspect + $(pic).parents(".messagerow").height() - 120 + "px"}, function() {
        setMsgDetailHeight();
        $(pic).parents(".msgmain").children(".replypanel").show();
        $(pic).attr("title","Click to zoom out");
        $(pic).unbind("click");
        $(pic).click(function() {
            shrinkPic(this);
        });
    });
   
}

var shrinkPic = function(pic) {
    $(pic).animate({"height": "120px"});
    $(pic).parents(".messagerow").animate({"height": "180px"}, function() {
        setMsgDetailHeight();
        $(pic).attr("title","Click to zoom in");
        $(pic).unbind("click");
        $(pic).click(function() {
            zoomPic(this);
        });
    });
}

var setMsgDetailHeight = function() {
    var pic = $(".msgpic")[0];
    while($(pic).length > 0) {
        $(pic).parents(".msgdetail").height($(pic).height());
        pic = $(pic).next();
    }
}