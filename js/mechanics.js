function getLevel(level) {
    var game_level = {};
    game_level.X = [100, 20];
    game_level.Y = [0, -20];
    game_level.SPEED = [1, 1.4];	
    game_level.number = 4;
    switch (level) {
        case 1:
            game_level.X = [250];
            game_level.Y = [0];
            game_level.SPEED = [1];	
            game_level.number = 1;
            game_level.platform = false;
            break;
        case 2: 
            game_level.X = [300, 20];
            game_level.Y = [0, -80];
            game_level.SPEED = [1, 1];	
            game_level.number = 2;
            game_level.platform = false;
            break;
        case 3: 
            game_level.X = [100, 350];
            game_level.Y = [0, 0];
            game_level.SPEED = [1.4, 1.4];	
            game_level.number = 3;
            game_level.platform = false;
            break;
        case 4:
            game_level.X = [20, 100, 400];
            game_level.Y = [0, -20, 20];
            game_level.SPEED = [1, 1.05, 0.5];	
            game_level.number = 4;
            game_level.platform = false;
            break;
        case 5:
            game_level.X = [30, 200, 450, 300];
            game_level.Y = [-80, -550, -300, -700];
            game_level.SPEED = [1.9, 1.9, 1.9, 2.1];	
            game_level.number = 5;
            game_level.platform = false;
            break;
        case 6:
            game_level.X = [20, 450, 200, 250];
            game_level.Y = [0, -10, -300, -350];
            game_level.SPEED = [1.18, 1.18, 2, 2];	
            game_level.number = 6;
            game_level.platform = false;
            break;
        case 7:
            game_level.X = [20, 100, 200, 450];
            game_level.Y = [0, -20, -30, 0];
            game_level.SPEED = [1, 1, 3, 0.4];	
            game_level.number = 7;
            game_level.platform = false;
            break;
        case 8:
            game_level.X = [20, 80, 400, 450, 200];
            game_level.Y = [-20, -20, 0, 0, -1200];
            game_level.SPEED = [1.3, 1.3, 2, 2, 4];	
            game_level.number = 8;
            game_level.platform = false;
            break;
        case 9:
            game_level.X = [50, 450, 100, 400, 150, 350];
            game_level.Y = [0, -350, -700, -1050, -1400, -1750];
            game_level.SPEED = [2.5, 2.5, 2.5, 2.5, 2.5, 2.5];	
            game_level.number = 9;
            game_level.platform = false;
            break;
        case 10:
            game_level.X = [20, 100, 200, 300, 380, 450];
            game_level.Y = [0, -20, -40, -60, -80, -100];
            game_level.SPEED = [0.8, 0.8, 0.8, 0.8, 0.8, 0.8];	
            game_level.number = 10;
            game_level.platform = false;
            break;
        case 11:
            var a = ((Math.random()*460) + 20)%460;
            game_level.X = [a, (a+50)%460, (a+100)%460, (a+150)%460, (a+200)%460];
            game_level.Y = [-20, -20, -50, -40, -60];
            game_level.SPEED = [3.5, 1.4, 1, 1.4, 1];	
            game_level.number = 11;
            game_level.platform = 0.2;
            break;
        case 12:
            game_level.X = [20, 100, 150, 340, 390, 440];
            game_level.Y = [100, 120, 150, 150, 120, 100];
            game_level.SPEED = [0.4, 0.4, 0.4, 0.4, 0.4, 0.4];	
            var a = Math.random();
            if (a > 0.6) {
                game_level.SPEED[parseInt((a*100)%6)] = 3;
            }
            game_level.number = 12;
            game_level.platform = 0.1;
            break;
        case 13:
            game_level.X = [20, 70, 130, 180, 230];
            game_level.Y = [0, -20, -40, -60, -80];
            game_level.SPEED = [1.2, 1.35, 1.5, 1.65, 1.75];	
            game_level.number = 13;
            game_level.platform = false;
            game_level.startAngle = 20;
            game_level.startSpeed = 4;
            break;
        case 14:
            game_level.X = [130, 450, 70, 400, 20, 350, 130, 450, 50, 400, 270];
            game_level.Y = [0, -200, -400, -600, -800, -1000, -1200, -1400, -1600, -1800, -2000 ];
            game_level.SPEED = [2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3];	
            game_level.number = 14;
            game_level.platform = false;
            break;
        case 15:
            game_level.X = [240, 330, 240, 330, 240, 180, 381];
            game_level.Y = [0, -200, -400, -600, -800, -1000, -600];
            game_level.SPEED = [2.0, 2.2, 2.0, 2.2, 2.0, 1.3, 1.3];	
            game_level.number = 15;
            game_level.platform = 0.2;
            game_level.area = true;
            game_level.FC = 0.019;
            game_level.FCB = 0.2;
            break;
        case 16:
            game_level.X = [20, 100, 160, 360, 420, 470];
            game_level.Y = [-30, -30, -30, -30, -300, -300];
            game_level.SPEED = [1, 1.4, 1, 1.4, 2.7, 2];	
            game_level.number = 16;
            game_level.platform = false;
            game_level.background = 0.07;
            break;
        case 17:
            game_level.X = [300];
            game_level.Y = [0];
            game_level.SPEED = [0.6];	
            game_level.number = 17;
            game_level.platform = 0.1;
            game_level.area = true;
            game_level.FC = 0.09;
            game_level.FCB = 0.01;
            game_level.HF = 0.2
            game_level.startAngle = 5;
            game_level.startSpeed = 0.5;
            break;
        case 18:
            game_level.X = [20, 100, 180, 240, 300, 380];
            game_level.Y = [0, -100, 0, -100, 0, -100];
            game_level.SPEED = [1.2, 1.2, 1.2, 1.2, 1.2, 1.2];	
            game_level.number = 18;
            game_level.platform = false;
            game_level.up = 60;
            break;
        case 19:
            game_level.X = [20, 70, 120, 170, 220, 270, 320, 370, 420, 465];
            game_level.Y = [0, 0, 0, 0, 0, -100, -100, -100, -100, -100];
            game_level.SPEED = [1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3];	
            game_level.number = 19;
            game_level.startAngle = 10;
            game_level.startSpeed = 10;
            break;
        case 20:
            game_level.X = [20, 45, 70, 170, 220, 270, 320, 370, 420, 470];
            game_level.Y = [0, -200, 0, -200, 0, -200, 0, -200, 0, -200];
            game_level.SPEED = [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2];	
            game_level.number = 20;
            game_level.platform = false;
            game_level.up = 60;
            game_level.area = true;
            break;
        case 21:
            game_level.X = [20, 45, 70, 170, 220, 270, 320, 370, 420, 470, 20, 45, 70, 170, 220];
            game_level.Y = [0, -60, -120, -180, -240, -300, -360, -420, -480, -540, -600, -660, -720, -780, -840];
            game_level.SPEED = [1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3];	
            game_level.number = 21;
            game_level.platform = false;
            game_level.area = true;
            break;
        case 22:
            game_level.X = [30, 300, 450];
            game_level.Y = [200, 0, 170];
            game_level.SPEED = [0.2, 0.4, 0.24];	
            game_level.number = 22;
            game_level.platform = false;
            game_level.up = 150;
            game_level.startAngle = 1;
            game_level.startSpeed = 1;
            break;
        case 23:
            game_level.X = [20, 450, 20, 450, 20, 450, 20, 450];
            game_level.Y = [0, -400, -800, -1200, -1600, -2000, -2400, -2800];
            game_level.SPEED = [3, 3, 3, 3, 3, 3, 3, 3];	
            game_level.number = 23;
            game_level.platform = false;
            game_level.background = 0.03;
            break;
        case 24:
            game_level.X = [20, 70, 120, 170, 220, 270, 320, 370, 420, 465,
                           20, 70, 120, 170, 220, 270, 320, 370, 420, 465];
            game_level.Y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                           -260, -250, -240, -230, -220, -210, -200, -190, -180, -170];
            game_level.SPEED = [0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 
                               1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4];	
            game_level.number = 24;
            game_level.platform = false;
            game_level.up = 25;
            break;
        case 25:
            game_level.X = [250, 300, 200, 350, 150, 400, 100, 450];
            game_level.Y = [0, 0, -100, -100, -200, -200, -300, -300];
            game_level.SPEED = [1.5, 1.5, 1.4, 1.4, 1.3, 1.3, 1.1, 1.1];	
            game_level.number = 25;
            game_level.platform = false;
            game_level.cUp = 0.2;
            game_level.FC = 0.014;
            game_level.FCB = 0.015;
            break;
        //case 26:
          // Сделать платформу "Елочкой" и запретить движение в одном направленииз
          //
            
    }
    return game_level;
}

function play(level) {
var iphone_width = 600;
var relativeWidth = $(window).width()/iphone_width;
var game_level = getLevel(level);
var leftBoard = -110;
var rightBoard = 600;
var downBoard = 340;
for (var it=0; it<game_level.X.length; it++) {
    game_level.X[it]*=relativeWidth;
}
    
var KEY_LEFT = 37;
var KEY_RIGHT = 39;
var ROTATE_SPEED = 1;
var currentAngle = 0;
    if (game_level.startAngle) currentAngle = game_level.startAngle;  //
var score_x = 415;
var score_y = 50;
var deltaSausage = 400;
    
$("#replay__button").click(function() {
    for (i=0; i<game_level.X.length; i++) {
        game_level.Y[i] = 7000;
        game_level.SPEED[i] = 0;
        pause = false;
    }
})

$("#pause-btn").show();
var deltaX = 50; // РАССТОЯНИЕ ДО СОСИСКИ (ВЫИГРЫШНОЕ)
var deltaY = 28;
var dX = 65;
var dY = 56;
var START_LEFT = document.getElementById("game-screen").offsetWidth/2 - $("#cat_left").width()/2;
var START_TOP = 225;
var downPosSausage = 315;
var clearX = 50;
var clearY = 30;
if ((window.screen.availWidth<600)&&(window.screen.availWidth>481)) { // IPHONE 5
    $("#platform-img").css("-webkit-transform-origin", "47% 50% 0");
    score_x = 510;
    deltaX = 45;
    deltaY = 30;
    dX = 65;
    dY = 50;
}

if (window.screen.availWidth > 601) { // IPAD
    START_TOP = 610;
    downPosSausage = 775;
    score_x = 930;
    score_y = 80;
    clearX = 70;
    clearY = 100;
    deltaSausage = 1900;
    deltaX = 90;
    dX = 100;
    deltaY = 9;
    dY = 100;
    for (var iter=0; iter<game_level.Y.length; iter++) 
        game_level.SPEED[iter] *= 2.4;
    downBoard = 770;
    leftBoard = -200;
    rightBoard = 1070;
    
}
    
if (game_level.up) {
    START_TOP -= game_level.up;
    $(".game-screen__platform").css("bottom", "+="+game_level.up);
}
    
var cUp = 0; // continue Up
var DELTA_X = 9;
var HORISONTAL_FRICTION = game_level.HF||0.025; //0.025
//if (game_level.HF) HORISONTAL_FRICTION = game_level.HF; // LEVEL
var FRICTION_COEFFICIENT_BACK = game_level.FCB||0.022;
//if (game_level.FCB) FRICTION_COEFFICIENT_BACK = game_level.FCB; // LEVEL    
var FRICTION_COEFFICIENT = game_level.FC||0.007;
//if (game_level.FC) FRICTION_COEFFICIENT = game_level.FC; // LEVEL    
var currentX = 0;
var side = "";
var speed = 0; 
if (game_level.startSpeed) speed = game_level.startSpeed; // LEVEL
var platform = $("#platform-img");
var cat_left = $("#cat_left");
var cat_right = $("#cat_right");
var cat_hungry = $("#cat_hungry");
var cat_perfect = $("#cat_perfect");
cat_perfect.css("display", "none");
cat_hungry.css("display", "none");
var sausage = document.getElementById('sausage');
var canvas = document.getElementById('draw');
var context = canvas.getContext('2d');
context.font= '40px Baskerville Old Face';
if (window.screen.availWidth > 601) { // IPAD
    context.font= '70px Baskerville Old Face';
    sausage = document.getElementById('sausageIpad');
}
context.fillStyle='#FFFFFF';
context.clearRect(0,0, 800, 800); 
var song = $('#score-sound');
var scoreSound = $('#pickUp-sound');
var score = 0;//start_score.score;
var count_of_hide_sausage = 0;
context.fillText(score, score_x, score_y); 
var star1 = $("#1_star");
var star2 = $("#2_star");
var star3 = $("#3_star");
star1.css('display','inline-block');
star2.css('display','inline-block');
star3.css('display','inline-block');
var curXonPlatform = 0;
var curYonPlatform = 0;
$('.win-menu').css('display', 'none');
window.pause = false;
    
function handleOrientation(event) {
    currentAngle = Math.floor(event.beta);
    if (currentAngle > 60) currentAngle = 60;
    if (currentAngle < -60) currentAngle = -60;
}

window.addEventListener('deviceorientation', handleOrientation);

function moveLine() { // Переместить Сосиски
    for (var i = 0; i<game_level.Y.length; i++) {
        if ((game_level.Y[i] < 6999)&&(game_level.Y[i] < downPosSausage)) {
            context.clearRect(game_level.X[i],game_level.Y[i], clearX, clearY);
            context.drawImage(sausage,game_level.X[i],game_level.Y[i] - deltaSausage);
            game_level.Y[i] += game_level.SPEED[i];
        }
        else {
            if ((game_level.Y[i] >= downPosSausage)&&(game_level.Y[i] < 6999)) {
                context.clearRect(game_level.X[i], 0, 50, 2000);
                game_level.Y[i] = 7000;
                game_level.SPEED[i] = 0;
            }
        }
    }
}
/*    
function moveLine() { // Переместить Сосиски
    for (var i = 0; i<game_level.Y.length; i++) {
        if ((game_level.Y[i] < 6999)&&(game_level.Y[i] < downPosSausage)) {
            context.clearRect(game_level.X[i],game_level.Y[i], 50,30);
            context.drawImage(sausage,game_level.X[i],game_level.Y[i]-400); !!!!!!!!!!!!!!!!!!!!
            game_level.Y[i] += game_level.SPEED[i];
        }
        else {
            if ((game_level.Y[i] >= downPosSausage)&&(game_level.Y[i] < 6999)) {
                context.clearRect(game_level.X[i], 0, 50, 1000);
                game_level.Y[i] = 7000;
                game_level.SPEED[i] = 0;
            }
        }
    }
}*/

function isLevelEnd() { // Проверка на завершения уровня
    count_of_hide_sausage = 0;
    for (var i = 0; i<game_level.Y.length; i++) {
        console.log(game_level.Y[i]);
        if (game_level.Y[i]>5000)
            count_of_hide_sausage++;
    }
    return ((count_of_hide_sausage == game_level.Y.length)||(isNotInArea()));
}

function doWinner(cstars) { // Действия при победе
    setTimeout("clearInterval("+timerId+")", 10);
    context.clearRect(0,0, 1000, 800); 
    //start_score.score = score;
    if ((intel.xdk.cache.getCookie("l"+game_level.number) < cstars)||
       (intel.xdk.cache.getCookie("l"+game_level.number)==undefined))
        intel.xdk.cache.setCookie("l"+game_level.number, cstars, 9999);
    if (intel.xdk.cache.getCookie('openedLevel') < game_level.number)
        intel.xdk.cache.setCookie('openedLevel', game_level.number, 9999);
    $('.win-menu').css('display', 'block');
//					context.fillText("Score: "+ score, 420, score_y); 
}

function doLoser() { // Действия при поражении
    setTimeout("clearInterval("+timerId+")", 10);
    context.clearRect(0,0, 1000, 800); 
    //start_score.score = score;
    $("#score-place").html(score);
    $("#game-over").show();
//					context.fillText("Score: "+ score, 420, score_y); 
}

function setPlatformResistance(level) { // Установка сопротивления платформы
    var RESISTANCE_FORSE = ROTATE_SPEED * level;
    if (currentAngle > 0) {
        currentAngle += RESISTANCE_FORSE;
    }
    else {
        if (currentAngle <= 0) {
            currentAngle -= RESISTANCE_FORSE;
        }
        else {
        }
    }
}

function countLeft(radius, angle) { // Вычисление значения left кота
    return radius*Math.cos(angle*Math.PI/180);
}

function countTop(radius, angle) { // Вычисление значения top кота
    return radius*Math.sin(angle*Math.PI/180);
}

if (platform) { // Пересчет текущего угла ???
    $(window).keydown(function(event){
        switch (event.keyCode) {
                case KEY_LEFT: {
                    currentAngle -= ROTATE_SPEED;
                    break;
                } 
                case KEY_RIGHT: {
                    currentAngle+= ROTATE_SPEED;
                    break;
                }
        }
    })
} 

function isNotInArea() { // UPDATED Проверка на выход за границы
    if (game_level.area) {
        if (((curXonPlatform>rightBoard)||
            (curXonPlatform<leftBoard)||
            (curYonPlatform>downBoard))) { 
            if (window.sound)
                song.get(0).play();
            return true;
        }
    }
    return false;
} 
    cat_right.css("left", START_LEFT + countLeft(currentX, currentAngle) +'px').css("top", 
    START_TOP + countTop(currentX, currentAngle) +'px'); 
cat_left.css("left", START_LEFT + countLeft(currentX, currentAngle) +'px').css("top", 
    START_TOP + countTop(currentX, currentAngle) +'px'); 

function setCatMovement() { // Основная функция
//				console.log("server="+window.server);
    if (!window.pause) {
        if (game_level.cUp) {
            cUp += game_level.cUp;
            START_TOP -= game_level.cUp;
            $(".game-screen__platform").css("bottom", "+="+game_level.cUp);
        }
        curXonPlatform = START_LEFT + countLeft(currentX, currentAngle);
        curYonPlatform = START_TOP + countTop(currentX, currentAngle); 
        if (game_level.background) {
            if (Math.random() < game_level.background) {
                //alert("123");
                intel.xdk.notification.vibrate();
                $("body").css('background', 'rgba(255, 255, 255, 0.8)');
                setTimeout(function() {
                    $("body").css('background', 'rgba(0, 0, 0, 0.8)')
                }, 500);
            }
        }
        //console.log("DistanceY = "+ (game_level.Y[0]-curYonPlatform) + "  DistanceX=" + (game_level.X[0]-curXonPlatform));
//console.log(" Y = "+ (curYonPlatform) + "  DistanceX=" + (curXonPlatform));
        for (var i = 0; i<game_level.Y.length; i++) {
            if (((game_level.X[i]-curXonPlatform) < deltaX )&&
                ((game_level.X[i]-curXonPlatform) > deltaX-dX )&&
                ((game_level.Y[i]-curYonPlatform) > deltaY-dY )&&
               ((game_level.Y[i] - curYonPlatform) < deltaY)) {
                    if (window.sound) {
                        scoreSound.get(0).play();
                    }
                    game_level.Y[i]=7000;
                    game_level.SPEED[i]=0;
                    score++;
                    if (score == 10) 
                        score_x -= 20;
                    this.score = score;
                    context.clearRect(0,0, 1500, 1500); 
                    context.font = 'bold 30px';
                    context.fillText(score, score_x, score_y); 
                }
        }
        if (game_level.platform) {
            setPlatformResistance(game_level.platform);
        }
        moveLine();
        if (isLevelEnd()) { // Действия при завершении уровня
            if (game_level.up) {
                START_TOP += game_level.up;
                $(".game-screen__platform").css("bottom", "-="+game_level.up);
            }
            
            if (game_level.cUp) {
                START_TOP += cUp;
                $(".game-screen__platform").css("bottom", "-="+cUp);
            }
            
            console.log("LEVEL END");
            $("#pause-btn").hide();
            var winner_percent=score/game_level.Y.length;
            if ((winner_percent>0.65)&&(winner_percent<0.8)) {
                star1.css('display','none');
                star2.css('display','none');
                doWinner(1);
            }
            if ((winner_percent>=0.8)&&(winner_percent<0.95)) {
                star1.css('display','none');
                doWinner(2);
            }
            if ((winner_percent>=0.95)) {
                doWinner(3);
            }
            if (winner_percent<=0.65) { 
                doLoser();
            }
        }
        $('#game-screen__back').click(function() {
            setTimeout("clearInterval("+timerId+")", 10);
        });
        platform.css('transform','rotate('+currentAngle+'deg)'); // Синхронизация поворота кота и платформы
        cat_left.css('transform','rotate('+currentAngle+'deg)'); // Синхронизация поворота кота и платформы
        if (currentAngle > 0) {
            if (speed > 0) speed+=currentAngle*FRICTION_COEFFICIENT;
                else speed+=currentAngle*FRICTION_COEFFICIENT_BACK;
            currentX += speed;
            side = 'right';
            cat_right.css("display", "none");
            cat_left.css("display", "block");
            cat_left.css("left", START_LEFT + countLeft(currentX, currentAngle) +'px').css("top", 
                START_TOP + countTop(currentX, currentAngle) +'px');
        }
        else {
            if (currentAngle < 0) {
                if (speed < 0) speed += currentAngle*FRICTION_COEFFICIENT;
                    else speed += currentAngle*FRICTION_COEFFICIENT_BACK;
                currentX += speed;
                side = 'left';
                cat_left.css("display", "none");
                cat_right.css("display", "block");
                cat_right.css("left", START_LEFT + countLeft(currentX, currentAngle) +'px').css("top", 
                START_TOP + countTop(currentX, currentAngle) +'px');
            }
            else {
                switch (side) { // При нуле если едет вправо и если едет влево (тормоз)
                    case 'right': {
                        if (speed > 0) speed -= HORISONTAL_FRICTION;
                        if ((speed < 0)&&(speed > (-HORISONTAL_FRICTION-0.01) )) speed = 0;
                        if (speed < (-HORISONTAL_FRICTION-0.01)) speed += HORISONTAL_FRICTION;
                        currentX += speed;
                        cat_left.css("left", START_LEFT + countLeft(currentX, currentAngle) +'px').css("top", 
                            START_TOP + countTop(currentX, currentAngle) +'px');
                        break;

                    }
                    case 'left': {
                        if (speed < 0) speed += HORISONTAL_FRICTION;
                        if ((speed > 0)&&( speed < (HORISONTAL_FRICTION+0.01) ))
                            speed=0;
                        if (speed > (HORISONTAL_FRICTION+0.01)) speed -= HORISONTAL_FRICTION;
                        currentX += speed;
                        cat_right.css("left", START_LEFT + countLeft(currentX, currentAngle) +'px').css("top", START_TOP + countTop(currentX, currentAngle) +'px');
                        break;
                    }
                }

            }
        }
    }
    else {
        console.log(window.pause);
        return 0;	
    }
} 
var timerId = setInterval(setCatMovement, 25);
}