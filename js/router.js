var currentPage = 0;
var currentLevel = 0;
var maxLevel = 35;
intel.xdk.device.setRotateOrientation("landscape");

//intel.xdk.device.hideSplashScreen();
if ($(window).width() < 1000) // iphone
    $("#pause-btn").after('<canvas id="draw" height="275" width="600">=(</canvas>');
    else 
    $("#pause-btn").after('<canvas id="draw" height="1000" width="1000">=(</canvas>');
$('#bla').after('<div id="space"></div>');
function showGamePage(level) {
    currentLevel = level;
    $("#levels").animate({
        opacity: 0,
      }, 200 );
    setTimeout(function() {
    $("#levels").hide();
    }, 220);
    $("#game-screen").css("opacity", "$0");
    $("#game-screen").show();
    $("#game-screen").animate({
        opacity: 1,
      }, 300);
    play(currentLevel);
}

function showLevelPage() {
    $("#main-screen").hide();
    $("#game-screen").hide();
    $("#levels").css("opacity", "0");
    $("#levels").show();
    $("#levels").animate({
        opacity: 1,
      }, 500);
    if (currentPage < 0) currentPage=0;
    renderLevelPage(currentPage);
}

function showMainPage() {
    $("#game-screen").hide();
    $("#levels").hide();
    $("#main-screen").css("opacity", "0");
    $("#main-screen").show();
    $("#main-screen").animate({
        opacity: 1,
      }, 400 );
}

function showOptionPage() {
    $("#main-screen").hide();
    $("#option").css("opacity", "0");
    $("#option").show();
    $("#option").animate({
        opacity: 1,
      }, 400 );
}

$("#start-game__btn").click(function() {
    showLevelPage();
});

$("#option-back-btn").click(function() {
    $("#option").hide();
    showMainPage();
});

$("#menu-button_lose").click(function() {
    $("#game-over").hide();
    showLevelPage();
});

$("#replay-button_win").click(function() {
   showGamePage(currentLevel); 
});

$("#replay-button_lose").click(function() {
    $("#game-over").hide();
    showGamePage(currentLevel); 
});

$("#lose-menu__menu-btn").click(function() {
    $("#game-over").hide();
    showMainPage(); 
});

$("#next-level").click(function() {
   showGamePage(++currentLevel); 
});

$("#win-menu__menu-btn").click(function() {
    $("#win").hide();
    showLevelPage();
});

$("#option__btn").click(function() {
   showOptionPage();
});

$("#exit__btn").click(function() {
    alert("ЗАКРЫЛОСЬ =(");
});

$("#memory").click(function() {
    $("#memory").hide();
})

$("#pause-on__btn").click(function() {
    window.pause = true;
    $("#pause-on__btn").hide();
    $("#pause-off__btn").show();
});

$("#pause-off__btn").click(function() {
    window.pause = false;
    $("#pause-off__btn").hide();
    $("#pause-on__btn").show();
});
                                                              
$("#game-screen").hide();
$("#game-over").hide();
$("#levels").hide();
$("#option").hide();

function onDeviceReady(){
    intel.xdk.device.setRotateOrientation("landscape");
    intel.xdk.device.setAutoRotate(false);
}


/* 1111111111 1111111111 1111111111 1111111111 1111111111 1111111111 ОТЛАДКА
intel.xdk.cache.removeCookie("openedLevel");
intel.xdk.cache.clearAllCookies();
*/

// Определение максимального открытого уровня!
if (intel.xdk.cache.getCookie('openedLevel') == undefined){
    intel.xdk.cache.setCookie('openedLevel', '0', 9999);
}


document.addEventListener("intel.xdk.device.ready", onDeviceReady, false);

var touchStart = 0;
document.getElementById("levels").addEventListener("touchstart", function(e) {
        touchStart = e.changedTouches[0].pageX;
});

document.getElementById("levels").addEventListener("touchend", function(e) {
    console.log("distance = " + (touchStart - e.changedTouches[0].pageX));
    if (touchStart - e.changedTouches[0].pageX > 120) { 
             ++currentPage;
             showLevelPage();
        }
    if (touchStart - e.changedTouches[0].pageX < -120) {
            --currentPage;
            showLevelPage();
        }
});



// РАБОТА СО ЗВУКОМ
//======================================
if ((intel.xdk.cache.getCookie("meowSound") == undefined)||
    (intel.xdk.cache.getCookie("meowSound") == "on")) {
    $("#Meow").attr("checked", "checked");
    intel.xdk.cache.setCookie("meowSound", "on", 9999);
} else {
        // OFF MEOW
}

if ((intel.xdk.cache.getCookie("musicSound") == undefined)||
    (intel.xdk.cache.getCookie("musicSound") == "on")){
    $("#Music").attr("checked", "checked");
    intel.xdk.cache.setCookie("musicSound", "on", 9999);
} else {
        // OFF SOUND
}

function toogleSound(type) {
    if (type == "Meow") {
        if (intel.xdk.cache.getCookie("meowSound") == "on") {
            intel.xdk.cache.setCookie("meowSound", "off", 9999);
        } 
        else {
            intel.xdk.cache.setCookie("meowSound", "on", 9999);
        }
    }
    
    if (type == "Music") {
        if (intel.xdk.cache.getCookie("musicSound") == "on") {
            intel.xdk.cache.setCookie("musicSound", "off", 9999);
        } 
        else {
            intel.xdk.cache.setCookie("musicSound", "on", 9999);
        }
    }
}

function tryLockLevel() {
    $("#fail-sound").get(0).play();
}

//intel.xdk.cache.clearAllCookies();
//======================================
/*
window.addEventListener('deviceorientation', handle);
currentOrient = "portrait";
function handle(e) {
    var orientation = getOrientation();
    if (orientation != currentOrient) {
        currentOrient = orientation;
        alert(currentOrient);
    }
}


window.addEventListener('*/
//intel.xdk.device.setRotateOrientation("landscape");//, 200);