const showWorkers = () => {
    // $('.workers-body').remove();
    // $('.sidebar1').append('<div class="workers-body" style="overflow: scroll;"></div>');
    $('.sidebar1').empty();
    $('.sidebar1').append(`<div id="make-tea" onclick="toShop()">${Strings.shop}</div>`);
    $('.sidebar1').append(`<div id="sell-tea" onclick="toWorkers()">${Strings.workers}</div>`);
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
        $('.workers-body').append(`<p id="worker-${i}" style="color: ${Graphics.secondColor}">${Strings.worker} ${i}:</p>`);
        $('.workers-body').append(`<p id="worker-${i}-level" style="color: ${Graphics.secondColor}">-> ${Strings.workerLevel}: ${workers[i].level}</p>`);
        $('.workers-body').append(`<p id="worker-${i}-delay" style="color: ${Graphics.secondColor}">-> ${Strings.workerTime.format((workers[i].delay/1000))}</p>`);
        if (workers[i].delay == 250) {
            $('.workers-body').append(`<button class="shop-button-disabled up-worker-${i}-disabled">${Strings.maxLevel}</button>`);
        }
        else {
            $('.workers-body').append(`<button class="shop-button up-worker-${i}" onclick="workerUpgrade(${i})">${Strings.upgradeFor.format(workers[i].moneyToNextLevel)}</button>`);
        };
    };
    if (workers.length == 1) {
        $('.workers-body').append(`<p id="not-workers" style="color: ${Graphics.secondColor}"><b>${Strings.haventWorkers}</b></p>`);
    }
    Graphics.apply();
}
const toWorkers = () => {
    $('.shop-body').remove();
    $('.sidebar1').append('<div class="workers-body" style="overflow: scroll;"></div>');
    showWorkers();
}
const workerGetCup = (id) => {
    // var trigWorker = false;
    // for (var key in Player.tea) {
    //     if (Player.tea[key] >= 3) {
    //         trigWorker = true;
    //         break;
    //     };
    // };
    if (Player.tea[workers[id].tea] < 3) {
        clearTimeout(workers[id].timer);
        workers[id].timer = 0;
    }
    if (/*trigWorker && */workers[id].timer == 0) {
        // workers[id].tea = key;
        clearTimeout(workers[id].timer);
        workers[id].timer = setTimeout(function wd() {
            if (Player.tea[workers[id].tea] >= 3) {
                Player.tea[workers[id].tea] -= 3;
                Player.cups[workers[id].tea] += 1;
                Player.teamade += 1;
                workers[id].timer = setTimeout(wd, workers[id].delay);
            };
        }, workers[id].delay);
    };
}
const workerUpgrade = (id) => {
    if (Player.money - workers[id].moneyToNextLevel < 0) {
        showGameAlert('!', Strings.notEnoughMoney, ['alert'], '200px');
    }
    else {
        Player.money -= workers[id].moneyToNextLevel;
        workers[id].level += 1;
        workers[id].moneyToNextLevel += workers[id].moneyInc;
        workers[id].delay -= 250;
        clearTimeout(workers[id].timer);
        workers[id].timer = 0;
        workerGetCup(id);
        /*toWorkers();*/
        //id="worker-${i}", id="worker-${i}-level", id="worker-${i}-delay", class="shop-button up-worker-${i}"
        $(`#worker-${id}-level`).text(`-> ${Strings.workerLevel}: ${workers[id].level}`);
        $(`#worker-${id}-delay`).text(`-> ${Strings.workerTime.format((workers[id].delay/1000))}`);
        if (workers[id].delay == 250) {
            $(`.up-worker-${id}`).remove();
            $(`#worker-${id}-delay`).after(`<button class="shop-button-disabled up-worker-${i}-disabled">${Strings.maxLevel}</button>`);
            $(`.up-worker-${id}-disabled`).text(Strings.maxLevel);
        }
        else {
            $(`.up-worker-${id}`).text(Strings.upgradeFor.format(workers[id].moneyToNextLevel));
        };
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