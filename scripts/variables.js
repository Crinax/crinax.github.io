var names = [
    'Mike',
    'Daniel',
    'Jessica',
    'Kylie',
    'Kai',
    'Yuri',
    'Alisa',
    'Pandora',
    'Atlas',
    'Luna',
    'Leia'
]
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
    workers: [null],
    quests: {
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
                workers: new Worker(1, 100000, 50000, 3000, 0, 'green')
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
                workers: new Worker(1, 100000, 50000, 3000, 0, 'yellow')
            },
            status: 'not completed',
            nextQuest: null
        },
        13: {
            prevQuest: null,
            text: `The only thing I'd like to know is, what is color?`,
            conditions: {
                colorChanged: true
            },
            reward: {
                tea: {
                    black: 5
                },
                money: 500
            },
            status: 'not completed',
            nextQuest: null
        },
        14: {
            prevQuest: null,
            text: 'Junior workers',
            conditions: {
                workers: {
                    level: 3
                }
            },
            reward: {
                money: 200000,
                cups: {
                    yellow: 100
                }
            },
            status: 'not completed',
            nextQuest: 15
        },
        15: {
            prevQuest: 14,
            text: 'Middle workers',
            conditions: {
                workers: {
                    level: 6
                }
            },
            reward: {
                money: 1000000,
                cups: {
                    white: 100
                }
            },
            status: 'not completed',
            nextQuest: 16
        },
        16: {
            prevQuest: 15,
            text: 'Senior workers',
            conditions: {
                workers: {
                    level: 12
                }
            },
            reward: {
                money: 5000000,
                cups: {
                    puer: 100
                }
            },
            status: 'not completed',
            nextQuest: null
        },
        17: {
            prevQuest: null,
            text: 'Tutorial master',
            conditions: {
                tutorialCompleted: true
            },
            reward: {
                tea: {
                    black: 10
                }
            },
            status: 'not completed',
            nextQuest: null
        },
        18: {
            prevQuest: null,
            text: 'I am admin!',
            conditions: {
                admin: true
            },
            reward: {

            },
            status: 'not completed',
            nextQuest: null
        },
        19: {
            prevQuest: null,
            text: 'Freelancer',
            conditions: {
                ordersCompleted: 5
            },
            reward: {
                cups: {
                    red: 4
                }
            },
            status: 'not completed',
            nextQuest: 20
        },
        20: {
            prevQuest: 19,
            text: 'Hired worker',
            conditions: {
                ordersCompleted: 25
            },
            reward: {
                cups: {
                    white: 10,
                    oolong: 2
                }
            },
            status: 'not completed',
            nextQuest: 21
        },
        21: {
            prevQuest: 20,
            text: 'Last worker',
            conditions: {
                ordersCompleted: 125
            },
            reward: {
                cups: {
                    oolong: 25,
                    puer: 20
                }
            },
            status: 'not completed',
            nextQuest: null
        },
        22: {
            prevQuest: null,
            text: 'First quest!',
            conditions: {
                questsCompleted: 1,
            },
            reward: {
                cups: {
                    black: 1
                }
            },
            status: 'not completed',
            nextQuest: 23
        },
        23: {
            prevQuest: 22,
            text: 'Advanced player',
            conditions: {
                questsCompleted: 5
            },
            reward: {
                cups: {
                    white: 10
                },
                tea: {
                    oolong: 1
                }
            },
            status: 'not completed',
            nextQuest: 24
        },
        24: {
            prevQuest: 23,
            text: 'Best player',
            conditions: {
                questsCompleted: 22
            },
            reward: {
                cups: {
                    oolong: 50,
                    puer: 10
                }
            },
            status: 'not completed',
            nextQuest: 25
        },
        25: {
            prevQuest: 24,
            text: 'Hacker',
            conditions: {
                questsCompleted: 24
            },
            reward: {
                money: Infinity
            },
            status: 'not completed',
            nextQuest: null
        }
    },
    orders: {
        1: {
            //text: 'Hi! I need 5 cups of black tea and 1 cup of green tea, can you lend me those?',
            customer: '',
            conditions: {
                cups: {
                    black: 5,
                    green: 1
                }
            },
            reward: 1000,
            lifeTime: 600, //seconds
            timer: 0,
            id: 1,
            inProgress: false
        }
    },
    colorChanged: false,
    tutorialCompleted: false,
    questsCompleted: 0,
    ordersCompleted: 0,
    autoSave: false,
    admin: false
};
var quests = Player.quests;
var workers = Player.workers;
var orders = Player.orders;
var orderInProgress = false;
var ordersQuant = 1;
for (var i in orders) {
    orders[i].customer = names[randomInteger(0, names.length-1)]
}
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
var Shop = {
    tea: {
        black:  5000,
        green:  5000,
        yellow: 5000,
        red:    1000,
        white:  1000,
        puer:   500,
        oolong: 100,
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
function Worker(level = 1, moneyToNextLevel = 100000, moneyInc = 50000, delay = 3000, timer = 0, tea = 'black') {
    this.level = level; //1
    this.moneyToNextLevel = moneyToNextLevel; //100000
    this.moneyInc = moneyInc; //50000
    this.delay = delay; //2000
    this.timer = timer; //0
    this.tea = tea;
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
var root = 0; //admin panel display taps
var tutorialNum = 1; //number of tutorial window
var timerChange = { //timer of changing tea prices
    greenPrice: 1000,
    blackPrice: 1000,
    yellowPrice: 1000,
    redPrice: 1000,
    whitePrice: 1000,
    oolongPrice: 1000,
    puerPrice: 1000
}

var timerGetter = { //timer of getting tea prices
    greenGet: 1000,
    blackGet: 1000,
    yellowGet: 1000,
    redGet: 1000,
    whiteGet: 1000,
    oolongGet: 1000,
    puerGet: 1000
}
var timer = { //some timers
    checkTimer: 0, //for ban system
    progressTimer: 0, //for progress bar
    makeTimer: 0, //???
    questCheckTimer: 0, //for quests check
    workersPrice: 0, //for changing workers upgrade price
    workers: 0, //for workers
    orders: 0, //for orders check
    ordersLT: 0, //for orders lifetime
    ordersNew: 0,
}
var typesTea = ['green','black','yellow','red','white','oolong','puer']; //types of tea
var achTrig = true; //for swipe achiviements
var branch; //for quests
var idi; //for quests
var aut = 0; //for auto save
var data = { //for save
    plr: null,
    shp: null,
    grp: null,
    rt: null,
    tmChg: null,
    tmGtr: null,
    tmr: null,
    tpTea: null
};
var wsTrig = false; //for swipe workers
var teaInProgress = false; //trigger for blocking make tea section
var ad = 1; //how much added cups
var cupsInProc = 0; //how much cups in process
var rTime = 0; //remainTime
var allTime = 0;
var sellTrigger = false; //for swipe sell tea section
var isa = 0; //is admin