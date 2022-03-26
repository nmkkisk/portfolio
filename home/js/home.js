/*メニュー各ボタン【ホバー】==================================================================================================================*/
$(function(){
    
    var p_animeStart = {
        "stroke-dasharray" : "6000px",
        "animation" : "line_move 4s ease-in-out both infinite"
    }
    var p_animeEnd = {
        "stroke-dasharray" : "0px",
        "animation" : "line_stop 4s ease-in-out both infinite"
    }
    
    /*プロフィール*/
    
    $('.profileNav a').hover(
        function() {
            $('#profileAnime').css('opacity','1');
            $('#profileAnime').css('transition','0.15s');
            $('.profileAnimePath').css(p_animeStart);
        },
        function() {
            $('#profileAnime').css('opacity','0');
            $('#profileAnime').css('transition','0s');
            $('.profileAnimePath').css(p_animeEnd);
        }
    )
    
    
    /*デモサイト*/

    $('.demoSiteNav a').hover(
        function() {
            $('#demoSiteAnime').css('opacity','1');
            $('#demoSiteAnime').css('transition','0.15s');
            $('.demoSiteAnimePath').css(p_animeStart);
        },
        function() {
            $('#demoSiteAnime').css('opacity','0');
            $('#demoSiteAnime').css('transition','0s');
            $('.demoSiteAnimePath').css(p_animeEnd);
        }
    )
});

/*メニュー・閉じるボタン【クリック】==================================================================================================================*/
$(function(){
    
    /*メニュー各ボタンクリック=====*/
    $('.profileNav a, .demoSiteNav a').click(
        function() {
            $('.box').css('z-index','1');
            $('.box').css('transition','0.5s');
            $('.box').css('background-color','#FFCC00');
            $('.btnTrigger').css('opacity','1');
        }
    )
    
    $('.profileNav a').click(
        function() {
            $('.profileWrapCover').css('opacity','1');
        }
    )
    
    $('.demoSiteNav a').click(
        function() {
            $('.demoSiteWrapCover').css('opacity','1');
            $('.demoList > li').css('pointer-events', 'auto');
        }
    )
    
    /*閉じるボタンクリック=====*/
    $('.btnTrigger').on('click', function() {
        $('.box').css('z-index','-1');
        $('.box').css('transition','0.5s');
        $('.box').css('background-color','transparent');
        $('.WrapCover').css('opacity','0');
        $('.btnTrigger').css('opacity','0');
        $('.demoList > li').css('pointer-events', 'none');
    }); 
});


/*日付取得==================================================================================================================*/
$(function(){
    var now = new Date();
    
    var yy = now.getFullYear();
    // 月(月のデータは「０～１１」が格納されてるので１を足してます)
    var mm = new Date().toLocaleDateString('en-US', { month: 'long'})
    // 日付
    var dd = now.getDate();
    $(".date").text(mm + " " + dd + "th, " + yy);
});

/*ロードイベント==================================================================================================================*/
$(function() {
    var h = $(window).height();

    $('.background').css('display','none');
    $('#loader-bg, #loader').height(h).css('display','block');
});

$(window).on('load', function (){
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
    $('.background').css('display', 'block');
});

$(function(){
    setTimeout('stopload()',10000);
});

function stopload(){
    $('.background').css('display','block');
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
}