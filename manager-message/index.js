
$(document).ready(function() {
    $(".msgpic").click(function() {
        zoomPic(this);
    });
});

var zoomPic = function(pic) {
    var aspect = $(pic).width() / $(pic).height();
    var wMargin = parseInt($(pic).parent(".msgdetail").width() * 0.8);
    $(pic).animate({"height": wMargin / aspect + "px"});
    $(pic).parents(".messagerow").animate({"height": wMargin / aspect + 60 + "px"});
    $(pic).unbind("click");
    $(pic).click(function() {
        shrinkPic(this);
    });
}

var shrinkPic = function(pic) {
    $(pic).animate({"height": "120px"});
    $(pic).parents(".messagerow").animate({"height": "180px"});
    $(pic).unbind("click");
    $(pic).click(function() {
        zoomPic(this);
    });
}

alert("hello");