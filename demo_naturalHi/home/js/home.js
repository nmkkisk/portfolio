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
    var strKids = "　ウェア<br>　シューズ<br>　帽子";
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
