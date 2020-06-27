// ( ͡° ͜ʖ ͡°)
var Player = {
    nickname: 'Igor',
    money: 100,
    teamade: 0,
    teasold: 0,
    tea: {
        black: 0,
        green: 0,
        yellow: 0,
        red: 0,
        white: 0,
        puer: 0,
        oolong: 0
    },
    cups: {
        black: 0,
        green: 0,
        yellow: 0,
        red: 0,
        white: 0,
        puer: 0,
        oolong: 0
    },
    completedQuests: 0,
    autoSave: false,
    admin: false
}
var Shop = {
    tea: {
        black: 1000000,
        green: 1000000,
        yellow: 1000000,
        red: 100000,
        white: 100000,
        puer: 10000,
        oolong: 1000,
    },
    price: {
        black: 10,
        green: 11,
        yellow: 25,
        red: 100,
        white: 250,
        puer: 10000,
        oolong: 15000
    }
}
var quests = {
    1: {
        prevQuest: null,
        text: 'Beginner teamaker',
        conditions: {
            teamade: 5
        },
        reward: {
            tea: {
                black: 10
            },
            money: 50
        },
        status: 'not completed',
        nextQuest: 2
    },
    2: {
        prevQuest: 1,
        text: 'Intermediate teamaker',
        conditions: {
            teamade: 50
        },
        reward: {
            tea: {
                black: 100,
                green: 50,
                yellow: 25
            },
            cups: {
                black: 10
            },
            money: 750
        },
        status: 'not completed',
        nextQuest: 3
    },
    3: {
        prevQuest: 2,
        text: 'Advanced teamaker',
        conditions: {
            teamade: 250
        },
        reward: {
            tea: {
                black: 1000,
                green: 250,
                yellow: 100,
                red: 50,
                white: 50
            },
            cups: {
                red: 5,
                white: 5
            },
            money: 5000
        },
        status: 'not completed',
        nextQuest: 4
    },
    4: {
        prevQuest: 3,
        text: 'Expert teamaker',
        conditions: {
            teamade: 750
        },
        reward: {
            tea: {
                red: 100,
                white: 100
            },
            cups: {
                red: 25,
                white: 25
            },
            money: 10000
        },
        status: 'not completed',
        nextQuest: 5
    },
    5: {
        prevQuest: 4,
        text: 'Tea master',
        conditions: {
            teamade: 10000
        },
        reward: {
            tea: {
                black: 5000,
                green: 4000,
                yellow: 3000,
                red: 2000,
                white: 1000,
                puer: 750,
                oolong: 500
            },
            cups: {
                black: 50,
                green: 50,
                yellow: 50,
                red: 50,
                white: 50,
                puer: 10,
                oolong: 10
            },
            money: 1000000
        },
        status: 'not completed',
        nextQuest: null
    },
    6: {
        prevQuest: null,
        text: 'Beginner tea seller',
        conditions: {
            teasold: 50
        },
        reward: {
            cups: {
                green: 1
            },
            money: 1500
        },
        status: 'not completed',
        nextQuest: 7
    },
    7: {
        prevQuest: 6,
        text: 'Intermediate tea seller',
        conditions: {
            teasold: 750
        },
        reward: {
            cups: {
                puer: 1
            },
            money: 10000
        },
        status: 'not completed',
        nextQuest: 8
    },
    8: {
        prevQuest: 7,
        text: 'Advanced tea seller',
        conditions: {
            teasold: 5000
        },
        reward: {
            cups: {
                puer: 25,
                oolong: 10
            },
            money: 500000
        },
        status: 'not completed',
        nextQuest: 9
    },
    9: {
        prevQuest: 8,
        text: 'Expert tea seller',
        conditions: {
            teasold: 25000
        },
        reward: {
            cups: {
                oolong: 25
            },
            money: 10000000
        },
        status: 'not completed',
        nextQuest: null
    },
    10: {
        prevQuest: null,
        text: 'Small businessman',
        conditions: {
            money: 100000
        },
        reward: {
            money: 100000,
            workers: new Worker()
        },
        status: 'not completed',
        nextQuest: 11
    },
    11: {
        prevQuest: 10,
        text: 'Middle businessman',
        conditions: {
            money: 10000000
        },
        reward: {
            money: 10000000,
            workers: new Worker()
        },
        status: 'not completed',
        nextQuest: 12
    },
    12: {
        prevQuest: 11,
        text: 'Major businessman',
        conditions: {
            money: 100000000
        },
        reward: {
            money: 100000000,
            workers: new Worker()
        },
        status: 'not completed',
        nextQuest: null
    },
    13: {
        prevQuest: null,
        text: 'I am admin!',
        conditions: {
            admin: true
        },
        reward: {

        },
        status: 'not completed',
        nextQuest: null
    }
};
/*
Quest template
: {
        prevQuest: ,
        text: '',
        conditions: {

        },
        reward: {

        },
        status: 'not completed',
        nextQuest: 
    }
*/
var workers = [null]
function Worker(level = 1, moneyToNextLevel = 100000, moneyInc = 50000, delay = 3000, timer = 0) {
    this.level = level; //1
    this.moneyToNextLevel = moneyToNextLevel; //100000
    this.moneyInc = moneyInc; //50000
    this.delay = delay; //2000
    this.timer = timer; //0
}
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
        var all = null
        if ($('input[type=range]').length != 0) {
            all = $('input[type=range]');
            all.css('--bd-color',`hsla(${Graphics.hue},${Graphics.sat}%,${Graphics.lig}%,${Graphics.alp}%)`);
        }
        if ($('progress').length != 0) {
            all = $('progress');
            all.css('--bd-color',`hsla(${Graphics.hue},${Graphics.sat}%,${Graphics.lig}%,${Graphics.alp}%)`);
        }
    }
}
var root = 0;
var tutorialNum = 1;
const refTutorial = () => {
    showGameAlert('Attention', 'Do you want to go tutorial?<br/>Click OK if you want to pass, or cross if not<br/>If you want to pass it later, it will be in the settings', ['alert', 'toTutorial()', 'ddchk()', 'ddchk();'], '150px');
}
const toTutorial = () => {
    if (timer.workers == 0) {
        ddchk();
    };
    tutorialNum = 1;
    tutorial();
}
const tutorial = () => {
    post();
    setTimeout(() => {
        switch (tutorialNum) {
            /*
            case :
                setTimeout(() => {
                    tutorialNum++;
                    showGameAlert('Tutorial','<br/><br/><a onclick="post()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
                }, 250);
                break;
            */
            case 1:
                setTimeout(() => {
                    tutorialNum++;
                    showGameAlert('Tutorial','You can make or sell cups of tea in the "To make tea!" section<br/><br/><a onclick="post()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
                }, 250);
                break;
            case 2:
                setTimeout(() => {
                    tutorialNum++;
                    showGameAlert('Tutorial','You need 3 tea leaves to make 1 cup of tea<br/><br/><a onclick="post()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
                }, 250);
                break;
            case 3:
                setTimeout(() => {
                    tutorialNum++;
                    showGameAlert('Tutorial','It takes 2 seconds to prepare one cup of tea<br/><br/><a onclick="post()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
                }, 250);
                break;
            case 4:
                setTimeout(() => {
                    tutorialNum++;
                    showGameAlert('Tutorial',`While making tea you can't make another tea, but you can sell tea mugs.<br/><br/><a onclick="post()">--> Click to skip tutorial <--</a>`,['alert','tutorial()','tutorial()','tutorial()'],'150px');
                }, 250);
                break;
            case 5:
                setTimeout(() => {
                    tutorialNum++;
                    showGameAlert('Tutorial',`Workers make tea in your place if you have tea leaves, even if you can't make them yourself. But they take 1% to 50% of the money from the sale of cups of tea (depending on the amount of tea sold)<br/><br/><a onclick="post()">--> Click to skip tutorial <--</a>`,['alert','tutorial()','tutorial()','tutorial()'],'150px');
                }, 250);
                break;
            case 6:
                setTimeout(() => {
                    tutorialNum++;
                    showGameAlert('Tutorial','You can get workers by performing quests related to the recruitment of a certain amount of money<br/><br/><a onclick="post()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
                }, 250);
                break;
            case 7:
                setTimeout(() => {
                    tutorialNum++;
                    showGameAlert('Tutorial','You can see your statistics and change nick in the "Player" section<br/><br/><a onclick="post()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
                }, 250);
                break;
            case 8:
                setTimeout(() => {
                    tutorialNum++;
                    showGameAlert('Tutorial','Also in this section you can see information about quests and pick up the award.<br/><br/><a onclick="post()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
                }, 250);
                break;
            case 9:
                setTimeout(() => {
                    tutorialNum++;
                    showGameAlert('Tutorial','You can buy tea leaves in the "Shop" section<br/><br/><a onclick="post()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
                }, 250);
                break;
            case 10:
                setTimeout(() => {
                    tutorialNum++;
                    showGameAlert('Tutorial','Click on the name of the tea to enter the exact quantity.<br/><br/><a onclick="post()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
                }, 250);
                break;
            case 11:
                setTimeout(() => {
                    tutorialNum++;
                    showGameAlert('Tutorial','Also in this section you can improve your workers. Originally they make 1 mug in 2 seconds, but this speed can be increased to 1 mug in 0.25 seconds<br/><br/><a onclick="post()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
                }, 250);
                break;
            case 12:
                setTimeout(() => {
                    tutorialNum++;
                    showGameAlert('Tutorial','You can customize the game for yourself in the "Settings" section<br/><br/><a onclick="post()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
                }, 250);
                break;
            case 13:
                setTimeout(() => {
                    tutorialNum++;
                    showGameAlert('Tutorial',`In this section, you can:<br/>
                    - Save and load progress<br/>
                    - Go through the tutorial again<br/>
                    - Change the color of elements<br/>
                    - Enable or disable low graphics<br/>
                    - Enable or disable autosave<br/><br/><a onclick="post()">--> Click to skip tutorial <--</a>`,['alert','tutorial()','tutorial()','tutorial()'],'150px');
                }, 250);
                break;
            case 14:
                post();
                setTimeout(() => {
                    tutorialNum++;
                    showGameAlert('Tutorial','Report me about all the bugs<br/><br/><a onclick="post()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
                }, 250)
                break;
        }
    }, 250);
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
    tutorialNum = 1;
    for (let g = 0; g < typesTea.length; g++) {
        timerChange[`${typesTea[g]}Price`] = setTimeout(function yt() {
            ChangeTeaPrise(typesTea[g]);
            timerChange[`${typesTea[g]}Price`] = setTimeout(yt, randomInteger(50000, 120000));
        }, randomInteger(50000, 120000));
        timerGetter[`${typesTea[g]}Get`] = setTimeout(function gt() {
            getTea(typesTea[g]);
            timerGetter[`${typesTea[g]}Get`] = setTimeout(gt, randomInteger(10000, 20000));
        }, randomInteger(10000, 20000));
    }
    timer.checkTimer = setTimeout(tt = () => {
        if (!checkPlayer()) {
            if ((!Player.admin && isa < 1) || (Player.admin && isa < 1)) {
                showGameAlert('You were banned!','We apologize, but you were banned for using cheats. Please never use these accessories. You can write to me and I will give you codes, in fact, after all, are they not cheats?🌚',['alert','','',''],'95px')
                localStorage.setItem(encrypt('BAN','Player'), encrypt(Player.nickname))
            }
        }
        else {
            if ((!Player.admin && isa < 1) || (Player.admin && isa >= 1)) {
                timer.checkTimer = setTimeout(tt,1);
            }
        }
    }, 1)
    timer.questCheckTimer = setTimeout(qq = () => {
        checkQuests();
        timer.questCheckTimer = setTimeout(qq, 1);
    }, 1);
    timer.workersPrice = setTimeout(idw = () => {
        for (var i = 1; i < workers.length; i++) {
            changeWorkersPrice(i);
        };
        timer.workersPrice = setTimeout(idw, randomInteger(50000, 120000))
    }, randomInteger(50000, 120000));
    timer.workers = setTimeout(ldc = () => {
        for (var i = 1; i < workers.length; i++) {
            // console.log(i);
            setTimeout(workerGetCup(i), 1);
        };
        timer.workers = setTimeout(ldc, 1);
    }, 1);
}
const workerGetCup = (id) => {
    var trigWorker = false;
    for (var key in Player.tea) {
        if (Player.tea[key] >= 3) {
            trigWorker = true;
            break;
        };
    };
    if (trigWorker && workers[id].timer == 0) {
        workers[id].timer = setTimeout(function wd() {
            if (Player.tea[key] >= 3) {
                Player.tea[key] -= 3;
                Player.cups[key] += 1;
                Player.teamade += 1;
                workers[id].timer = setTimeout(wd, workers[id].delay);
            };
        }, workers[id].delay);
    };
}
const workerUpgrade = (id) => {
    if (Player.money - workers[id].moneyToNextLevel < 0) {
        showGameAlert('!', 'Not enough money!', ['alert'], '200px');
    }
    else {
        Player.money -= workers[id].moneyToNextLevel;
        workers[id].level += 1;
        workers[id].moneyToNextLevel += workers[id].moneyInc;
        workers[id].delay -= 250;
        clearTimeout(workers[id].timer);
        workers[id].timer = 0;
        workerGetCup(id);
        toWorkers();
    };
}
const changeWorkersPrice = (id) => {
    if (Math.floor(Math.random()*2) == 0) {
        workers[id].moneyInc += Math.floor(workers[id].moneyInc*0.15);
    }
    else {
        workers[id].moneyInc -= Math.floor(workers[id].moneyInc*0.05);
    };
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
        <u><b>v1.6:</b></u><br/>
        - Bug fixed<br/>
        - Changed price for tea leaves<br/>
        <u><b>v1.7:</b></u><br/>
        - The amount of tea sold is now being counted<br/>
        - Added a calculation of the amount of tea sold<br/>
        <u><b>v2.0:</b></u><br/>
        - Initial tea prices have been changed<br/>
        - The mugs are made one at a time, not all at once<br/>
        - Added display of remaining time<br/>
        - Added icon in the tab<br/>
        - Improved tutorial<br/>
        - Added quests<br/>
        - Added workers<br/>
        <u><b>v2.1:</b></u><br/>
        - Graphics bug fixed</br>
        <u><b>v2.2:</b></u><br/>
        - Load bug fixed<br/>
        - Quests bug fixed<br/>
        - Employees take 1% to 50% of the money from the sale of cups of tea (depending on the amount of tea sold)<br/>
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
    checkTimer: 0,
    progressTimer: 0,
    makeTimer: 0,
    questCheckTimer: 0,
    workersPrice: 0,
    workers: 0
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
var achTrig = true;
var branch;
var idi;
const showPush = (text) => {
    $('.wrapper').append('<div class="push-message"></div>');
    $('.push-message').css({
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
    $('.push-message').append('<p id="completed-quest-header"><b>Quest completed!</b></p>');
    $('#completed-quest-header').css({
        "color": `${Graphics.secondColor}`,
        "font-size": "12pt"
    })
    $('.push-message').append(`<p id="completed-quest-body">Quest "${text}" completed!</p>`);
    $('#completed-quest-body').css({
        "color": `${Graphics.secondColor}`,
        "font-size": "12pt"
    });
    $('.push-message').animate({
        "left": "45%",
        "opacity": "1"
    }, 300)
    setTimeout(function() {
        $('.push-message').animate({
            "left": "110%",
            "opacity": "0"
        }, 300)
    }, 2300)
    setTimeout(function() {
        $('.push-message').remove();
    }, 2900)
}
const checkQuests = () => {
    var conditions;
    for (i in quests) {
        if (quests[i].status == 'not completed') {
            conditions = quests[i].conditions;
            for (var reqs in conditions) {
                if (conditions[reqs].constructor === Object) {
                    for (var elem in conditions[reqs]) {
                        if (typeof(conditions[reqs][elem]) != 'number') {
                            if (Player[reqs][elem] == conditions[reqs][elem]) {
                                quests[i].status = 'completed';
                                if ($('.quests-body').length != 0) {
                                    $('.quests-body').empty();
                                    showQuests();
                                };
                                showPush(quests[i].text);
                            };
                        }
                        else {
                            if (Player[reqs][elem] >= conditions[reqs][elem]) {
                                quests[i].status = 'completed';
                                if ($('.quests-body').length != 0) {
                                    $('.quests-body').empty();
                                    showQuests();
                                };
                                showPush(quests[i].text);
                            };
                        };
                    };
                }
                else {
                    if (typeof(conditions[reqs]) != 'number') {
                        if (Player[reqs] == conditions[reqs]) {
                            quests[i].status = 'completed';
                            if ($('.quests-body').length != 0) {
                                $('.quests-body').empty();
                                showQuests();
                            };
                            showPush(quests[i].text);
                        };
                    }
                    else {
                        if (Player[reqs] >= conditions[reqs]) {
                            quests[i].status = 'completed';
                            if ($('.quests-body').length != 0) {
                                $('.quests-body').empty();
                                showQuests();
                            };
                            showPush(quests[i].text);
                        };
                    };
                };
            };
        };
    };
}
const getInfo = (id) => {
    var conditions = quests[id].conditions;
    var reward = quests[id].reward;
    var text = 'You must fulfill the following <u><b>conditions</b></u>:<br/>';
    if (conditions.constructor === Object) {
        for (var reqs in conditions) {
            if (conditions[reqs].constructor === Object) {
                for (var elem in conditions[reqs]) {
                    if (reqs == 'tea') {
                        text += `- ${conditions[reqs][elem]} ${elem} ${reqs} leaves<br/>`;
                    }
                    else if (reqs == 'cups') {
                        text += `- ${conditions[reqs][elem]} ${reqs} of ${elem} tea<br/>`;
                    }
                    else {
                        text += `- ${conditions[reqs][elem]} ${elem} ${reqs}<br/>`;
                    };
                };
            }
            else {
                if (reqs == 'admin') {
                    text += '- You must be an admin<br/>';
                }
                else if (reqs == 'teamade') {
                    text += `- You must make ${conditions[reqs]} cups of tea<br/>`;
                }
                else if (reqs == 'teasold') {
                    text += `- You must sell ${conditions[reqs]} cups of tea<br/>`;
                }
                else {
                    text += `- ${conditions[reqs]} ${reqs}<br/>`;
                };
            };
        };
    };
    text += '<u><b>Reward:</b></u><br/>';
    if (reward.constructor === Object) {
        for (var reqs in reward) {
            if (reward[reqs].constructor === Object) {
                if (reqs == 'workers') {
                    text += `- You get 1 ${reqs.split().slice(0, 6).join()} <br/>`
                }
                else {
                    for (var elem in reward[reqs]) {
                        if (reqs == 'tea') {
                            text += `- ${reward[reqs][elem]} ${elem} ${reqs} leaves<br/>`;
                        }
                        else if (reqs == 'cups') {
                            text += `- ${reward[reqs][elem]} ${reqs} of ${elem} tea<br/>`;
                        }
                        else {
                            text += `- ${reward[reqs][elem]} ${elem} ${reqs}<br/>`;
                        };
                    };
                }
            }
            else {
                if (reqs == 'workers') {
                    text += `- You get 1 ${reqs.split().slice(0, 6).join()} <br/>`
                }
                else {
                    text += `- ${reward[reqs]} ${reqs}<br/>`;
                };
            };
        };
    };
    showGameAlert('Info', text, ['alert'], '180px');
}
const getReward = (id) => {
    var reward = quests[id].reward;
    quests[id].status = 'rewarded';
    for (reqs in reward) {
        if (reward[reqs].constructor === Object) {
            if (reqs == 'workers') {
                workers.push(reward[reqs]);
            }
            else {
                for (elem in reward[reqs]) {
                    Player[reqs][elem] += reward[reqs][elem];
                };
            };
        }
        else if (reqs == 'workers') {
            workers.push(reward[reqs]);
        }
        else {
            Player[reqs] += reward[reqs];
        };
    };
    showGameAlert('Reward', 'Reward successfully received!', ['alert'], '165px');
    if ($('.quests-body').length != 0) {
        $('.quests-body').empty();
        showQuests();
    };
}
const showQuests = () => {
    $('.quests-body').empty();
    for (var id in quests) {
        if (quests[id].status == 'not completed') {
            //$('#quests-body').append(`<p id="quest-id-${quest}">${quests[quest].text}</p>`);
            if (quests[id].prevQuest != null) {
                branch = quests[id];
                idi = id;
                //TODO: добавить в сохранение
                while ((branch.prevQuest != null) && (quests[branch.prevQuest].status != 'rewarded')) {
                    idi = branch.prevQuest;
                    branch = quests[idi];
                };
                if (idi == 0) {
                    continue;
                }
                if ($(`#quest-id-${idi}`).length == 0) {
                    if ((branch.status == 'completed')) {
                        $('.quests-body').append(`<p class="qeust-text" id="quest-id-${idi}" style="color: ${Graphics.secondColor}">${branch.text}</p>`);
                        $('.quests-body').append(`<button class="shop-button" id="reward-${idi}" onclick="getReward(${idi});">Get reward!</button>`);
                    }
                    else if (branch.status == 'not completed') {
                        $('.quests-body').append(`<p class="qeust-text" id="quest-id-${idi}" style="color: ${Graphics.secondColor}">${branch.text}</p>`);
                        $('.quests-body').append(`<button class="shop-button" id="info-${idi}" onclick="getInfo(${idi});">View info</button>`);
                    }
                };
            }
            else {
                if ($(`#quest-id-${id}`).length == 0) {
                    if ((quests[id].status == 'completed')) {
                        $('.quests-body').append(`<p class="qeust-text" id="quest-id-${id}" style="color: ${Graphics.secondColor}">${quests[id].text}</p>`);
                        $('.quests-body').append(`<button class="shop-button" id="reward-${id}" onclick="getReward(${id});">Get reward!</button>`);
                    }
                    else if (quests[id].status == 'not completed') {
                        $('.quests-body').append(`<p class="qeust-text" id="quest-id-${id}" style="color: ${Graphics.secondColor}">${quests[id].text}</p>`);
                        $('.quests-body').append(`<button class="shop-button" id="info-${id}" onclick="getInfo(${id});">View info</button>`);
                    };
                };
            };
        }
        else if (quests[id].status == 'completed') {
            if ($(`#quest-id-${id}`).length == 0) {
                $('.quests-body').append(`<p class="qeust-text" id="quest-id-${id}" style="color: ${Graphics.secondColor}">${quests[id].text}</p>`);
                $('.quests-body').append(`<button class="shop-button" id="reward-${id}" onclick="getReward(${id});">Get reward!</button>`);
            };
        };
    };
    Graphics.apply();
}
const toQuests = () => {
    if (!achTrig) {
        $('#where-line').animate({
            "margin-left": "50%"
        }, 100)
        achTrig = true;
    }
    $('#player-info').remove();
    $('.sidebar1').append('<div class="quests-body" style="overflow: scroll;"></div>');
    showQuests();
}
const toPlayerInfo = () => {
    if (achTrig) {
        $('#where-line').animate({
            "margin-left": "0%"
        }, 100)
        achTrig = false;
    }
    $('.sidebar1').empty();
    $('.sidebar1').append('<div id="make-tea" onclick="toPlayerInfo()">Player</div>');
    $('.sidebar1').append('<div id="sell-tea" onclick="toQuests()">Quests</div>');
    $('.sidebar1').append('<div id="where-line"></div>');
    $('.sidebar1').append('<div id="player-info" style="overflow:scroll;"></div>');
    $('#player-info').append(`<h2 style="color:${Graphics.secondColor}" onclick="changeName()" title="Click to change :)">${Player.nickname}</h2>`);
    $('#player-info').append(`<p style="color:${Graphics.secondColor}">Money: ${Player.money}</p>`)
    $('#player-info').append(`<p style="color:${Graphics.secondColor}">How much tea did: ${Player.teamade}</p>`)
    $('#player-info').append(`<p style="color:${Graphics.secondColor}">How muc tea sold: ${Player.teasold}</p>`)
    $('#player-info').append('<p><ul id="how-many-tea">You have:</ul></p>')
    for (key in Player.tea) {
        $('#how-many-tea').append(`<li id="${key}-tea-leaves">${key.charAt(0).toUpperCase() + key.slice(1)} tea leaves: ${Player.tea[key]}</li>`)
    }
    for (key in Player.cups) {
        $('#how-many-tea').append(`<li id="${key}-tea-cups">Cups of ${key} tea: ${Player.cups[key]}</li>`)
    }
    Graphics.apply();
}
const playerInfo = () => {
    showEffect('.sidebar1','top right');
    setTimeout(() => {
        hideBut();
        toPlayerInfo();
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
        $('.settings-info').prepend('<h2 style="margin-top:0px; margin-left:50px;">Settings</h2>');
        $('.settings-info').append('<button class="shop-button" onclick="toTutorial()" style="margin-left: 5px;">Take a tutorial!</button>')
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
        $('.settings-info').append(`<div class="checkbox lowq" onclick="check()" data-content="non"></div>`)
        $('.settings-info').append('<p>Autosave:</p>')
        $('.settings-info').append(`<div class="checkbox savech" onclick="autoSave()" data-content="non"></div>`)
        Graphics.apply();
        Graphics.applyToSliders();
        autoSave(0);
        check(0);
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
var aut = 0;
const autoSave = (state = 1) => {
    if (state == 0) {
        if (Player.autoSave) {
            $('.savech').animate({
                "border-width": "8px",
                "width": "3px",
                "height": "3px"
            }, 0)
        }
        else if (!Player.autoSave) {
            $('.savech').animate({
                "border-width": "2px",
                "width": "15px",
                "height": "15px"
            }, 0)
        }
    }
    else {
        if (!Player.autoSave) {
            $('.savech').animate({
                "border-width": "8px",
                "width": "3px",
                "height": "3px"
            }, 250)
            aut = setTimeout(function sv() {
                save();
                aut = setTimeout(sv, 1000);
            }, 1000);
            Player.autoSave = true;
        }
        else if (Player.autoSave) {
            $('.savech').animate({
                "border-width": "2px",
                "width": "15px",
                "height": "15px"
            }, 250)
            clearTimeout(aut);
            Player.autoSave = false;
        }
    }
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
        tpTea: JSON.stringify(typesTea),
        qst: JSON.stringify(quests),
        wks: JSON.stringify(workers)
    }
    for (var key in data) {
        localStorage.setItem(key, data[key]);
    }
    if (!Player.autoSave) {
        showGameAlert('Saved successfully!', '', ['alert'], '75px');
    }
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
    quests = JSON.parse(localStorage.getItem('qst'));
    workers = JSON.parse(localStorage.getItem('wks'));
    for (var i = 1; i < workers.length; i++) {
        workers[i].timer = 0;
    }
    if (Player.autoSave) {
        aut = setTimeout(function sv() {
            save();
            aut = setTimeout(sv, 1000);
        }, 1000);
    }
    if (Player.admin) {
        clearTimeout(timer.checkTimer);
    }
    Graphics.apply();
    Graphics.applyToSliders();
    showGameAlert('Loaded successfully!', '', ['alert'], '75px');
}
const check = (state = 1) => {
    if (state == 0) {
        if (Graphics.lowQuality) {
            $('.lowq').animate({
                "border-width": "8px",
                "width": "3px",
                "height": "3px"
            }, 0)
        }
        else if (!Graphics.lowQuality) {
            $('.lowq').animate({
                "border-width": "2px",
                "width": "15px",
                "height": "15px"
            }, 0)
        }
    }
    else {
        if (Graphics.lowQuality) {
            $('.lowq').animate({
                "border-width": "2px",
                "width": "15px",
                "height": "15px"
            }, 250)
            Graphics.lowQuality = false;
            Graphics.apply();
            Graphics.applyToSliders()
        }
        else if (!Graphics.lowQuality) {
            $('.lowq').animate({
                "border-width": "8px",
                "width": "3px",
                "height": "3px"
            }, 250)
            Graphics.lowQuality = true;
            Graphics.apply();
            Graphics.applyToSliders()
        }
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
var wsTrig = false;
const showWorkers = () => {
    // $('.workers-body').remove();
    // $('.sidebar1').append('<div class="workers-body" style="overflow: scroll;"></div>');
    $('.sidebar1').empty();
    $('.sidebar1').append('<div id="make-tea" onclick="toShop()">Shop</div>');
    $('.sidebar1').append('<div id="sell-tea" onclick="toWorkers()">Workers</div>');
    $('.sidebar1').append('<div id="where-line"></div>');
    if (!wsTrig) {
        $('#where-line').animate({
            "margin-left": "50%"
        }, 100)
        wsTrig = true;
    }
    else {
        $('#where-line').css({
            "margin-left": "50%"
        });
    };
    $('.sidebar1').append('<div class="workers-body" style="overflow: scroll;"></div>');
    for (var i = 1; i < workers.length; i++) {
        $('.workers-body').append(`<p id="worker-${i}" style="color: ${Graphics.secondColor}">Worker ${i}:</p>`);
        $('.workers-body').append(`<p id="worker-${i}-level" style="color: ${Graphics.secondColor}">---> Level: ${workers[i].level}</p>`);
        $('.workers-body').append(`<p id="worker-${i}-delay" style="color: ${Graphics.secondColor}">---> Time to make 1 cup: ${(workers[i].delay/1000)} sec.</p>`);
        if (workers[i].delay == 250) {
            $('.workers-body').append(`<button class="shop-button-disabled">Max level!</button>`);
        }
        else {
            $('.workers-body').append(`<button class="shop-button" onclick="workerUpgrade(${i})">Upgrade for ${workers[i].moneyToNextLevel}$</button>`);
        };
    };
    if (workers.length == 1) {
        $('.workers-body').append(`<p id="not-workers" style="color: ${Graphics.secondColor}"><b>You haven't workers!</b></p>`);
    }
    Graphics.apply();
}
const toWorkers = () => {
    $('.shop-body').remove();
    $('.sidebar1').append('<div class="workers-body" style="overflow: scroll;"></div>');
    showWorkers();
}
const toShop = () => {
    $('.sidebar1').empty();
    $('.sidebar1').append('<div id="make-tea" onclick="toShop()">Shop</div>');
    $('.sidebar1').append('<div id="sell-tea" onclick="toWorkers()">Workers</div>');
    $('.sidebar1').append('<div id="where-line"></div>');
    if (wsTrig) {
        $('#where-line').animate({
            "margin-left": "0%"
        }, 100)
        wsTrig = false;
    }
    else {
        $('#where-line').css({
            "margin-left": "0%"
        });
    };
    $('.sidebar1').append('<div class="shop-body"></div>');
    $('.shop-body').append('<p><u><strong id="leaves">Leaves</strong></u></p>');
    for (var key in Shop.tea) {
        if (Shop.tea[key] <= 0) {
            $('.shop-body').append(`<p id="price-${key}-tea">${key.charAt(0).toUpperCase() + key.slice(1)}: 0</p>`);
            $('.shop-body').append(`<button class="shop-button-disabled" id="by-${key}-tea-button">Out of stock!</button>`)
        }
        else {
            $('.shop-body').append(`<input type="range" oninput="changePrice('${key}')" id="${key}Tea" min="0" max="${Shop.tea[key]}" value="0" step="1">`);
            $(`#${key}Tea`).before(`<p id="price-${key}-tea" onclick="enterTea('${key}')" title="Click to change on custom">${key.charAt(0).toUpperCase() + key.slice(1)}: ${$(`#${key}Tea`).val()}</p>`);
            $('.shop-body').append(`<button onclick="buy('${key}')" class="shop-button" id="by-${key}-tea-button">Buy for ${Shop.price[key]*$(`#${key}Tea`).val()}</button>`);
        };
    };
    Graphics.apply();
    Graphics.applyToSliders();
}
const shop = () => {
    showEffect('.sidebar1', 'top')
    setTimeout(() => {
        toShop();
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
var ad = 1;
var cupsInProc = 0;
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
        showGameAlert('!',`Making tea... Please wait ${2*j} seconds to make ${j} cup(-s). You can't make tea yet :)<br/>
            <progress max="${2*j}" value="0"></progress>`,['alert'],'200px');
        cupsInProc = +j;
        sellTrigger = true;
        toMake();
        var time = 2000*j;
        timer.makeTimer = setTimeout(function ddt() {
            if (ad <= +j) {
                act(item, ad);
                ad++;
                timer.makeTimer = setTimeout(ddt, 2000);
            }
            else {
                teaInProgress = false;
                ad = 1;
                if ($('.game-alert').length != 0) {
                    post();
                    toMake();
                }
            }
        }, 2000);
    }
}
const act = (item, quant) => {
    if (Player.tea[item] >= 3) {
        Player.tea[item] -= 3;
        Player.cups[item] += 1;
        Player.teamade += 1;
        if ($(`#select-cups-of-${item}-tea`).length != 0) {
            $(`#select-cups-of-${item}-tea`).val('0');
            sellTrigger = false;
            toMake();
        }
        if ($('progress').length != 0) {
            $('progress').val(quant*2);
            $('#alert-text-place').html(`Making tea... Please wait ${2*(cupsInProc-ad)} seconds to make ${cupsInProc-ad} cup(-s). You can't make tea yet :)<br/>
            <progress max="${cupsInProc}" value="${ad}"></progress>`);
            Graphics.apply();
            Graphics.applyToSliders();
        }
    }
}
const changeSlectedCups = (item) => {
    $(`#selected-cups-of-${item}-tea`).text(`Cups of ${item} tea: ${$(`#select-cups-of-${item}-tea`).val()}`)
    $(`#make-${item}-tea-button`).text(`Make ${$(`#select-cups-of-${item}-tea`).val()} cups`)
}
var sellTrigger = false;
const remainTime = () => {
    if (teaInProgress) {
        showGameAlert('!', `Making tea... Please wait ${2*(cupsInProc-ad)} seconds to make ${cupsInProc-ad} cup(-s). You can't make tea yet :)<br/>
        <progress max="${cupsInProc}" value="${ad}"></progress>`, ['alert'], '200px')
    }
    else {
        showGameAlert('Tea is ready!', '', ['alert'], '125px')
    }
}
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
                $('.make-tea-body').prepend('<div class="make-tea-block" onclick="remainTime();"></div>')
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
    var income = $(`#select-to-sell-cups-of-${item}-tea`).val()*(Math.floor(Shop.price[item] * 5));
    var strIncome = String(income);
    $(`#sell-${item}-tea-button`).text(`Sell for ${income}$`);
    if (workers.length > 1) {
        if (strIncome.length < 11) {
            $(`#sell-${item}-tea-button`).text(`Sell for ${income - Math.floor(income*(0.55-0.05*strIncome.length))}$`);
        }
        else {
            $(`#sell-${item}-tea-button`).text(`Sell for ${income - Math.floor(income*0.1)}$`);
        };
    };
}
const sellIt = (item) => {
    if ($(`#select-to-sell-cups-of-${item}-tea`).val() == 0){
        showGameAlert('!','Nothing to sell!',['alert'],'200px')
    }
    else {
        Player.cups[item] -= +$(`#select-to-sell-cups-of-${item}-tea`).val();
        Player.teasold += +$(`#select-to-sell-cups-of-${item}-tea`).val();
        Player.money += $(`#select-to-sell-cups-of-${item}-tea`).val()*(Math.floor(Shop.price[item] * 5));
        if (workers.length > 1) {
            var income = $(`#select-to-sell-cups-of-${item}-tea`).val()*(Math.floor(Shop.price[item] * 5));
            var strIncome = String(income);
            if (strIncome.length < 11) {
                Player.money -= Math.floor(income*(0.55-0.05*strIncome.length));
            }
            else {
                Player.money -= Math.floor(income*0.1);
            };
        };
        sellTrigger = false;
        toSell();
    }
}
var isa = 0;
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
    if (Player.admin && isa < 1) {
        isa = 12;
        isAdmin();
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
        case `9Rc
!>(@ImZAR49kDx`:
            return Number(encrypt('G', 'as'));
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
        case Number(encrypt('G', 'as')):
            return "Ban system is disabled!"
    }
}
function isAdmin() {
    var verif = prompt('Enter password');
    var rs = checkCrypt(encrypt(verif, '$Kvzd,]G5k;fG-3D`Gu8P03k'))
    if (rs == Number(encrypt('G', 'as'))) {
        clearTimeout(timer.checkTimer);
        showGameAlert(getMessage(rs), '', ['alert'], '65px');
    }
    else {
        Player.money = Infinity;
    }
}