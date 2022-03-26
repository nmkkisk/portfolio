/*スクロールイベント==================================================================================================================*/
$(function () {
    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();
        var downFlg;

        $('.concept').each(function () {
            const targetPosition = $(this).offset().top - 200;
            if (scroll > targetPosition - windowHeight + 700 && downFlg != true){
                $(".sideMenu").css("position", "fixed");
                $(".btn1").css("animation", "sideMenuBtn1ScrollNotTop 1.5s ease-in-out both");
                $(".btn2").css("animation", "sideMenuBtn2ScrollNotTop 1.5s ease-in-out both");
                $(".btn3").css("animation", "sideMenuBtn3ScrollNotTop 1.5s ease-in-out both");
                downFlg = true;
            }
            
            if (scroll < targetPosition - windowHeight + 750 && downFlg == true) {
                $(".sideMenu").css("position", "absolute");
                $(".btn1").css("animation", "sideMenuBtn1ScrollTop 1.5s ease-in-out both");
                $(".btn2").css("animation", "sideMenuBtn2ScrollTop 1.5s ease-in-out both");
                $(".btn3").css("animation", "sideMenuBtn3ScrollTop 1.5s ease-in-out both");
                downFlg = false;
            }
        });
    });
});


/*サイドメニュー【クリック】==================================================================================================================*/
$(function () {
    
    $(".logo").click(function(){
        $("html,body").animate({
            scrollTop : 0
        }, {
            queue : false
        });
    });
    $(".SVG1").click(function(){
        $("html,body").animate({
            scrollTop : $('.concept').offset().top-5
        }, {
            queue : false
        });
    });
    $(".SVG2").click(function(){
        $("html,body").animate({
            scrollTop : $('.menu').offset().top-5
        }, {
            queue : false
        });
    });
    $(".SVG3").click(function(){
        $("html,body").animate({
            scrollTop : $('.infomap').offset().top-5
        }, {
            queue : false
        });
    });

});

/*コンセプト各ボタン【クリック】==================================================================================================================*/
$(function () {
    
    var now = "conceptWrap1" ;
    
    function nextAct() {
        $(".next").css("cursor", "pointer");
        $(".next").css("pointer-events", "auto");
        $(".next span").css("background-color", "#29abe2");
    }

    function nextNonAct() {
        $(".next").css("cursor", "default");
        $(".next").css("pointer-events", "none");
        $(".next span").css("background-color", "#CCCCCC");
    }

    function prevAct() {
        $(".prev").css("cursor", "pointer");
        $(".prev").css("pointer-events", "auto");
        $(".prev span").css("background-color", "#29abe2");
    }

    function prevNonAct() {
        $(".prev").css("cursor", "default");
        $(".prev").css("pointer-events", "none");
        $(".prev span").css("background-color", "#CCCCCC");
    }
    
    function conceptClickFunc(conceptWrap, pagination) {
        var conceptWrap = conceptWrap;
        var pagination = pagination;
        $(conceptWrap).animate({"opacity": "1"},{"duration": 300});
        $(conceptWrap).animate({"z-index": "1"},{"duration": 300});
        $(pagination).css("background", "#29abe2");
        
        if (conceptWrap == '.conceptWrap1') {
            $(".conceptWrap2, .conceptWrap3").animate({"opacity": "0"},{"duration": 300});
            $(".conceptWrap2, .conceptWrap3").animate({"z-index": "0"},{"duration": 300});
            $(".pagination2, .pagination3").css("background", "#4D4D4D");
            now = "conceptWrap1"
        } else if (conceptWrap == '.conceptWrap2') {
            $(".conceptWrap1, .conceptWrap3").animate({"opacity": "0"},{"duration": 300});
            $(".conceptWrap1, .conceptWrap3").animate({"z-index": "0"},{"duration": 300});
            $(".pagination1, .pagination3").css("background", "#4D4D4D");
            now = "conceptWrap2"
        } else if (conceptWrap == '.conceptWrap3') {
            $(".conceptWrap1, .conceptWrap2").animate({"opacity": "0"},{"duration": 300});
            $(".conceptWrap1, .conceptWrap2").animate({"z-index": "0"},{"duration": 300});
            $(".pagination1, .pagination2").css("background", "#4D4D4D");
            now = "conceptWrap3"
        }
    }
    
    
    $('.pagination1').click(
        function() {
            conceptClickFunc(".conceptWrap1",".pagination1");
            nextAct();
            prevNonAct();
        }
    );
    
    $('.pagination2').click(
        function() {
            conceptClickFunc(".conceptWrap2",".pagination2");
            nextAct();
            prevAct();
        }
    );
    
    $('.pagination3').click(
        function() {
            conceptClickFunc(".conceptWrap3",".pagination3");
            nextNonAct();
            prevAct();
        }
    );
    
    $('.next').click(
        function() {
            if (now == 'conceptWrap1') {
                conceptClickFunc(".conceptWrap2",".pagination2");
                nextAct();
                prevAct();
            }else if (now == 'conceptWrap2') {
                conceptClickFunc(".conceptWrap3",".pagination3");
                nextNonAct();
                prevAct();
            }
        }
    );
    
    $('.prev').click(
        function() {
            if (now == 'conceptWrap2') {
                conceptClickFunc(".conceptWrap1",".pagination1");
                nextAct();
                prevNonAct();
            }else if (now == 'conceptWrap3') {
                conceptClickFunc(".conceptWrap2",".pagination2");
                nextAct();
                prevAct();
            }
        }
    );
});


/*メニュー各ボタン【ホバー】==================================================================================================================*/
$(function(){
    
    function menuHoverOnFunc(menu, menuJa, menuEn, menuOrgJa, menuOrgEn) {
        var menu = menu;
        var menuJa = menuJa;
        var menuEn = menuEn;
        var menuOrgJa = menuOrgJa;
        var menuOrgEn = menuOrgEn;

        $(".menuTxt").css("transition", "0.3");
        $(".menuTxtJa").text(menuJa);
        $(".menuTxtEn").text(menuEn);
        $(".menuTxt").css("color", "#29ABE2");
        $(".menuTxt").hide().fadeIn("slow");
        $(".subTitleMenu").animate({"opacity": "0"},{"duration": 100});
        if (menu == 'menu1') {
            $(".menu2, .menu3, .menu4").animate({"opacity": "0.5"},{"duration": 100});
        } else if (menu == 'menu2') {
            $(".menu1, .menu3, .menu4").animate({"opacity": "0.5"},{"duration": 100});
        } else if (menu == 'menu3') {
            $(".menu1, .menu2, .menu4").animate({"opacity": "0.5"},{"duration": 100});
        } else if (menu == 'menu4') {
            $(".menu1, .menu2, .menu3").animate({"opacity": "0.5"},{"duration": 100});
        }
    }
    
    function menuHoverOffFunc(menuOrgJa, menuOrgEn) {
        var menuOrgJa = menuOrgJa;
        var menuOrgEn = menuOrgEn;

        $(".menuTxt").css("transition", "0.3");
        $(".menuTxtJa").text(menuOrgJa);
        $(".menuTxtEn").text(menuOrgEn);
        $(".menuTxt").css("color", "#4D4D4D");
        $(".menuTxt").hide().fadeIn("slow");
        $(".menuImg").animate({"opacity": "1"},{"duration": 100});
        $(".subTitleMenu").animate({"opacity": "1"},{"duration": 100});
    }
    
    
    
    
    var menuOrgJa = "";
    var menuOrgEn = "";
    var menuJa1 = "マカロン";
    var menuEn1 = "macaron";
    var menuJa2 = "ケーキ";
    var menuEn2 = "cake";
    var menuJa3 = "ドーナツ";
    var menuEn3 = "donuts";
    var menuJa4 = "焼き菓子";
    var menuEn4 = "baked sweets";
    
    /*menu1=======================================*/
    $('.menu1').hover(
        function() {
            menuHoverOnFunc("menu1", menuJa1, menuEn1, menuOrgJa, menuOrgEn);
        },
        function() {
            menuHoverOffFunc(menuOrgJa, menuOrgEn);
        }
    )
    
    /*menu2=======================================*/
    $('.menu2').hover(
        function() {
            menuHoverOnFunc("menu2", menuJa2, menuEn2, menuOrgJa, menuOrgEn);
        },
        function() {
            menuHoverOffFunc(menuOrgJa, menuOrgEn);
        }
    )
    
    /*menu3=======================================*/
    $('.menu3').hover(
        function() {
            menuHoverOnFunc("menu3", menuJa3, menuEn3, menuOrgJa, menuOrgEn);
        },
        function() {
            menuHoverOffFunc(menuOrgJa, menuOrgEn);
        }
    )
    
    /*menu4=======================================*/
    $('.menu4').hover(
        function() {
            menuHoverOnFunc("menu4", menuJa4, menuEn4, menuOrgJa, menuOrgEn);
        },
        function() {
            menuHoverOffFunc(menuOrgJa, menuOrgEn);
        }
    )
    
});


/*メニュー各ボタン【クリック】==================================================================================================================*/
$(function(){
    function menuClickFunc(titleJa, titleEn, menuWrap) {
        var titleJa = titleJa;
        var titleEn = titleEn;
        var menuWrap = menuWrap;
        
        $(".menuTitleTxtJa").text(titleJa);
        $(".menuTitleTxtEn").text(titleEn);
        $(".menuImg").css("animation-play-state", "paused");
        $(".menuImg").css("pointer-events", "none");
        $(".menuImg").css("z-index", "-1");
        $(".menuBack").animate({"opacity": "0.5"},{"duration": 100});
        $(".menuBack").css("z-index", "2");
        $(".menuClose").css("opacity", "1");
        $(".menuClose").css("z-index", "6");

        $(".menu1, .menu2").animate({
            "top": "10px",
            "width": "150px",
            "height": "150px"
        },{
            "duration": 500,
            "easing": "linear"
        });
        
        $(".menu3, .menu4").animate({
            "bottom": "10px",
            "width": "150px",
            "height": "150px"
        },{
            "duration": 500,
            "easing": "linear"
        });
        
        $(menuWrap).animate({
            "opacity": "1",
            "z-index": "3"
        },{
            "duration": 300,
            "easing": "linear"
        });
        
    }
    
    
    
    var titleJa1 = "マカロン";
    var titleEn1 = "macaron";
    var titleJa2 = "ケーキ";
    var titleEn2 = "cake";
    var titleJa3 = "ドーナツ";
    var titleEn3 = "donuts";
    var titleJa4 = "焼き菓子";
    var titleEn4 = "baked sweets";
    
    $('.menu1').click(
        function() {
            menuClickFunc(titleJa1, titleEn1, ".menuWrap1");
        }
    );
    
    $('.menu2').click(
        function() {
            menuClickFunc(titleJa2, titleEn2, ".menuWrap2");
        }
    );
    
    $('.menu3').click(
        function() {
            menuClickFunc(titleJa3, titleEn3, ".menuWrap3");
        }
    );
    
    $('.menu4').click(
        function() {
            menuClickFunc(titleJa4, titleEn4, ".menuWrap4");
        }
    );

});


/*閉じるボタン【クリック】==================================================================================================================*/
$(function(){

    function closeClickFunc() {
        $(".menuImg").css("animation-play-state", "running");
        $(".menuImg").css("pointer-events", "auto");
        $(".menuImg").css("z-index", "1");
        $(".menuBack").animate({"opacity": "0"},{"duration": 100});
        $(".menuClose").css("opacity", "0");
        $(".menuBack").css("z-index", "0");
        $(".menuClose").css("z-index", "0");

        $(".menuImg").animate({
            "width": "250px",
            "height": "250px",
            "opacity": "1"
        },{
            "duration": 500,
            "easing": "linear"
        });
        
        $(".menu1").animate({
            "top": "10%"
        },{
            "duration": 500,
            "easing": "linear"
        });
        
        $(".menu2").animate({
            "top": "40%"
        },{
            "duration": 500,
            "easing": "linear"
        });
        
        $(".menu3").animate({
            "bottom": "40%"
        },{
            "duration": 500,
            "easing": "linear"
        });
        
        $(".menu4").animate({
            "bottom": "10%"
        },{
            "duration": 500,
            "easing": "linear"
        });
        
        $(".menuWrap").animate({
            "opacity": "0",
            "z-index": "0"
        },{
            "duration": 500,
            "easing": "swing"
        });
        
    }    

    $('.menuClose').click(
        function() {
            closeClickFunc();
        }
    );

});
