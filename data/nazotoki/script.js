// スキップボタンの設定
$(function(){

    //デフォルトで表示する要素を指定
        $(".mainSite").css("display", "none");
        setTimeout(function() {
            $('.anime').fadeOut();
        }, 31000);

        $(".mainSite").css({opacity:'0'});
        setTimeout(function(){
        $(".mainSite").css("display", "block");
        $(".mainSite").stop().animate({opacity:'1'},10000);
        },31000);
  
    //buttonがクリックされたら
    $('.button').click(function () {
  
      //toggleClassで指定した要素にswitchのclassを追加または削除
      $('.anime').toggleClass('switch');
  
      //wrapがswitchを持っていれば
      if($('.anime').hasClass('switch')){
  
        //要素の表示を切り替える
            $(".mainSite").css("display", "none");
            setTimeout(function() {
                $('.anime').fadeOut();
                }, 0);
            
                $(".mainSite").css({opacity:'0'});
                setTimeout(function(){
                $(".mainSite").css("display", "block");
                $(".mainSite").stop().animate({opacity:'1'},0);
                },100);
  
      //wrapがswitchを持っていなければ
        }else{
  
        //要素の表示を切り替える
            $(".mainSite").css("display", "none");
            setTimeout(function() {
                $('.anime').fadeOut();
                }, 31000);

                $(".mainSite").css({opacity:'0'});
                setTimeout(function(){
                $(".mainSite").css("display", "block");
                $(".mainSite").stop().animate({opacity:'1'},10000);
                },31000);
    }
    });
});
// スキップボタンの設定ここまで

// 画面サイズをリサイズ
$(function(){
    $('.fly-in,.bg,.mainSite').css({'height':$(window).height()});
    $(window).on('resize',function(){
        winH = $(window).height();
        $('.fly-in,.bg,.mainSite').outerHeight(winH);
    });

    $('.fly-in,.bg,.mainSite').css({'width':$(window).width()});
    $(window).on('resize',function(){
        winW = $(window).width();
        $('.fly-in,.bg,.mainSite').outerWidth(winW);
    });
});
// 画面サイズをリサイズここまで

