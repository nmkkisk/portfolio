$(function() {
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        console.log(scroll);
    });
});
/*スクロールイベント==================================================================================================================*/
$(function () {
    $('.logo').each(function () {
        var $win = $(window),
            $winH = $win.height(),
            $connect = $(this),
            position = $connect.offset().top,
            current = 0,
            scroll;
        $win.on('load scroll', function () {
            scroll = $win.scrollTop();
            if (scroll < 400) {
                current1 = (1 - (scroll) / $winH) * 4 * 100;
                current2 = (1 - (scroll) / $winH) * 2.5 * 100;
                current3 = (1 - (scroll) / $winH) * 1 * 100;
                current4 = (1 - (scroll) / $winH) * 2 * 100;
                $connect.css({width: current1 + 'px'});
                $connect.css({height: current2 + 'px'});
                $connect.css({top: current3 + 'px'});
                $connect.css({right: current4 + 'px'});
            }
            if (scroll > 400) {
                $connect.css({width: current1 + 'px'});
                $connect.css({height: current2 + 'px'});
                $connect.css({top: current3 + 'px'});
                $connect.css({right: current4 + 'px'});
            }
        });
    });
    
    $('.backPicTree').each(function () {
        var $win = $(window),
            $winH = $win.height(),
            $connect = $(this),
            position = $connect.offset().top,
            current = 0,
            scroll;
        $win.on('load scroll', function () {
            scroll = $win.scrollTop();
            if (scroll < 400) {
                current5 = (1 - (scroll) / $winH) * 6 * 100;
                $connect.css({width: current5 + 'px'});
                $connect.css({height: current5 + 'px'});
            }
            if (scroll > 400) {
                $connect.css({width: current5 + 'px'});
                $connect.css({height: current5 + 'px'});
            }
        });
    });
    
    $('.backPicYama').each(function () {
        var $win = $(window),
            $winH = $win.height(),
            $connect = $(this),
            position = $connect.offset().top,
            current = 0,
            scroll;
        $win.on('load scroll', function () {
            scroll = $win.scrollTop();
            if (scroll < 400) {
                current6 = (1 - (scroll) / $winH) * 1.5 * 100;
                $connect.css({height: current6 + 'px'});
            }
            if (scroll > 400) {
                $connect.css({height: current6 + 'px'});
            }
        });
    });
    
    
});


/*メニューボタン【クリック】==================================================================================================================*/
$(function(){
    var clickFlg = false;
    $('.btnTrigger').on('click', function() {
        $(this).toggleClass('active');

        if (clickFlg===false){
            $(".menuBox").animate({
                "top":"0"
            },500);
            clickFlg = true;
        }else{
            $(".menuBox").animate({
                "top":"-100vh"
            },500);
            clickFlg = false;
        }

        return false;
    });   
});



/*ロゴ・キッズメニュー【クリック】==================================================================================================================*/
$(function () {

    $(".logo").click(function(){
        $("html,body").animate({
            scrollTop : 0
        }, {
            queue : false
        });
    });
    $(".animalLeft").click(function(){
        $("html,body").animate({
            scrollTop : $('.animalList').offset().top-5
        }, {
            queue : false
        });
    });
    $(".animalCenter").click(function(){
        $("html,body").animate({
            scrollTop : $('.schedule').offset().top-5
        }, {
            queue : false
        });
    });
    $(".animalRight").click(function(){
        $("html,body").animate({
            scrollTop : $('.shop').offset().top-5
        }, {
            queue : false
        });
    });

});


/*季節ボタン【クリック】==================================================================================================================*/
$(function () {
    
    var now = "haru";
    var nowBtn = "haru";

    
    function naviClickFunc(backPic, navi, color, now) {
        var backPic = backPic;
        var navi = navi;
        var color = color;
        now = now;
        
        
        if (nowBtn == "haru") {
            $(".backPicHaru").animate({
                "opacity":"0"
            },500);
            $(".naviHaru").animate({
                "color":"#FFFF00",
                "background-color":"transparent"
            },500);
            $(".naviHaru").css({"pointer-events": "auto"});
        } else if (nowBtn == "natsu") {
            $(".backPicNatsu").animate({
                "opacity":"0"
            },500);
            $(".naviNatsu").animate({
                "color":"#FFFF00",
                "background-color":"transparent"
            },500);
            $(".naviNatsu").css({"pointer-events": "auto"});
        } else if (nowBtn == "aki") {
            $(".backPicAki").animate({
                "opacity":"0"
            },500);
            $(".naviAki").animate({
                "color":"#FFFF00",
                "background-color":"transparent"
            },500);
            $(".naviAki").css({"pointer-events": "auto"});
        } else if (nowBtn == "fuyu") {
            $(".backPicFuyu").animate({
                "opacity":"0"
            },500);
            $(".naviFuyu").animate({
                "color":"#FFFF00",
                "background-color":"transparent"
            },500);
            $(".naviFuyu").css({"pointer-events": "auto"});
        }
        
        $(backPic).css({"opacity": "1"});
        
        $(navi).animate({
            "color":color,
            "background-color":"#FFFF00"
        },500);
        
        $(navi).css({"pointer-events": "none"});
        
        if (now == "haru") {
            nowBtn = "haru"
            $(".kidsMenuHN").css({"opacity": "1"});
            $(".kidsMenuAF").css({"opacity": "0"});
        } else if (now == "natsu") {
            nowBtn = "natsu"
            $(".kidsMenuHN").css({"opacity": "1"});
            $(".kidsMenuAF").css({"opacity": "0"});
        } else if (now == "aki") {
            nowBtn = "aki"
            $(".kidsMenuHN").css({"opacity": "0"});
            $(".kidsMenuAF").css({"opacity": "1"});
        } else if (now == "fuyu") {
            nowBtn = "fuyu"
            $(".kidsMenuHN").css({"opacity": "0"});
            $(".kidsMenuAF").css({"opacity": "1"});
        }
        
        
        
    }

    $(".naviHaru").click(function(){
        naviClickFunc(".backPicHaru",".naviHaru","#61C1D3","haru");
    });
    
    $(".naviNatsu").click(function(){
        naviClickFunc(".backPicNatsu",".naviNatsu","#0088FF","natsu");
    });
    
    $(".naviAki").click(function(){
        naviClickFunc(".backPicAki",".naviAki","#3271CB","aki");
    });
    
    $(".naviFuyu").click(function(){
        naviClickFunc(".backPicFuyu",".naviFuyu","#376AF0","fuyu");
    });

});


/*キッズメニュー【ホバー】==================================================================================================================*/
$(function(){
    
    function fukidashiHoverFunc(fukidashi) {
        var fukidashi = fukidashi;
        $(fukidashi).css({"animation": "fukidashiUp 1s ease-in-out both"});
    }
    function fukidashiHoverOutFunc(fukidashi) {
        var fukidashi = fukidashi;
        $(fukidashi).css({"animation": "fukidashiDown 1s ease-in-out both"});
    }
    
    
    $(".animalLeft").hover(
        function() {
            fukidashiHoverFunc(".fukidashiLeft");
        },
        function() {
            fukidashiHoverOutFunc(".fukidashiLeft");
        }
    );
    
    $(".animalCenter").hover(
        function() {
            fukidashiHoverFunc(".fukidashiCenter");
        },
        function() {
            fukidashiHoverOutFunc(".fukidashiCenter");
        }
    );
    
    $(".animalRight").hover(
        function() {
            fukidashiHoverFunc(".fukidashiRight");
        },
        function() {
            fukidashiHoverOutFunc(".fukidashiRight");
        }
    );

});


/*イベント・ショップ【ホバー】==================================================================================================================*/
$(function(){
    
    function eventBoxHoverFunc(event) {
        var event = event;
        $(event).stop().animate({
            "background-color":"rgba(255, 255, 255, 0.3);"
        },500);
    }
    function eventBoxHoverOutFunc(event) {
        var event = event;
        $(event).stop().animate({
            "background-color":"transparent"
        },500);
    }

    $(".eventBox1_1").hover(
        function() {
            eventBoxHoverFunc(".eventBox1_1");
        },
        function() {
            eventBoxHoverOutFunc(".eventBox1_1");
        }
    );
    
    $(".eventBox1_2").hover(
        function() {
            eventBoxHoverFunc(".eventBox1_2");
        },
        function() {
            eventBoxHoverOutFunc(".eventBox1_2");
        }
    );
    
    $(".eventBox1_3").hover(
        function() {
            eventBoxHoverFunc(".eventBox1_3");
        },
        function() {
            eventBoxHoverOutFunc(".eventBox1_3");
        }
    );
    
    $(".eventBox1_4").hover(
        function() {
            eventBoxHoverFunc(".eventBox1_4");
        },
        function() {
            eventBoxHoverOutFunc(".eventBox1_4");
        }
    );
    
    $(".eventBox1_5").hover(
        function() {
            eventBoxHoverFunc(".eventBox1_5");
        },
        function() {
            eventBoxHoverOutFunc(".eventBox1_5");
        }
    );
    
    $(".eventBox2_1").hover(
        function() {
            eventBoxHoverFunc(".eventBox2_1");
        },
        function() {
            eventBoxHoverOutFunc(".eventBox2_1");
        }
    );
    
    $(".eventBox2_2").hover(
        function() {
            eventBoxHoverFunc(".eventBox2_2");
        },
        function() {
            eventBoxHoverOutFunc(".eventBox2_2");
        }
    );
    
    $(".shopBox1").hover(
        function() {
            eventBoxHoverFunc(".shopBox1");
        },
        function() {
            eventBoxHoverOutFunc(".shopBox1");
        }
    );
    
    $(".shopBox2").hover(
        function() {
            eventBoxHoverFunc(".shopBox2");
        },
        function() {
            eventBoxHoverOutFunc(".shopBox2");
        }
    );
    
    $(".shopBox3").hover(
        function() {
            eventBoxHoverFunc(".shopBox3");
        },
        function() {
            eventBoxHoverOutFunc(".shopBox3");
        }
    );
    
    $(".shopBox4").hover(
        function() {
            eventBoxHoverFunc(".shopBox4");
        },
        function() {
            eventBoxHoverOutFunc(".shopBox4");
        }
    );
    
    

});




/*日付取得==================================================================================================================*/
$(function(){
    var now = new Date();
    
    var WeekChars = [ "日", "月", "火", "水", "木", "金", "土" ];
    
    var yy = now.getFullYear();
    // 月(月のデータは「０～１１」が格納されてるので１を足してます)
    //var mm = new Date().toLocaleDateString('en-US', { month: 'long'})
    var mm = now.getMonth() + 1;
    // 日付
    var dd = now.getDate();
    // 曜日
    var w = now.getDay();
    $(".date").text(mm + "月" + dd + "日" + "（" + WeekChars[w] + "）");
});


