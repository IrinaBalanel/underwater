$(window).on("load", function (){
    $("#up").hide();
    $(".all-bubbles").hide();
    $(".fish").hide();
    
    var mask = document.getElementById("mask");
    var water = document.getElementById("water");
    var btnUp = document.getElementById("up");
    var btnDown = document.getElementById("dive");
    
    $("#dive").on("click", function (){
        mask.classList.remove("floating");
        mask.classList.add("zoom-animation");
        water.classList.add("water-moving");
        water.classList.remove("water-moving-down");

        mask.addEventListener ("animationstart", function() {
            
            $("#dive").hide();
            $("#up").show();
            $(".all-bubbles").show();
            btnUp.classList.add("button-overlay");
            
        });

        mask.addEventListener ("animationend", function() {
            $(".all-bubbles").hide();
            $(".fish").show();
        });

    });


    $("#up").on("click", function (){
        mask.classList.add("floating");
        mask.classList.remove("zoom-animation");
        mask.classList.add("zoom-out-animation");
        water.classList.remove("water-moving");
        water.classList.add("water-moving-down");
        

        mask.addEventListener ("animationstart", function() {
            $(".all-bubbles").hide();
            $("#up").hide();
            btnUp.classList.remove("button-overlay");
            $("#dive").show();
            btnDown.classList.add("button-reveal");

            $(".fish").hide();


    
        });

        mask.addEventListener ("animationend", function() {
            mask.classList.remove("zoom-out-animation");
            water.classList.remove("water-moving-down");
            btnDown.classList.remove("button-reveal"); // even though I removed this class which is responsible for the button animation, it stays in html (check in console), so the animation goes twice

        });
    

    });

    // I tried this logic to remove the class after mask animation ends, but it didn't work
    // if (!btnDown.classList.contains("button-reveal")) {
    //     btnDown.classList.remove("button-reveal");
    // }

    // To show small menu for the smaller screens like tablet or phone
    var menu = document.getElementById("menu");
    var toggle = document.getElementById("header-navigation");
    menu.addEventListener("click", function(){
        toggle.classList.add("show-small");
        event.stopPropagation();
    });

    // to reset the menu
    var resetClick = document.body;
    resetClick.addEventListener("click", function(){
        toggle.classList.remove("show-small");
    });

});
