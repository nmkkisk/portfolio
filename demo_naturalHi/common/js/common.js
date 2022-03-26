/*アイテム【ホバー】==================================================================================================================*/
$(function () {
    
    function itemHoverFunc(secImg) {
        var secImg = secImg;
        
        $(secImg).animate({
            "opacity":"1"
        },500);
        
    }
    
    function itemHoverOutFunc(secImg) {
        var secImg = secImg;

        $(secImg).animate({
            "opacity":"0"
        },500);

    }
    
    
    /*ウィメンズ*/
    $(".womanBagImg").hover(
        function() {
            itemHoverFunc(".womanBagTxt");
        },
        function() {
            itemHoverOutFunc(".womanBagTxt");
        }
    );
    
    $(".womanTopsImg").hover(
        function() {
            itemHoverFunc(".womanTopsTxt");
        },
        function() {
            itemHoverOutFunc(".womanTopsTxt");
        }
    );
    
    $(".womanOuterImg").hover(
        function() {
            itemHoverFunc(".womanOuterTxt");
        },
        function() {
            itemHoverOutFunc(".womanOuterTxt");
        }
    );
    
    $(".womanBottomImg").hover(
        function() {
            itemHoverFunc(".womanBottomTxt");
        },
        function() {
            itemHoverOutFunc(".womanBottomTxt");
        }
    );
    
    $(".womanSkirtImg").hover(
        function() {
            itemHoverFunc(".womanSkirtTxt");
        },
        function() {
            itemHoverOutFunc(".womanSkirtTxt");
        }
    );
    
    $(".womanShoesImg").hover(
        function() {
            itemHoverFunc(".womanShoesTxt");
        },
        function() {
            itemHoverOutFunc(".womanShoesTxt");
        }
    );
    
    $(".womanAccessoryImg").hover(
        function() {
            itemHoverFunc(".womanAccessoryTxt");
        },
        function() {
            itemHoverOutFunc(".womanAccessoryTxt");
        }
    );
    
    
    /*メンズ*/
    $(".manBagImg").hover(
        function() {
            itemHoverFunc(".manBagTxt");
        },
        function() {
            itemHoverOutFunc(".manBagTxt");
        }
    );
    
    $(".manShirtImg").hover(
        function() {
            itemHoverFunc(".manShirtTxt");
        },
        function() {
            itemHoverOutFunc(".manShirtTxt");
        }
    );
    
    $(".manSweaterImg").hover(
        function() {
            itemHoverFunc(".manSweaterTxt");
        },
        function() {
            itemHoverOutFunc(".manSweaterTxt");
        }
    );
    
    $(".manOuterImg").hover(
        function() {
            itemHoverFunc(".manOuterTxt");
        },
        function() {
            itemHoverOutFunc(".manOuterTxt");
        }
    );
    
    $(".manBottomImg").hover(
        function() {
            itemHoverFunc(".manBottomTxt");
        },
        function() {
            itemHoverOutFunc(".manBottomTxt");
        }
    );
    
    $(".manShoesImg").hover(
        function() {
            itemHoverFunc(".manShoesTxt");
        },
        function() {
            itemHoverOutFunc(".manShoesTxt");
        }
    );
    
    $(".manWalletImg").hover(
        function() {
            itemHoverFunc(".manWalletTxt");
        },
        function() {
            itemHoverOutFunc(".manWalletTxt");
        }
    );
    
    
    /*キッズ*/
    $(".kidsTrainerImg").hover(
        function() {
            itemHoverFunc(".kidsTrainerTxt");
        },
        function() {
            itemHoverOutFunc(".kidsTrainerTxt");
        }
    );
    
    $(".kidsShortpantsImg").hover(
        function() {
            itemHoverFunc(".kidsShortpantsTxt");
        },
        function() {
            itemHoverOutFunc(".kidsShortpantsTxt");
        }
    );
    
    $(".kidsShoesImg").hover(
        function() {
            itemHoverFunc(".kidsShoesTxt");
        },
        function() {
            itemHoverOutFunc(".kidsShoesTxt");
        }
    );
    
    
    /*ギフト*/
    $(".wGiftImg").hover(
        function() {
            itemHoverFunc(".wGiftTxt");
        },
        function() {
            itemHoverOutFunc(".wGiftTxt");
        }
    );

    $(".mGiftImg").hover(
        function() {
            itemHoverFunc(".mGiftTxt");
        },
        function() {
            itemHoverOutFunc(".mGiftTxt");
        }
    );

    $(".kGiftImg").hover(
        function() {
            itemHoverFunc(".kGiftTxt");
        },
        function() {
            itemHoverOutFunc(".kGiftTxt");
        }
    );

});


/*メニューボタン【クリック】==================================================================================================================*/
$(function () {
    
    var now = "close";
    
    function menuBtnClickFunc(menuBtnTrue, menuBtnFalse, now) {
        var menuBtnTrue = menuBtnTrue;
        var menuBtnFalse = menuBtnFalse;
        
        if (now == "open") {
            $(menuBtnTrue).animate({
                "right":"150px",
                "opacity":"0"
            },500);

            $(menuBtnFalse).animate({
                "right":"150px",
                "opacity":"1"
            },500);
            
            $(".menuBox").animate({
                "right":"-400px"
            },500);
            
        } else if (now == "close") {
            $(menuBtnTrue).animate({
                "right":"500px",
                "opacity":"0"
            },500);

            $(menuBtnFalse).animate({
                "right":"500px",
                "opacity":"1"
            },500);
            
            $(".menuBox").animate({
                "right":"0px"
            },500);
            
        }

        $(menuBtnTrue).css("pointer-events", "none");

        $(menuBtnFalse).css("cursor", "pointer");
        $(menuBtnFalse).css("pointer-events", "auto");
    }

    $(".menuBtnOpen").click(function(){
        now = "close";
        menuBtnClickFunc(".menuBtnOpen",".menuBtnClose", now);
    });
    
    $(".menuBtnClose").click(function(){
        now = "open";
        menuBtnClickFunc(".menuBtnClose",".menuBtnOpen", now);
    });

});


/*メニューアイテム【ホバー】==================================================================================================================*/
$(function () {
    
    function menuItemHover(menuItemChild, str){
        
        $(menuItemChild).html(str)
        
    }
    
    function menuItemHoverOut(menuItemChild){

        $(menuItemChild).html("")

    }
    
    var strWoman = "　バッグ<br>　ウェア<br>　ボトムス<br>　シューズ<br>　アクセサリー";
    var strMan = "　バッグ<br>　ウェア<br>　シューズ<br>　アクセサリー<br>　財布・小物";
    var strKids = "　トレーナー<br>　ショートパンツ<br>　シューズ";
    var strGift = "　ウィメンズギフト<br>　メンズギフト";
    
    $(".menuWoman").hover(
        function() {
            menuItemHover(".menuWomanChild", strWoman)
        },
        function() {
            menuItemHoverOut(".menuWomanChild")
        }
    );
    
    $(".menuMan").hover(
        function() {
            menuItemHover(".menuManChild", strMan)
        },
        function() {
            menuItemHoverOut(".menuManChild")
        }
    );
    
    $(".menuKids").hover(
        function() {
            menuItemHover(".menuKidsChild", strKids)
        },
        function() {
            menuItemHoverOut(".menuKidsChild")
        }
    );
    
    $(".menuGift").hover(
        function() {
            menuItemHover(".menuGiftChild", strGift)
        },
        function() {
            menuItemHoverOut(".menuGiftChild")
        }
    );

});


/*スクロールイベント==================================================================================================================*/
$(function () {
    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();
        var downFlg;

        $('.itemWrapEnd').each(function () {
            const targetPosition = $(this).offset().top - 200;
            if (scroll > targetPosition - windowHeight && downFlg != true){
                $(".backPic").animate({
                    "opacity":"1"
                },1000);
                downFlg = true;
            }

            if (scroll < targetPosition - windowHeight && downFlg == true) {
                $(".backPic").animate({
                    "opacity":"0"
                },1000);
                downFlg = false;
            }
        });
    });
});

