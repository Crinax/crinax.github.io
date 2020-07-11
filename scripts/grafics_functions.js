const shows = (elem,dir) => {
    var i = 0;
    var timerId = setInterval(() => {
        $(elem).css({
            "background": `-moz-linear-gradient(${dir}, ${Graphics.unvisibility} ${i}%, ${Graphics.secondColor} ${i}%)`
        })
        $(elem).css({
            "background": `-o-linear-gradient(${dir}, ${Graphics.unvisibility} ${i}%, ${Graphics.secondColor} ${i}%)`
        })
        $(elem).css({
            "background": `-webkit-linear-gradient(${dir}, ${Graphics.unvisibility} ${i}%, ${Graphics.secondColor} ${i}%)`
        })
        $(elem).css({
            "background": `-ms-linear-gradient(${dir}, ${Graphics.unvisibility} ${i}%, ${Graphics.secondColor} ${i}%)`
        })
        if (i==100) {
            clearInterval(timerId)
            return true;
        }
        i++;
    }, 10)
}
const showEffect = (elem,dir) => {
    var i = 0;
    var timerId = setInterval(() => {
        $(elem).css({
            "background": `-moz-linear-gradient(${dir}, ${Graphics.secondColor} ${i}%, ${Graphics.unvisibility} ${i}%)`
        })
        $(elem).css({
            "background": `-o-linear-gradient(${dir}, ${Graphics.secondColor} ${i}%, ${Graphics.unvisibility} ${i}%)`
        })
        $(elem).css({
            "background": `-webkit-linear-gradient(${dir}, ${Graphics.secondColor} ${i}%, ${Graphics.unvisibility} ${i}%)`
        })
        $(elem).css({
            "background": `-ms-linear-gradient(${dir}, ${Graphics.secondColor} ${i}%, ${Graphics.unvisibility} ${i}%)`
        })
        if (i==100) {
            clearInterval(timerId)
            shows(elem, dir);
        }
        i++;
    }, 10)
}
const hideBut = () => {
if ($('#save').length != 0) {
        $('#save, #load').animate({
            "opacity": "0"
        }, 500)
        setTimeout(() => {
            $('#save').remove();
            $('#load').remove();
        }, 500)
        
    }
}
const showPush = (text, header=Strings.pushDeafaultHeader) => {
    var r = randomInteger(1, 100000000);
    $('.wrapper').append(`<div class="push-message-${r}"></div>`);
    $(`.push-message-${r}`).css({
        "width": "270px",
        "height": "100px",
        "background": `${Graphics.firstColor}`,
        "border": `1px solid ${Graphics.secondColor}`,
        "box-sizing": "border-box",
        "position": "relative",
        "top": "-19%",
        "left": "110%",
        "opacity": "0",
        "z-index": "2000",
        "text-align": "center"
    });
    $(`.push-message-${r}`).append(`<p id="completed-quest-header-${r}"><b>${header}</b></p>`);
    $(`#completed-quest-header-${r}`).css({
        "color": `${Graphics.secondColor}`,
        "font-size": "12pt"
    })
    $(`.push-message-${r}`).append(`<p id="completed-quest-body-${r}">${text}</p>`);
    $(`#completed-quest-body-${r}`).css({
        "color": `${Graphics.secondColor}`,
        "font-size": "12pt"
    });
    $(`.push-message-${r}`).animate({
        "left": "45%",
        "opacity": "1"
    }, 300)
    setTimeout(function() {
        $(`.push-message-${r}`).animate({
            "left": "110%",
            "opacity": "0"
        }, 300)
    }, 2300)
    setTimeout(function() {
        $(`.push-message-${r}`).remove();
    }, 2900)
}
const showGameAlert = (header,text,type,marginLeft) => {
    if (type[3] != undefined) {
        $('body').prepend(`<div class="fog" onclick="${type[3]}"></div>`);
    }
    else {
        $('body').prepend('<div class="fog" onclick="return hideGameAlert()"></div>');
    }
    $('.wrapper').css('pointer-events','none');
    $('body').prepend('<div class="game-alert"></div>');
    $('.fog').css({
        "animation-name": "showFog",
        "animation-duration": "0.25s"
    })
    $('.game-alert').css({
        "background": `${Graphics.firstColor}`,
        "border": `2px solid ${Graphics.secondColor}`,
        "border-radius": "20px"
    })
    setTimeout(() => {
        $('.fog').css({
            "background": "#0007"
        })
    },250)
    $('.game-alert').animate({
        "max-height": "300px",
        "max-width": "400px",
        "margin-left": "-=200px",
        "margin-top": "-=150px"
    }, 250, 'swing')
    if (type[2] != undefined) {
    $('.game-alert').prepend(`<button id="closeGA" onclick="${type[2]}">&times;</button>`)
    }
    else {
        $('.game-alert').prepend('<button id="closeGA" onclick="post()">&times;</button>')
    }
    $('.game-alert').append(`<h2 style="margin-left:${marginLeft}">${header}</h2>`);
    $('.game-alert').append('<div class="game-alert-body"></div>')
    $('.game-alert-body').append(`<div id="alert-text-place">${text}</div>`);
    if (type[0].toLowerCase() == "alert") {
        if (type[1] != undefined) {
            $('.game-alert').append(`<button onclick="${type[1]}" id="ok-button">Ok</button>`)
        }
        else {
            $('.game-alert').append('<button onclick="post()" id="ok-button">Ok</button>')
        }
    }
    if (type[0].toLowerCase() == "prompt") {
        $('.game-alert').append('<textarea placeholder="Some input" class="promptValue"></textarea>');
        if (type[1] == undefined) {
            $('.game-alert').append('<button onclick="post(1)" id="ok-button">Ok</button>');
        }
        else if (isNaN(Number(type[1]))) {
            $('.game-alert').append(`<button onclick="${type[1]}" id="ok-button">Ok</button>`);
        }
        else {
            $('.game-alert').append(`<button onclick="post(${type[1]}, '${type[3]}')" id="ok-button">Ok</button>`);
        }
    }
    Graphics.apply();
}
const post = (takeData = 0, tp = undefined) => {
    var res = hideGameAlert(takeData)
    if ((res != null) && (res.split(' ').clean('').length != 0)) {
        switch (takeData) {
            case 1:
                Player.nickname = res;
            case 2:
                setTea(tp, res);
        }
    }
}
const hideGameAlert = (takeData = 0) => {
    var input;
    if (takeData != 0) {
        input = $('.promptValue').val();
    }
    $('.promptValue').val('');
    $('.game-alert').animate({
        "max-height": "0px",
        "max-width": "0px",
        "margin-left": "+=200px",
        "margin-top": "+=150px"
    }, 250, 'swing')
    $('.fog').css({
        "animation-name": "showFog",
        "animation-duration": "0.25s",
        "animation-direction": "reverse"
    })
    setTimeout(() => {
        $('.fog').css({
            "background": "#0000"
        })
        $('.fog').eq(0).remove();
        $('.game-alert').eq(0).remove();
        $('.wrapper').css('pointer-events','auto');
        Change();
    },250)
    if ((takeData != 0) && (input != undefined) && (input != '')) {
        return input;
    }
}