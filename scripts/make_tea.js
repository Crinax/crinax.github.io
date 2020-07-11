const makeTea = () => {
    showEffect('.sidebar1', 'top left')
    setTimeout(() => {
        hideBut();
        $('.sidebar1').empty();
        $('.sidebar1').append('<div class="make-body"></div>');
        $('.make-body').append(`<div id="make-tea" onclick="toMake()">${Strings.make}</div>`);
        $('.make-body').append(`<div id="sell-tea" onclick="toSell()">${Strings.sell}</div>`);
        $('.make-body').append('<div id="where-line"></div>');
        sellTrigger = false;
        $('.make-body').append('<div class="make-tea-body"></div>')
        for (key in Player.tea) {
            if (Player.tea[key]/3 < 1) {
                $('.make-tea-body').append(`<p id="selected-cups-of-${key}-tea">${Strings.cupsOfTea[key]} 0</p>`);
                $('.make-tea-body').append(`<button class="shop-button-disabled" id="make-${key}-tea-button">${Strings.notEnoughTeaLeaves}</button>`)
            }
            else {
                $('.make-tea-body').append(`<input type="range" oninput="changeSlectedCups('${key}')" id="select-cups-of-${key}-tea" min="0" max="${Math.floor(Player.tea[key]/3)}" value="0" step="1">`)
                $(`#select-cups-of-${key}-tea`).before(`<p id="selected-cups-of-${key}-tea">${Strings.cupsOfTea[key]} ${$(`#select-cups-of-${key}-tea`).val()}</p>`);
                $('.make-tea-body').append(`<button onclick="makeIt('${key}')" class="shop-button" id="make-${key}-tea-button">${Strings.makeCups.format($(`#select-cups-of-${key}-tea`).val())}</button>`)
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
        showGameAlert('!',`${Strings.notEnoughTeaLeaves}<br /> ${Strings.tutorialMessage[2]}!`,['alert'],'200px');
    }
    else if ($(`#select-cups-of-${item}-tea`).val() == 0) {
        showGameAlert('!', Strings.nothingToMake,['alert'],'200px');
    }
    else {
        teaInProgress = true;
        var j = $(`#select-cups-of-${item}-tea`).val();
        cupsInProc = +j;
        sellTrigger = true;
        allTime = 2000*j/10/2;
        rTime = allTime;
        showGameAlert('!',`${Strings.makingTea.format(2*j+2, j+1)}<br/>
            <progress max="${allTime}" value="0"></progress>`,['alert'],'200px');
        toMake();
        timer.makeTimer = setTimeout(function ddt(ind) {
            if (ind <= allTime) {
                if (ind % 100 == 0) {
                    act(item, ad);
                    ad++;
                };
                ind++;
                rTime = ind;
                if ($('progress').length != 0) {
                    $('progress').val(ind);
                    $('#alert-text-place').html(`${Strings.makingTea.format(2*(cupsInProc-ad)+2, cupsInProc-ad+1)}<br/>
                        <progress max="${allTime}" value="${ind}"></progress>`);
                    Graphics.apply();
                    Graphics.applyToSliders();
                }
                timer.makeTimer = setTimeout(ddt, 0, ind);
            }
            else {
                teaInProgress = false;
                ad = 1;
                if ($('.game-alert').length != 0) {
                    post();
                    toMake();
                }
            }
        }, 0, 1);
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
        // if ($('progress').length != 0) {
        //     $('progress').val(quant*2);
        //     $('#alert-text-place').html(`${Strings.makingTea.format(2*(cupsInProc-ad), cupsInProc-ad)}<br/>
        //     <progress max="${cupsInProc}" value="${ad}"></progress>`);
        //     Graphics.apply();
        //     Graphics.applyToSliders();
        // }
    }
}
const changeSlectedCups = (item) => {
    $(`#selected-cups-of-${item}-tea`).text(`${Strings.cupsOfTea[item]} ${$(`#select-cups-of-${item}-tea`).val()}`)
    $(`#make-${item}-tea-button`).text(Strings.makeCups.format($(`#select-cups-of-${item}-tea`).val()))
}
const remainTime = () => {
    if (teaInProgress) {
        showGameAlert('!', `${Strings.makingTea.format(2*(cupsInProc-ad)+2, cupsInProc-ad+1)}<br/>
        <progress max="${allTime}" value="${rTime}"></progress>`, ['alert'], '200px');
    }
    else {
        showGameAlert(Strings.teaIsReady, '', ['alert'], '125px');
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
                $('.make-tea-body').append(`<p id="selected-cups-of-${key}-tea">${Strings.cupsOfTea[key]} 0</p>`);
                $('.make-tea-body').append(`<button class="shop-button-disabled" id="make-${key}-tea-button">${Strings.notEnoughTeaLeaves}</button>`)
            }
            else {
                $('.make-tea-body').append(`<input type="range" oninput="changeSlectedCups('${key}')" id="select-cups-of-${key}-tea" min="0" max="${Math.floor(Player.tea[key]/3)}" value="0" step="1">`)
                $(`#select-cups-of-${key}-tea`).before(`<p id="selected-cups-of-${key}-tea">${Strings.cupsOfTea[key]} ${$(`#select-cups-of-${key}-tea`).val()}</p>`);
                $('.make-tea-body').append(`<button onclick="makeIt('${key}')" class="shop-button" id="make-${key}-tea-button">${Strings.makeCups.format($(`#select-cups-of-${key}-tea`).val())}</button>`)
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