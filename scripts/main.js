var showSpinner = function(){
    $("#spinnerLoad").css("display", "block");
}
var hideSpinner = function(){
    $("#spinnerLoad").css("display", "none");
}
setTimeout(hideSpinner,2000);

$(".hero-box").click(function(){
    $(".hero-box").removeClass("active-box");
    $(this).addClass("active-box");
})
$(".hero-box:nth-child(1)").click(function(){
    $(".dataBox").css("display", "none")
    $(".dataBox:nth-child(1)").css("display", "block")
})
$(".hero-box:nth-child(2)").click(function(){
    $(".dataBox").css("display", "none")
    $(".dataBox:nth-child(2)").css("display", "block")
})
$(".hero-box:nth-child(3)").click(function(){
    $(".dataBox").css("display", "none")
    $(".dataBox:nth-child(3)").css("display", "block")
})