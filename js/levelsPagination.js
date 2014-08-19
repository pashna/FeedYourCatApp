function renderLevelPage(page) {
    if (page > ~~(maxLevel/6)) page = ~~(maxLevel/6);
    document.getElementById("levelList").innerHTML = "";
    for (var i=page*6+1; (i<page*6+7)&&(i<=maxLevel); i++) {
        if (intel.xdk.cache.getCookie("l" + i) != undefined) {
            var star = intel.xdk.cache.getCookie("l" + i);
            renderCellLevel(i, star);
        }
        else {
            renderCellLevel(i, "0");
        }
        //renderCellLevel(i, "0");
    }
    /**/
    /*
    for (var i=page*6+1; i<=page*6+6; i++) { // DEBUG
            renderCellLevel(i, i%4);
    }
    // */
    document.getElementById("levelList").innerHTML += '<div class="level-routing__toolbar"><img src="img/next.png" class="levels__next" id="next-page__btn"/><div class="replay-btn_x2" id="levels-main-page__btn">Main Menu</div><img src="img/prev.png" class="levels__prev" id="prev-page__btn"/></div>';
    
    $("#next-page__btn").click(function() {
        currentPage++;
        $("#levels").animate({
            opacity: 0,
        }, 200 );
        setTimeout(showLevelPage, 220);
    });
    
    $("#prev-page__btn").click(function() {
        if (currentPage != 0) 
            currentPage--;
        $("#levels").animate({
            opacity: 0,
        }, 200 );
        setTimeout(showLevelPage, 220);
    });
    
    $("#levels-main-page__btn").click(function() {
        showMainPage();
    });
}


    
    /*intel.xdk.cache.setCookie("l1", "0", 9999);
    intel.xdk.cache.setCookie("l2", "1", 9999);
    intel.xdk.cache.setCookie("l3", "2", 9999);
    intel.xdk.cache.setCookie("l4", "1", 9999);
    intel.xdk.cache.setCookie("l5", "3", 9999);
    intel.xdk.cache.setCookie("l6", "2", 9999);*/


function renderCellLevel(level, stars) {
    var str; 
    if (parseInt(intel.xdk.cache.getCookie('openedLevel')) + 3 <= level )
        str = '<div class="levels-cell lock" onclick="tryLockLevel()">';    
    else 
        str = '<div class="levels-cell" onclick="showGamePage(' + level + ')">';
    //var str = '<div class="levels-cell" id="lev-'+level+'">';
    str += '<div class="levels__text" id="level-'+level+'">';
    str += level;
    str += "</div>";
    //alert("start in renred = " + stars + "  lev = "+level);
    //alert("stars = "+stars);
    switch (stars) {
        case "0": 
            str+='<div class="empty_row"></div>';
            break;
        case "1": 
            str+='<span><img src="img/star.png" class="levels__star"/></span>';
            break;
        case "2": 
            str+='<span><img src="img/star.png" class="levels__star"/></span><span><img src="img/star.png" class="levels__star"/></span>';
            break;
        case "3": 
            str+='<span><img src="img/star.png" class="levels__star"/></span><span><img src="img/star.png" class="levels__star"/></span><span><img src="img/star.png" class="levels__star"/></span>';
            break;
    }
    str+="</div>";
    document.getElementById("levelList").innerHTML += str;
}

//for (var c = 1; c<7; c++)
//    intel.xdk.cache.setCookie("level-"+i, i%4, 9999);

//renderLevelPage(0)