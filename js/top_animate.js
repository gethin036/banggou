/**
 * Created by me on 2017/03/30.
 */

//入口函数
$(function(){

    // console.log(11);
    $(".top_logo").find("img").on({
        mouseenter:function(){
            console.log($(this));
            $(this).animate({"opacity":0.8},500);
        },
        mouseleave:function(){
            $(this).animate({"opacity":1},500);
        }
    })






});