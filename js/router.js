window.currentPage = 0;
window.currentLevel = 0;
window.maxLevel = 35;
window.music = document.getElementById("music-sound");

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

$("#start-game__btn").on('click', function() {
    showLevelPage();
});


$("#option-back-btn").on('click touchstart', function() {
    $("#option").hide();
    showMainPage();
});

$("#menu-button_lose").on('click touchstart', function() {
    $("#game-over").hide();
    showLevelPage();
});

$("#replay-button_win").on('click touchstart', function() {
   showGamePage(currentLevel); 
});

$("#replay-button_lose").on('click touchstart', function() {
    $("#game-over").hide();
    showGamePage(currentLevel); 
});

$("#lose-menu__menu-btn").on('click touchstart', function() {
    $("#game-over").hide();
    showMainPage(); 
});

$("#next-level").on('click touchstart', function() {
   showGamePage(++currentLevel); 
});

$("#win-menu__menu-btn").on('click touchstart', function() {
    $("#win").hide();
    showLevelPage();
});

$("#option__btn").on('click touchstart', function() {
   showOptionPage();
});

$("#exit__btn").on('click', function() {
    alert("U rock!");
});

$("#memory").on('click touchstart', function() {
    $("#memory").hide();
})

$("#pause-on__btn").on('click', function() {
    window.pause = true;
    $("#pause-on__btn").hide();
    $("#pause-off__btn").show();
});

$("#pause-off__btn").on('click', function() {
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

$("#main-cat").on('click touchstart', 
    function() {
        var a = Math.floor(Math.random() * 3);
        //a = 2;
        switch (a) {
            case 0: 
                var deg = 0;
                var interval = setInterval(function() {
                        $("#main-cat").css('transform', "rotate("+deg+"deg)");
                        deg+=1.5;
                    }, 18);
                setTimeout(function(){clearInterval(interval)}, 4500);
                break;
            case 1: 
                $("#main-cat").animate({
                    opacity: Math.random()
                }, 1500 );
                break;
            case 2:
                if (Math.random() > 0.5) {
                    $("#main-cat").animate({
                        "top": "+=20px"
                    }, 1500 );
                } else {
                    $("#main-cat").animate({
                        "bottom": "-=20px"
                    }, 1500 );
                }
                break;
            
        }
        //alert("CAT CLICKED");
    }
)


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
    $("#Meow").css('bottom', '30px');
    window.sound = true;
    intel.xdk.cache.setCookie("meowSound", "on", 9999);
} else {
    window.sound = false;
    $("#Meow").css('bottom', '0px');
}

if ((intel.xdk.cache.getCookie("musicSound") == undefined)||
    (intel.xdk.cache.getCookie("musicSound") == "on")){
    $("#Music").css('bottom', '30px');
    intel.xdk.cache.setCookie("musicSound", "on", 9999);
    music.volume = 0.1;
    music.play();
} else {
    $("#Music").css('bottom', '0px');
}

function toogleSound(type) {
    if (type == "Meow") {
        if (intel.xdk.cache.getCookie("meowSound") == "on") {
            intel.xdk.cache.setCookie("meowSound", "off", 9999);
            window.sound = false;
            $("#Meow").css('bottom', '0px');
        } 
        else {
            intel.xdk.cache.setCookie("meowSound", "on", 9999);
            window.sound = true;
            $("#Meow").css('bottom', '30px');
        }
    }
    
    if (type == "Music") {
        if (intel.xdk.cache.getCookie("musicSound") == "on") {
            intel.xdk.cache.setCookie("musicSound", "off", 9999);
            music.pause();
            $("#Music").css('bottom', '0px');
        } 
        else {
            intel.xdk.cache.setCookie("musicSound", "on", 9999);
            music.play();
            $("#Music").css('bottom', '30px');
        }
    }
}

function tryLockLevel() {
    if (window.sound)
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

/*
Переключение управления
*/
if ((intel.xdk.cache.getCookie("control") == undefined)||
    (intel.xdk.cache.getCookie("control") == "rotate")) {
    $("#rotate_control").addClass("selected");
    window.control = "rotate";
    intel.xdk.cache.setCookie("control", "rotate", 9999);
} else {
    $("#touch_control").addClass("selected");
    window.control = "touch";
    intel.xdk.cache.setCookie("control", "touch", 9999);
}

$("#touch_control").on("click", function() {
    $("#touch_control").addClass("selected");
    window.control = "touch";
    intel.xdk.cache.setCookie("control", "touch", 9999);
    $("#rotate_control").removeClass("selected");
})

$("#rotate_control").on("click", function() {
    $("#rotate_control").addClass("selected");
    window.control = "rotate";
    intel.xdk.cache.setCookie("control", "rotate", 9999);
    $("#touch_control").removeClass("selected");
})