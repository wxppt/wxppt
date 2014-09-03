
$(document).ready(function() {
    $(".msgpic").click(function() {
        zoomPic(this);
    });
    
    $(".msgreply").click(function() {
        $(this).hide();
        $(this).parents(".msgrow").animate({"height": $(this).parents(".msgrow").height() + 260 + "px"});
        $(this).parents(".msgrow").children(".msgmain").animate({"height": $(this).parents(".msgrow").children(".msgmain").height() + 260 + "px"});
        $(this).parents(".msgrow").children(".msgmain").children(".replypanel").show();
    });

    $(".cancelreply").click(function() {
        $(this).parents(".msgrow").children(".msgmain").animate({"height": $(this).parents(".msgrow").children(".msgmain").height() - 260 + "px"});
        $(this).parents(".msgrow").animate({"height": $(this).parents(".msgrow").height() - 260 + "px"}, function() {
            $(this).children(".msgmain").children(".msgbar").children(".msgreply").show();
            $(this).children(".msgmain").children(".replypanel").hide();
        });
    });
});



var zoomPic = function(pic) {
    // 计算宽高比
    var aspect = $(pic).width() / $(pic).height();
    // 计算最宽限制
    var wMargin = parseInt($(pic).parents(".msgdetail").width() * 0.8);
    var addHeight = parseInt(wMargin/aspect - $(pic).height());
    // 隐藏回复框
    var $replyPanel = $(pic).parents(".msgmain").children(".replypanel");
    var isReplying = false;
    if($replyPanel.css("display") != "none") {
        isReplying = true;
        $(pic).parents(".msgmain").children(".replypanel").hide();
    }
    // 对msgpic picmsgdetail picmsgmain picmsgrow 增加相同的高度
    $(pic).animate({"height": $(pic).height() + addHeight + "px"});
    $(pic).parents(".picmsgdetail").css({"height": $(pic).parents(".picmsgdetail").height() + addHeight + "px"});
    $(pic).parents(".picmsgmain").css({"height": $(pic).parents(".picmsgmain").height() + addHeight + "px"});
    $(pic).parents(".picmsgrow").animate({"height": $(pic).parents(".picmsgrow").height() + addHeight + "px"},function() {
        // 还原回复框
        if(isReplying) {
            $(pic).parents(".msgmain").children(".replypanel").show();
        }
        $(pic).attr("title","Click to zoom out");
        $(pic).unbind("click");
        $(pic).click(function() {
            shrinkPic(this);
        });
    });
}

var shrinkPic = function(pic) {
    var shrinkHeight = parseInt($(pic).height() - 120);

    // 隐藏回复框
    var $replyPanel = $(pic).parents(".msgmain").children(".replypanel");
    var isReplying = false;
    if($replyPanel.css("display") != "none") {
        isReplying = true;
        $(pic).parents(".msgmain").children(".replypanel").hide();
    }
    // 对msgpic picmsgdetail picmsgmain picmsgrow 增加相同的高度
    $(pic).animate({"height": $(pic).height() - shrinkHeight + "px"});
    $(pic).parents(".picmsgdetail").animate({"height": $(pic).parents(".picmsgdetail").height() - shrinkHeight + "px"});
    $(pic).parents(".picmsgmain").animate({"height": $(pic).parents(".picmsgmain").height() - shrinkHeight + "px"});
    $(pic).parents(".picmsgrow").animate({"height": $(pic).parents(".picmsgrow").height() - shrinkHeight + "px"},function() {
        // 还原回复框
        if(isReplying) {
            $(pic).parents(".msgmain").children(".replypanel").show();
        }
        $(pic).attr("title","Click to zoom in");
        $(pic).unbind("click");
        $(pic).click(function() {
            zoomPic(this);
        });
    });


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