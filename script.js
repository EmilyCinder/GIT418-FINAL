"use strict";
$(document).ready(function() {
//tabs for information
    $("#information div").hide().first().show();
    $("#information h3").click(function() {
        $("#information div").hide();
        $(".tab-image").hide();
        $(this).next().show();
        $(`.tab-image[data-image="${$(this).data("tab")}"]`).show();
        });
//slideshow
    const $slides = $("#slideshow img");
    let currentIndex = 0;

    $slides.eq(0).addClass("active");

    function cycleSlides() {
 
        $slides.eq(currentIndex).removeClass("active");
    
// next one
    currentIndex = (currentIndex + 1) % $slides.length;
    
    // fadee
    $slides.eq(currentIndex).addClass("active");
    }

// changes in 5sec
setInterval(cycleSlides, 5000);

//web storage for favorite tree
        const savedTree = localStorage.getItem("favoriteTree");
        if (savedTree) $("#saved-tree").text(`Favorite: ${savedTree}`);

        $("#save-tree").click(function() {
            const tree = $("#fav-tree").val().trim();
            if (tree) {
                localStorage.setItem("favoriteTree", tree);
                $("#saved-tree").text(`Favorite: ${tree}`);
                $("#fav-tree").val("");
            }
            });
    });