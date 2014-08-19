$("#main-cat").click(
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
                        "left": "+=20px"
                    }, 1500 );
                } else {
                    $("#main-cat").animate({
                        "left": "-=20px"
                    }, 1500 );
                }
                break;
            
        }
    }
)