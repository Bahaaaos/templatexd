$("document").ready(function(){
    $("nav i").click(function(){ //to toggle the list on small screen when click on icon
        $("nav .list").toggleClass("sm-hidden");

    });
    $(".projects button").click(function() { //function to to show or hide some projects
        $(".projects .hidden").toggle();
        if ($(this).text()=="load more"){
            $(this).text("hide some projects");
        }else if ($(this).text()=="hide some projects"){
            $(this).text("load more");
        }        
    });
    $("footer .top").click(function(){ //to go to the top of web page
        $(window).scrollTop(0);
    });
   $(".list a").click(function(){ //to hide the list in small screen when click on list item
       let w=window.innerWidth;
       if (w<991){
           $("nav .list").addClass("sm-hidden")
       }
   })




});
