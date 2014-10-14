var startBtn = document.getElementById("start-game__btn");

$("#start-game__btn").on('click', function() {
    alert("12345");
    showLevelPage();
});


function showLevelPage() {
    $("#main-screen").hide();
    $("#game-screen").hide();
    //$("#levels").css("opacity", "0");
    $("#levels").show();
    $("#levels").animate({
        opacity: 1,
      }, 500);
    //if (currentPage < 0) currentPage=0;
    //renderLevelPage(currentPage);
}

