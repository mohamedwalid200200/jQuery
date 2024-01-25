let sideBarWidth = $(".sideBar").outerWidth(true);
function hideSideBar(){
    $(".sideBar").animate({left : `-${sideBarWidth}`} , 1000);
    $(".open").animate({marginLeft : "0px"} , 1000);
    $(".lets , h2").animate({marginLeft : "0px"} , 1000);
}
function showSideBar(){
    $(".sideBar").animate({left : "0px"} , 1000);
    $(".open").animate({marginLeft : "260px"} , 1000);
    $(".lets , h2").animate({marginLeft : "260px"} , 1000);
}
$(".open").click(function(){
    if ($(".sideBar").css("left") == "0px" ){
        hideSideBar();
    }else{
        showSideBar();
    }
});
$(".closeBtn").click( function(){
    hideSideBar();
});
$(".accordionHeader").click( function(einfo){
    $(einfo.target).next().slideToggle(500);
    $(".accordionContent").not($(einfo.target).next()).slideUp(500)
})
function countDown(){
let today= (new Date().getTime())/1000;
let endDay= (new Date('10 october 2021').getTime())/1000;
let difference= endDay-today;
let countedDays= Math.floor((difference)/(24*60*60));
let countedHours= Math.floor((difference - (countedDays*(24*60*60))) / 3600);
let countedMinutes= Math.floor((difference - (countedDays*(24*60*60)) - (countedHours * 60)) / 60);
let countedSeconds= Math.floor((difference - (countedDays*(24*60*60)) - (countedHours * 60) - (countedMinutes*60)));
$(".days").html(countedDays);
$(".hours").html(countedHours);
$(".minutes").html(countedMinutes);
$(".seconds").html(countedSeconds);
}
countDown();
setInterval(function() {  countDown() }, 1000);
$("textarea").keyup( function(){
    let textLength = $("textarea").val().length;
    let maxLength= 100;
    let remaining = maxLength - textLength;
    if(remaining <=0 ){
        $(".remaining").html("Your available character finished");
    }else{
        $(".remaining").html(remaining);
    }
})


