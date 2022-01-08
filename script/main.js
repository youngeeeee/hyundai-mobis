$(document).ready(function(){
    var view = true;
    $(".linebtn").on("click",function(){
        view = !view

        if(view == true){
            $("nav").stop().animate({
                "left": "100%"
            },0);
            $("#wrapper").css({
                "overflow" : "auto",
                "height" : "auto"
            })
        }else if(view == false){
            $("nav").stop().animate({
                "left": "0"
            },0);
            $("#wrapper").css({
                "overflow" : "hidden",
                "height" : "100vh"
            });
        }

        $("#line-top").toggleClass("line-top");
        $("#line-mid").toggleClass("line-mid");
        $("#line-bot").toggleClass("line-bot");
    });

    var sliderCount = 0;
    var sliderLen = $("section.main > div").length;
    function mainVisualSlider() {
        sliderCount++;
        var count = sliderCount % sliderLen;
        $(".main > div").eq(count).stop().fadeIn(1000);
        $(".main > div").eq(count).siblings().stop().fadeOut(1000);
    }

    setInterval(mainVisualSlider, 4000);


    $(window).on("scroll", function() {
        var scr = $(window).scrollTop();
        
        for(i=0; i<$(".field .right .explain").length; i++){
            if(i<7 && scr >= $(".field .right .explain").eq(i).offset().top && scr < $(".field .right .explain").eq(i+1).offset().top){
                var isFade = $(".field .right .explain").eq(i).is(":animated");
                
                if(isFade == false){
                    $(".field .left .image").eq(i).stop().fadeIn();
                    $(".field .left .image").eq(i).siblings().stop().fadeOut();
                }
            } else if(scr >= $(".field .right .explain").eq(7).offset().top){
                var isFade = $(".선택자").is(":animated");
                
                if(isFade == false){
                    $(".field .left .image").eq(i).stop().fadeIn();
                    $(".field .left .image").eq(i).siblings().stop().fadeOut();
                }
            }
        }
    });
});