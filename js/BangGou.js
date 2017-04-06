/**
 * Created by me on 2017/03/29.
 */


$(function(){


    //hot-good
    //按钮
    $(".hot-good>.hot>.hot-good-btn").find("img").hover(function(){
        $(this).animate({opacity:0.8},500);
    },
    function(){
        $(this).animate({opacity:1},500);
    });

    //li图片
    $(".hot-good>.hot>ul").children().hover(function(){
            $(this).animate({opacity:0.7},500);
        },
        function(){
            $(this).animate({opacity:1},500);
        });


    //ul滚动
    $(".hot-good>.hot").find("span:first-child").on("click",function(){
        // console.log($(this).parent().next().position().left);
        // if($(this).parent().next().position().left==0){
        // console.log($(this));
        $(this).parent().next().animate({left:"0px"},800);
        // }else{

        // }
    }).end().find("span:last-child").on("click",function(){
        // console.log($(this));
        $(this).parent().next().animate({left:"-1200px"},800);
        if($(this).parent().next().position().left>=1200){
            $(this).parent().next().css("left","1200px");
        }
    });



});
