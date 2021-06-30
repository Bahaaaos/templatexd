$("document").ready(function(){
    $("nav i").click(function(){
        $("nav .list").toggle();

    });
    $(".projects button").click(function() {
        $(".projects .hidden").toggle();
        if ($(this).text()=="load more"){
            $(this).text("hide some projects");
        }else if ($(this).text()=="hide some projects"){
            $(this).text("load more");
        }        
    });
    $("footer .top").click(function(){
        $(window).scrollTop(0);
    });
    $(window).resize(function(){
        var d=$("nav i").css("display");
        console.log(d);
        if (d=="none"){
            $("nav .list").css({"display":"flex"});            
        }else if (d=="block"){
            $("nav .list").css({"display":"none"});
        }

    });




});
