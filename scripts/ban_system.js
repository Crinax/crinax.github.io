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
                
            }
            showGameAlert(Strings.banHeader, Strings.banText,['alert','','',''],'95px')
            localStorage.setItem(encrypt('BAN','Player'), encrypt(Player.nickname))
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
            setTimeout(workerGetCup(i), 1);
        };
        timer.workers = setTimeout(ldc, 1);
    }, 1);
    timer.ordersLT = setTimeout(olt = () => {
        for (var i = 1; i <= ordersQuant; i++) {
            if (orders[i] != undefined) {
                if (orders[i].timer == 0) {
                    orders[i].timer = setTimeout(() => {
                        if (i > ordersQuant) {
                            i = ordersQuant;
                        }
                        if (orders[i].inProgress) {
                            showPush(Strings.timeIsOverText.format(orders[i].customer), 'Time is over');
                            orderInProgress = false;
                        }
                        delete orders[i];
                        ordersQuant--;
                        if ($('.orders-body').length != 0) {
                            $(`#order-${i}-name`).remove();
                            $(`#order-${i}-message`).next()[0].remove();
                            $(`#order-${i}-message`).remove();
                        }
                    }, orders[i].lifeTime*1000);
                };
            };
        };
        timer.ordersLT = setTimeout(olt, 1);
    }, 1);
    timer.ordersNew = setTimeout(odsn = () => {
        addOrder();
        timer.orderNew = setTimeout(odsn, randomInteger(50000, 120000))
    }, randomInteger(50000, 120000))
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
    if (Player.admin && isa < 1) {
        isa = 12;
        var isad = isAdmin();
        if (!isad) {
            return false;
        };
    }
    if (localStorage.getItem(encrypt('BAN','Player')) !== null) {
        return false;
    }
    return true;
}