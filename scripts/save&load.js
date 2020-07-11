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
        ordInPrs: JSON.stringify(orderInProgress),
        ordQua: JSON.stringify(ordersQuant)
    }
    for (var key in data) {
        localStorage.setItem(key, data[key]);
    }
    if (!Player.autoSave) {
        showGameAlert(Strings.savedSuccess, '', ['alert'], '75px');
    }
}
const load = () => {
    for (key in data) {
        if (localStorage.getItem(key) == null) {
            return showGameAlert(Strings.loadErrHeader, Strings.loadErrText, ['alert'], '95px');
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
    quests = Player.quests;
    workers = Player.workers;
    orders = Player.orders;
    orderInProgress = localStorage.getItem('ordInPrs');
    ordersQuant = +localStorage.getItem('ordQua');
    for (var i = 1; i < workers.length; i++) {
        workers[i].timer = 0;
    }
    for (var i in orders) {
        orders[i].timer = 0;
        if (orders[i].inProgress) {
            timer.orders = setTimeout(ods = () => {
                if (!checkOrder(i)) {
                    timer.orders = setTimeout(ods, 1);
                }
                else {
                    timer.orders = 0;
                };
            }, 1);
        }
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
    showGameAlert(Strings.loadSuccess, '', ['alert'], '75px');
}