// ( ͡° ͜ʖ ͡°)
var Player = {
    nickname: 'Igor',
    money: 100,
    teamade: 0,
    tea: {
        green: 0,
        black: 0,
        yellow: 0,
        red: 0,
        white: 0,
        oolong: 0,
        puer: 0
    },
    cups: {
        green: 0,
        black: 0,
        yellow: 0,
        red: 0,
        white: 0,
        oolong: 0,
        puer: 0
    }

}
var Shop = {
    tea: {
        green: 1000000,
        black: 1000000,
        yellow: 1000000,
        red: 100000,
        white: 100000,
        oolong: 1000,
        puer: 1000
    },
    price: {
        green: 10,
        black: 10,
        yellow: 10,
        red: 100,
        white: 100,
        oolong: 10000,
        puer: 10000
    }
}
// In next update, but maybe not :P
var workers = []

class Worker {
    constructor() {

    }
}
//------------------
var Graphics = {
    firstColor: "#222",
    secondColor: "hsla(0,100%,67%,100%)",
    hue: 0,
    sat: 100,
    lig: 67,
    alp: 100,
    bg_hue: 0,
    bg_sat: 0,
    bg_lig: 13,
    bg_alp: 100,
    hoveredButtonsColor: "#f554",
    unvisibility: "#2220",
    lowQuality: false,
    apply() {
        $('.wrapper, button:not(.shop-button, .shop-button-disabled), textarea').css({
            "background": `${this.firstColor}`
        })
        $('*').css({
            "color": `${this.secondColor}`
        })
        $('* :not(body)').css({
            "border-color": `${this.secondColor}`
        })
        $('button').hover(function() {
            $(this).css({
                "background": `${Graphics.hoveredButtonsColor}`,
                "cursor": "pointer"
            })
        }, function() {
            $(this).css({
                "background": `${Graphics.firstColor}`
            })
            $('.shop-button:not(.shop-button-disabled)').css({
                "background": `${Graphics.unvisibility}`
            })
        })
        $('button').on('mousedown', function() {
            $(this).css({
                "background": `${Graphics.secondColor}`
            })
        })
        $('button').on('mouseup', function() {
            $(this).css({
                "background": `${Graphics.hoveredButtonsColor}`
            })
        })
        if (this.lowQuality) {
            $('*').css({
                "box-shadow": "none",
                "text-shadow": "none"
            })
            $('#sq1').remove()
            $('#sq2').remove()
            $('#sq3').remove()
            $('#sqh').remove()
        }
        else {
            $('header').css({
                "box-shadow": "-0.75px 5px 5px 0px #000"
            })
            $('header>h1, button:not(.shop-button, .shop-button-disabled)').css({
                "text-shadow": "0px 5px 2px #000"
            })
            $('#close').css({
                "box-shadow": "-0.75px 5px 5px 0px #000"
            })
            $('button:not(.shop-button, .shop-button-disabled)').css({
                "text-shadow": "0px 5px 2px #000"
            })
            $('footer').css({
                "box-shadow": "-0.75px -5px 5px 0px #000"
            })
            $('#sq1, #sq2, #sq3, #sqh').css({
                "box-shadow": "-5px -0.75px 5px 0px #000"
            })
            $('.sidebar1').css({
                "box-shadow": "inset -2.5px -0.75px 5px 0px #000"
            })
            $('.sidebar2').css({
                "box-shadow": "inset 2.5px -0.75px 5px 0px #000"
            })
            if ($('#sq1').length == 0) {
                $('footer').append('<div id="sq1"></div>')
                $('footer').append('<div id="sq2"></div>')
                $('footer').append('<div id="sq3" onclick="inc()"></div>')
                $('.wrapper').prepend('<div id="sqh"></div>')
            }
            $('* :not(#sq3, body, footer, .wrapper)').on('click', function() {
                root = 0
            })
            if ($('#where-line').length != 0) {
                $('#where-line').css('background', Graphics.secondColor)
            }
            $('.shop-button-disabled, .shop-button').css('background',Graphics.unvisibility)
        }
    },
    applyToSliders() {
        var all = $('input[type=range]');
        all.css('--bd-color',`hsla(${Graphics.hue},${Graphics.sat}%,${Graphics.lig}%,${Graphics.alp}%)`);
    }
}
var root = 0;
var tutorialNum = 1;
//ES functions :P
//I like these functions, but remembered them too late
const tutorial = () => {
    switch (tutorialNum) {
        case 1:
            tutorialNum++;
            showGameAlert('Tutorial','You can make or sell cups of tea in the "To make tea!" section<br/><br/><a onclick="ddchk()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
            break;
        case 2:
            post();
            setTimeout(() => {
                tutorialNum++;
                showGameAlert('Tutorial','You can buy tea leaves in the "Shop" section<br/><br/><a onclick="ddchk()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250)
            break;
        case 3:
            post();
            setTimeout(() => {
                tutorialNum++;
                showGameAlert('Tutorial','You can see your statistics and change nick in the "Player" section<br/><br/><a onclick="ddchk()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250)
            break;
        case 4:
            post();
            setTimeout(() => {
                tutorialNum++;
                showGameAlert('Tutorial','You can customize the game for yourself in the "Settings" section<br/><br/><a onclick="ddchk()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250)
            break;
        case 5:
            post();
            setTimeout(() => {
                tutorialNum++;
                showGameAlert('Tutorial','You need 3 tea leaves to create 1 cup of tea<br/><br/><a onclick="ddchk()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250)
            break;
        case 6:
            post();
            setTimeout(() => {
                tutorialNum++;
                showGameAlert('Tutorial','Report me about all the bugs<br/><br/><a onclick="ddchk()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250)
            break;
        case 7:
            post();
            setTimeout(() => {
                tutorialNum++;
                showGameAlert('Tutorial','Good luck and have fun! ( ͡° ͜ʖ ͡°)<br/><br/><a onclick="ddchk()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250)
            break;
        case 8:
            post();
            setTimeout(() => {
                tutorialNum++;
                showGameAlert('Tutorial','Use a PC for more convenience ( ͡° ͜ʖ ͡°)',['alert','ddchk()','ddchk()','ddchk()'],'150px');
            }, 250)
            break;
    }
}
//end 
const active = () => {
    $('#sq3').click(inc())
}
const deactive = () => {
    $('#sq3').off('click');
}
const ddchk = () => {
    post();
    for (let g = 0; g < typesTea.length; g++) {
        timerChange[`${typesTea[g]}Price`] = setTimeout(yt = () => {
            ChangeTeaPrise(typesTea[g]);
            timerChange[`${typesTea[g]}Price`] = setTimeout(yt, randomInteger(50000, 120000));
        }, randomInteger(50000, 120000));
        timerGetter[`${typesTea[g]}Get`] = setTimeout(gt = () => {
            getTea(typesTea[g]);
            timerGetter[`${typesTea[g]}Get`] = setTimeout(gt, randomInteger(10000, 20000));
        }, randomInteger(10000, 20000))
    }
    timer.checkTimer = setTimeout(tt = () => {
        if (!checkPlayer()) {
            showGameAlert('You were banned!','We apologize, but you were banned for using cheats. Please never use these accessories. You can write to me and I will give you codes, in fact, after all, are they not cheats?🌚',['alert','','',''],'95px')
            localStorage.setItem(encrypt('BAN','Player'), encrypt(Player.nickname))
        }
        else {
            timer.checkTimer = setTimeout(tt,1);
        }
    }, 1)
}
const inc = () => {
    root++
    if (root>=10) {
        root = 0
        showGameAlert("ةرادإلا ةحول","#O05bLTSOj5iIeddnqNMlsA.VfM6NxA2te0.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", ['prompt'], '60px')
    }
}
const changeLog = () => {
    showGameAlert('Change log', `
        <u><b>v1.1:</b></u><br/>
        - Fixed balance. Now the game can be played :D<br/>
        <u><b>v1.2:</b></u><br/>
        - In the shop you can enter custom value of tea leaves. Click to the value of tea leaves to change it<br/>
        <u><b>v1.3:</b></u><br/>
        - Bug fixed<br/>
        <u><b>v1.4:</b></u><br/>
        - Now you can save progress :D<br/>
        <u><b>v1.5:</b></u><br/>
        - Bug fixed<br/>
        `, ['alert'], '125px')
}
var timerChange = {
    greenPrice: 1000,
    blackPrice: 1000,
    yellowPrice: 1000,
    redPrice: 1000,
    whitePrice: 1000,
    oolongPrice: 1000,
    puerPrice: 1000
}

var timerGetter = {
    greenGet: 1000,
    blackGet: 1000,
    yellowGet: 1000,
    redGet: 1000,
    whiteGet: 1000,
    oolongGet: 1000,
    puerGet: 1000
}
var timer = {
    checkTimer: 0
}
var typesTea = ['green','black','yellow','red','white','oolong','puer'];
$(document).ready(() => {
    Graphics.apply();
    Graphics.applyToSliders();
})
const randomInteger = (min, max) => {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}
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
const playerInfo = () => {
    showEffect('.sidebar1','top right');
    setTimeout(() => {
        hideBut();
        $('.sidebar1').empty();
        $('.sidebar1').append('<div id="player-info" style="overflow:scroll;"></div>');
        $('#player-info').append(`<h2 style="color:${Graphics.secondColor}" onclick="changeName()" title="Click to change :)">${Player.nickname}</h2>`);
        $('#player-info').append(`<p style="color:${Graphics.secondColor}">Money: ${Player.money}</p>`)
        $('#player-info').append(`<p style="color:${Graphics.secondColor}">How much tea did: ${Player.teamade}</p>`)
        $('#player-info').append('<p><ul id="how-many-tea">You have:</ul></p>')
        for (key in Player.tea) {
            $('#how-many-tea').append(`<li id="${key}-tea-leaves">${key.charAt(0).toUpperCase() + key.slice(1)} tea leaves: ${Player.tea[key]}</li>`)
        }
        for (key in Player.cups) {
            $('#how-many-tea').append(`<li id="${key}-tea-cups">Cups of ${key} tea: ${Player.cups[key]}</li>`)
        }
        Graphics.apply();
    }, 1500)
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
Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
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
const changeName = () => {
    showGameAlert('Change Name','Enter new nick or press the cross to cancel',['prompt', '1'],'120px');
}
const Change = () => {
    $('#player-info>h2').text(`${Player.nickname}`)
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
const settings = () => {
    showEffect('.sidebar1','top left');
    setTimeout(() => {
        $('.sidebar1').empty();
        $('.sidebar1').prepend('<div class="settings-info"></div>')
        $('.settings-info').prepend('<h2 style="margin-top:0px; margin-left:50px;">Settings</h2>')
        $('.settings-info').append('<p>Color:</p>')
        $('.settings-info').append(`<input id="color" type="range" min="0" max="360" step="1" value="${Graphics.hue}" oninput="chn()">`)
        $('.settings-info').append('<p>Saturation:</p>')
        $('.settings-info').append(`<input id="saturation" type="range" min="0" max="100" step="1" value="${Graphics.sat}" oninput="chn()">`)
        $('.settings-info').append('<p>Lightness:</p>')
        $('.settings-info').append(`<input id="lightness" type="range" min="0" max="100" step="1" value="${Graphics.lig}" oninput="chn()">`)
        $('.settings-info').append('<p>Alpha:</p>')
        $('.settings-info').append(`<input id="alpha" type="range" min="0" max="100" step="1" value="${Graphics.alp}" oninput="chn()">`)
        $('.settings-info').append('<p>BG color:</p>')
        $('.settings-info').append(`<input id="bg-color" type="range" min="0" max="100" step="1" value="${Graphics.bg_hue}" oninput="chn()">`)
        $('.settings-info').append('<p>BG saturation:</p>')
        $('.settings-info').append(`<input id="bg-saturation" type="range" min="0" max="100" step="1" value="${Graphics.bg_sat}" oninput="chn()">`)
        $('.settings-info').append('<p>BG lightness:</p>')
        $('.settings-info').append(`<input id="bg-lightness" type="range" min="0" max="100" step="1" value="${Graphics.bg_lig}" oninput="chn()">`)
        $('.settings-info').append('<p>BG alpha:</p>')
        $('.settings-info').append(`<input id="bg-alpha" type="range" min="0" max="100" step="1" value="${Graphics.bg_alp}" oninput="chn()">`)
        $('.settings-info').append('<p>Low quality:</p>')
        $('.settings-info').append(`<div class="checkbox" onclick="check()" data-content="non"></div>`)
        Graphics.apply();
        Graphics.applyToSliders();
        if ($('#save').length == 0) {
            $('#settings').after('<button id="save" onclick="save();">Save</button>')
            $('#save').after('<button id="load" onclick="load();">Load</button>')
            $('#save, #load').animate({
                'opacity': '1'
            }, 1000)
        }
        else {
            $('#save, #load').animate({
                'opacity': '0'
            }, 100)
            $('#save, #load').animate({
                'opacity': '1'
            }, 1000)
        }
        Graphics.apply();
        Graphics.applyToSliders();
    },1000);
}
var data = {
    plr: null,
    shp: null,
    grp: null,
    rt: null,
    tmChg: null,
    tmGtr: null,
    tmr: null,
    tpTea: null
}
const save = () => {
    data = {
        plr: JSON.stringify(Player),
        shp: JSON.stringify(Shop),
        grp: JSON.stringify(Graphics),
        rt: root,
        tmChg: JSON.stringify(timerChange),
        tmGtr: JSON.stringify(timerGetter),
        tmr: JSON.stringify(timer),
        tpTea: JSON.stringify(typesTea)
    }
    for (var key in data) {
        localStorage.setItem(key, data[key]);
    }
    showGameAlert('Saved successfully!', '', ['alert'], '75px');
}
const load = () => {
    for (key in data) {
        if (localStorage.getItem(key) == null) {
            return showGameAlert('Loading error!', 'Saving not found', ['alert'], '95px');
        }
    }
    Player = JSON.parse(localStorage.getItem('plr'));
    Shop = JSON.parse(localStorage.getItem('shp'));
    grp = JSON.parse(localStorage.getItem('grp'));
    for (key in grp) {
        Graphics[key] = grp[key];
    }
    root = +localStorage.getItem('rt');
    timerChange = JSON.parse(localStorage.getItem('tmChg'));
    timerGetter = JSON.parse(localStorage.getItem('tmGtr'));
    timer = JSON.parse(localStorage.getItem('tmr'));
    typesTea = JSON.parse(localStorage.getItem('tpTea'));
    Graphics.apply();
    Graphics.applyToSliders();
    showGameAlert('Loaded successfully!', '', ['alert'], '75px');
}
const check = () => {
    if (Graphics.lowQuality) {
        $('.checkbox').animate({
            "border-width": "2px",
            "width": "15px",
            "height": "15px"
        }, 250)
        Graphics.lowQuality = false;
        Graphics.apply();
        Graphics.applyToSliders()
    }
    else if (!Graphics.lowQuality) {
        $('.checkbox').animate({
            "border-width": "8px",
            "width": "3px",
            "height": "3px"
        }, 250)
        Graphics.lowQuality = true;
        Graphics.apply();
        Graphics.applyToSliders()
    }
}
const chn = () => {
    //secColor
    var hue = $('#color').val();
    var satur = $('#saturation').val();
    var light = $('#lightness').val();
    var alpha = $('#alpha').val();
    Graphics.hue = +hue;
    Graphics.sat = +satur;
    Graphics.lig = +light;
    Graphics.alp = +alpha;
    //firstColor
    var bg_hue = $('#bg-color').val();
    var bg_satur = $('#bg-saturation').val();
    var bg_light = $('#bg-lightness').val();
    var bg_alpha = $('#bg-alpha').val();
    Graphics.bg_hue = +bg_hue;
    Graphics.bg_sat = +bg_satur;
    Graphics.bg_lig = +bg_light;
    Graphics.bg_alp = +bg_alpha;
    //Initialise
    Graphics.hoveredButtonsColor = `hsla(${hue},${satur}%,${light}%,${alpha*0.4}%)`
    Graphics.secondColor = `hsla(${hue},${satur}%,${light}%,${alpha}%)`
    Graphics.firstColor = `hsla(${bg_hue},${bg_satur}%,${bg_light}%,${bg_alpha}%)`
    Graphics.apply();
    Graphics.applyToSliders();
}
const enterTea = (item) => {
    showGameAlert('Enter tea leaves', 'Enter tea leaves from keyboard or enter "max" to buy maximum tea leaves', ['prompt', '2', 'post()', `${item}`], '95px');
}
const setTea = (item, quan) => {
    if (quan.toLocaleLowerCase() == "max") {
        quan = Math.floor(Player.money / Shop.price[item]);
    }
    if (quan < Shop.tea[`${item}`]) {
        $(`#${item}Tea`).attr('value', quan);
        $(`#${item}Tea`).val(quan);
        $(`#price-${item}-tea`).text(`${item.charAt(0).toUpperCase() + item.slice(1)}: ${$(`#${item}Tea`).val()}`);
        $(`#by-${item}-tea-button`).text(`Buy for ${Shop.price[`${item}`]*$(`#${item}Tea`).val()}`);
    }
    else {
        $(`#${item}Tea`).attr('value', Shop.tea[`${item}`]);
        $(`#price-${item}-tea`).text(`${item.charAt(0).toUpperCase() + item.slice(1)}: ${$(`#${item}Tea`).val()}`);
        $(`#by-${item}-tea-button`).text(`Buy for ${Shop.price[`${item}`]*$(`#${item}Tea`).val()}`);
    }
}
const shop = () => {
    showEffect('.sidebar1', 'top')
    setTimeout(() => {
        $('.sidebar1').empty()
        $('.sidebar1').append('<div class="shop-body"></div>')
        $('.shop-body').append('<h2>Shop</h2>')
        $('.shop-body').append('<p><u><strong id="leaves">Leaves</strong></u></p>')
        for (var key in Shop.tea) {
            if (Shop.tea[key] <= 0) {
                $('.shop-body').append(`<p id="price-${key}-tea">${key.charAt(0).toUpperCase() + key.slice(1)}: 0</p>`);
                $('.shop-body').append(`<button class="shop-button-disabled" id="by-${key}-tea-button">Out of stock!</button>`)
            }
            else {
                $('.shop-body').append(`<input type="range" oninput="changePrice('${key}')" id="${key}Tea" min="0" max="${Shop.tea[key]}" value="0" step="1">`)
                $(`#${key}Tea`).before(`<p id="price-${key}-tea" onclick="enterTea('${key}')" title="Click to change on custom">${key.charAt(0).toUpperCase() + key.slice(1)}: ${$(`#${key}Tea`).val()}</p>`);
                $('.shop-body').append(`<button onclick="buy('${key}')" class="shop-button" id="by-${key}-tea-button">Buy for ${Shop.price[key]*$(`#${key}Tea`).val()}</button>`)
            }
        }
        Graphics.apply();
        Graphics.applyToSliders()
    }, 1500)
}

const ChangeTeaPrise = (item) => {
    if (Math.floor(Math.random()*2) == 0) {
        Shop.price[`${item}`] += Math.floor(Shop.price[`${item}`]*0.15);
    }
    else {
        Shop.price[`${item}`] -= Math.floor(Shop.price[`${item}`]*0.05);
    }
    if ($(`#${item}Tea`).length != 0) {
        $(`#by-${item}-tea-button`).text(`Buy for ${Shop.price[`${item}`]*$(`#${item}Tea`).val()}`)
    }
}
const getTea = (item) => {
    Shop.tea[`${item}`] += Math.floor(Math.random()*50)
    if ((Shop.tea[`${item}`] > 0) && ($(`#${item}Tea`).length == 0)) {
        $(`#price-${item}-tea`).after(`<input type="range" oninput="changePrice('${item}')" id="${item}Tea" min="0" max="${Shop.tea[`${item}`]}" value="0" step="1">`)
        $(`#price-${item}-tea`).text(`${item.charAt(0).toUpperCase() + item.slice(1)}: ${$(`#${item}Tea`).val()}`);
        $(`#by-${item}-tea-button`).attr('class','shop-button');
        $(`#by-${item}-tea-button`).attr('onclick',`buy('${item}')`)
        $(`#by-${item}-tea-button`).text(`By for ${Shop.price[`${item}`] * +$(`#${item}Tea`).val()}`);
        
        Graphics.apply();
        Graphics.applyToSliders();
    }
    else {
        $(`#${item}Tea`).attr('max', `${Shop.tea[item]}`);
    }
}

const buy = (item) => {
    if (Player.money - Shop.price[`${item}`]*$(`#${item}Tea`).val() < 0) {
        showGameAlert('!','Not enough money!',['alert'],'200px')
    }
    else if ($(`#${item}Tea`).val() == 0) {
        showGameAlert('!','Nothing to buy!',['alert'],'200px')
    }
    else {
        showGameAlert('!','Bought successfully!',['alert'],'200px')
        Player.money -= Shop.price[`${item}`]*$(`#${item}Tea`).val();
        Player.tea[item] += +$(`#${item}Tea`).val();
        Shop.tea[`${item}`] -= $(`#${item}Tea`).val();
        if (Shop.tea[`${item}`] <= 0) {
            $(`#${item}Tea`).animate({
                "opacity": "0"
            }, 250)
            setTimeout(() => {
                $(`#${item}Tea`).remove();
                $(`#by-${item}-tea-button`).attr('class','shop-button-disabled');
                $(`#price-${item}-tea`).text(`${item.charAt(0).toUpperCase() + item.slice(1)}: 0`)
                $(`#by-${item}-tea-button`).text('Out of stock!');
                $(`#by-${item}-tea-button`).removeAttr('onclick');
            }, 250)
        }
        else {
            $(`#${item}Tea`).attr('max',`${Shop.tea[`${item}`]}`)
        }
    }
}
const changePrice = (item) => {
    $(`#price-${item}-tea`).text(`${item.charAt(0).toUpperCase() + item.slice(1)}: ${$(`#${item}Tea`).val()}`);
    $(`#by-${item}-tea-button`).text(`Buy for ${$(`#${item}Tea`).val()*Shop.price[`${item}`]}`)
}
const about = () => {
    showEffect('.sidebar1', 'bottom');
    setTimeout(() => {
        hideBut();
        $('.sidebar1').empty()
        $('.sidebar1').append('<div class="about-body"></div>')
        $('.about-body').append('<h2>About</h2>')
        $('.about-body').append('<p>In this game you will need to make a <u><strong title=\'\"Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis, an evergreen shrub (bush) native to East Asia.\" &copy;Wiki\'>tea</strong></u>, sell it, hire workers and build a business</p>');
        Graphics.apply();
    }, 1500)
}
var teaInProgress = false;
const makeTea = () => {
    showEffect('.sidebar1', 'top left')
    setTimeout(() => {
        hideBut();
        $('.sidebar1').empty();
        $('.sidebar1').append('<div class="make-body"></div>');
        $('.make-body').append('<div id="make-tea" onclick="toMake()">Make</div>');
        $('.make-body').append('<div id="sell-tea" onclick="toSell()">Sell</div>');
        $('.make-body').append('<div id="where-line"></div>');
        sellTrigger = false;
        $('.make-body').append('<div class="make-tea-body"></div>')
        for (key in Player.tea) {
            if (Player.tea[key]/3 < 1) {
                $('.make-tea-body').append(`<p id="selected-cups-of-${key}-tea">Cups of ${key} tea: 0</p>`);
                $('.make-tea-body').append(`<button class="shop-button-disabled" id="make-${key}-tea-button">Not enough leaves!</button>`)
            }
            else {
                $('.make-tea-body').append(`<input type="range" oninput="changeSlectedCups('${key}')" id="select-cups-of-${key}-tea" min="0" max="${Math.floor(Player.tea[key]/3)}" value="0" step="1">`)
                $(`#select-cups-of-${key}-tea`).before(`<p id="selected-cups-of-${key}-tea">Cups of ${key} tea: ${$(`#select-cups-of-${key}-tea`).val()}</p>`);
                $('.make-tea-body').append(`<button onclick="makeIt('${key}')" class="shop-button" id="make-${key}-tea-button">Make ${$(`#select-cups-of-${key}-tea`).val()} cups</button>`)
            }
        }
        if (teaInProgress) {
            setTimeout(() => {
                $('.make-tea-body').prepend('<div class="make-tea-block"></div>')
                $('.make-tea-block').animate({
                    "opacity": "1",
                    "margin": "-10px 0px 0px -5px",
                    "height": document.getElementsByClassName('make-tea-body')[0].scrollHeight
                }, 0)
            }, 2000)
        }
        Graphics.apply();
    }, 1500)
}
const makeIt = (item) => {
    if (Player.tea[item] - $(`#select-cups-of-${item}-tea`).val()*3 < 0) {
        showGameAlert('!','Not enought tea leaves!<br /> You need 3 tea leaves to make 1 cup of tea!',['alert'],'200px');
    }
    else if ($(`#select-cups-of-${item}-tea`).val() == 0) {
        showGameAlert('!','Nothing to make!',['alert'],'200px');
    }
    else {
        teaInProgress = true;
        var j = $(`#select-cups-of-${item}-tea`).val();
        showGameAlert('!',`Making tea... Please wait ${2*j} seconds to make ${j} cup(-s). You can't make tea yet :)`,['alert'],'200px')
        sellTrigger = true;
        toMake()
        var time = 2000*j;
        setTimeout(act, time, item, j)
    }
}
const act = (item, quant) => {
    teaInProgress = false;
    Player.tea[item] -= quant*3;
    Player.cups[item] += +quant;
    if ($(`#select-cups-of-${item}-tea`).length != 0) {
        $(`#select-cups-of-${item}-tea`).val('0');
        sellTrigger = false;
        toMake();
    }
}
const changeSlectedCups = (item) => {
    $(`#selected-cups-of-${item}-tea`).text(`Cups of ${item} tea: ${$(`#select-cups-of-${item}-tea`).val()}`)
    $(`#make-${item}-tea-button`).text(`Make ${$(`#select-cups-of-${item}-tea`).val()} cups`)
}
var sellTrigger = false;
const toMake = () => {
    if (sellTrigger) {
        $('#where-line').animate({
            "margin-left": "0%"
        }, 100)
        sellTrigger = false;
        $('.sell-tea-body').remove()
        $('.make-tea-body').remove()
        $('.make-body').append('<div class="make-tea-body"></div>')
        for (key in Player.tea) {
            if (Player.tea[key]/3 < 1) {
                $('.make-tea-body').append(`<p id="selected-cups-of-${key}-tea">Cups of ${key} tea: 0</p>`);
                $('.make-tea-body').append(`<button class="shop-button-disabled" id="make-${key}-tea-button">Not enough leaves!</button>`)
            }
            else {
                $('.make-tea-body').append(`<input type="range" oninput="changeSlectedCups('${key}')" id="select-cups-of-${key}-tea" min="0" max="${Math.floor(Player.tea[key]/3)}" value="0" step="1">`)
                $(`#select-cups-of-${key}-tea`).before(`<p id="selected-cups-of-${key}-tea">Cups of ${key} tea: ${$(`#select-cups-of-${key}-tea`).val()}</p>`);
                $('.make-tea-body').append(`<button onclick="makeIt('${key}')" class="shop-button" id="make-${key}-tea-button">Make ${$(`#select-cups-of-${key}-tea`).val()} cups</button>`)
            }
        }
        if (teaInProgress) {
            setTimeout(() => {
                $('.make-tea-body').prepend('<div class="make-tea-block"></div>')
                $('.make-tea-block').animate({
                    "opacity": "1",
                    "margin": "-10px 0px 0px -5px",
                    "height": document.getElementsByClassName('make-tea-body')[0].scrollHeight
                }, 0)
            }, 0)
        }
    }
    Graphics.apply();
    Graphics.applyToSliders();
}
const toSell = () => {
    if (!sellTrigger) {
        $('#where-line').animate({
            "margin-left": "50%"
        }, 100)
        sellTrigger = true;
        $('.sell-tea-body').remove()
        $('.make-tea-body').remove()
        $('.make-body').append('<div class="sell-tea-body"></div>')
        for (key in Player.cups) {
            if (Player.cups[key] <= 0) {
                $('.sell-tea-body').append(`<p id="selected-cups-of-${key}-tea">Cups of ${key} tea: 0</p>`);
                $('.sell-tea-body').append(`<button class="shop-button-disabled" id="sell-${key}-tea-button">No cups to sell!</button>`)
            }
            else {
                $('.sell-tea-body').append(`<input type="range" oninput="changeSlectedCupsToSell('${key}')" id="select-to-sell-cups-of-${key}-tea" min="0" max="${Player.cups[key]}" value="0" step="1">`)
                $(`#select-to-sell-cups-of-${key}-tea`).before(`<p id="selected-to-sell-cups-of-${key}-tea">Cups of ${key} tea: ${$(`#select-to-sell-cups-of-${key}-tea`).val()}</p>`);
                $('.sell-tea-body').append(`<button onclick="sellIt('${key}')" class="shop-button" id="sell-${key}-tea-button">Sell for ${$(`#select-to-sell-cups-of-${key}-tea`).val()*(Math.floor(Shop.price[key] / 2))}$</button>`);
            }
        }
    }
    Graphics.apply();
    Graphics.applyToSliders();
}
const changeSlectedCupsToSell = (item) => {
    $(`#selected-to-sell-cups-of-${item}-tea`).text(`Cups of ${item} tea: ${$(`#select-to-sell-cups-of-${item}-tea`).val()}`)
    $(`#sell-${item}-tea-button`).text(`Sell for ${$(`#select-to-sell-cups-of-${item}-tea`).val()*(Math.floor(Shop.price[item] * 5))}$`);
}
const sellIt = (item) => {
    if ($(`#select-to-sell-cups-of-${item}-tea`).val() == 0){
        showGameAlert('!','Nothing to sell!',['alert'],'200px')
    }
    else {
        Player.cups[item] -= +$(`#select-to-sell-cups-of-${item}-tea`).val();
        Player.money += $(`#select-to-sell-cups-of-${item}-tea`).val()*(Math.floor(Shop.price[item] * 5));
        sellTrigger = false;
        toSell();
    }
}
const checkPlayer = () => {
    for (var key in Player) {
        if ((Player[key] > 22*10**12) || (Player[key] < 0) || (Player[key] === Infinity) || (Player[key] === NaN) || (Player[key] === null)) {
            return false;
        }
    }
    for (var key in Player.tea) {
        if ((Player.tea[key] > 22*10**12) || (Player.tea[key] < 0) || (Player.tea[key] === Infinity) || (Player.tea[key] === NaN) || (Player.tea[key] === null)) {
            return false;
        }
    }
    for (var key in Player.cups) {
        if ((Player.cups[key] > 22*10**12) || (Player.cups[key] < 0) || (Player.cups[key] === Infinity) || (Player.cups[key] === NaN) || (Player.cups[key] === null)) {
            return false;
        }
    }
    for (var key in Shop.price) {
        if ((Shop.price[key] > 22*10**12) || (Shop.price[key] < 0) || (Shop.price[key] === Infinity) || (Shop.price[key] === NaN) || (Shop.price[key] === null)) {
            return false;
        }
    }
    if (localStorage.getItem(encrypt('BAN','Player')) !== null) {
        return false;
    }
    return true;
}


//Encrypter Croipse.js
//It should have been hidden on the server :(
var a = [];
var d = [];
var i = ' '.charCodeAt(0);
var j = '~'.charCodeAt(0);
for (; i <= j; ++i) {
    if (i == 61) {
        continue;
    };
    a.push(String.fromCharCode(i));
    d.push(i);
};
i = 0;
d = d.map((name) => {
    return name.toString(2);
});
const encrypt = (message, key = '') => {
    if ((key == undefined) || (key == null) || (key == '')) {
        key = generateKey(message);
    }
    var i = 0;
    var encsms = []
    var enckey = []
    for (; i < message.length; i++) {
        encsms.push(d[a.indexOf(message[i])])
    };
    i = key.length - 1;
    for (; i >= 0; i--) {
        enckey.push(d[a.indexOf(key[i])])
    };
    var ince = 0;
    while (enckey.length < encsms.length) {
        enckey.push(enckey[ince])
        ince++
    }
    var encmes = []
    encsms.forEach((item,i) => {
        var c = parseInt(item, 2) ^ parseInt(enckey[i], 2);
        encmes.push(c)
    });
    var q = [];
    i = 0;
    for (; i < encmes.length; i++) {
        q.push(String.fromCharCode(encmes[i]));
    };

    return q.join('');
}
const generateKey = (message) => {
    var key = [];
    while (key.length != message.split('').length) {
        key.push(a[Math.floor(Math.random()*93)])
    }
    return key;
}

// You found me!
// Congrulations!

const checkCrypt = (encryptMessage) => {
    switch (encryptMessage) {
        case `TT'u\u0013\u001ce
\u0016
Ye([^]%\u0004]PuF\u0001\"?\u0004\u0019`:
            return 1;
        case `\"$7\u0002?*\u001f#0<,\u001f ,4E`:
            return 2;
        case `U\u0015'\u0001B*`:
            return 3;
        default:
            return 0;
    }
}
const getMessage = (num) => {
    switch (num) {
        case 0:
            return 'Oops! You made a mistake'
        case 1:
            return 'Oh! No! No! I will found you! You must stay at here! I have already calculated your IP!'
        case 2:
            return 'He-he <0xFF0E>, well done! :)'
        case 3:
            return "Do you think, that it's cheat code? No, no!"
    }
}