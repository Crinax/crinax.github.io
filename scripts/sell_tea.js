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
                $('.sell-tea-body').append(`<p id="selected-cups-of-${key}-tea">${Strings.cupsOfTea[key]} 0</p>`);
                $('.sell-tea-body').append(`<button class="shop-button-disabled" id="sell-${key}-tea-button">${Strings.noCupsToSell}</button>`)
            }
            else {
                $('.sell-tea-body').append(`<input type="range" oninput="changeSlectedCupsToSell('${key}')" id="select-to-sell-cups-of-${key}-tea" min="0" max="${Player.cups[key]}" value="0" step="1">`)
                $(`#select-to-sell-cups-of-${key}-tea`).before(`<p id="selected-to-sell-cups-of-${key}-tea">${Strings.cupsOfTea[key]} ${$(`#select-to-sell-cups-of-${key}-tea`).val()}</p>`);
                $('.sell-tea-body').append(`<button onclick="sellIt('${key}')" class="shop-button" id="sell-${key}-tea-button">${Strings.sellFor.format($(`#select-to-sell-cups-of-${key}-tea`).val()*(Math.floor(Shop.price[key] / 2)))}</button>`);
            }
        }
    }
    Graphics.apply();
    Graphics.applyToSliders();
}
const changeSlectedCupsToSell = (item) => {
    $(`#selected-to-sell-cups-of-${item}-tea`).text(`${Strings.cupsOfTea[item]} ${$(`#select-to-sell-cups-of-${item}-tea`).val()}`)
    var income = $(`#select-to-sell-cups-of-${item}-tea`).val()*(Math.floor(Shop.price[item] * 5));
    var strIncome = String(income);
    $(`#sell-${item}-tea-button`).text(Strings.sellFor.format(income));
    if (workers.length > 1) {
        if (strIncome.length < 11) {
            $(`#sell-${item}-tea-button`).text(Strings.sellFor.format(income - Math.floor(income*(0.55-0.05*strIncome.length))));
        }
        else {
            $(`#sell-${item}-tea-button`).text(Strings.sellFor.format(income - Math.floor(income*0.1)));
        };
    };
}
const sellIt = (item) => {
    if ($(`#select-to-sell-cups-of-${item}-tea`).val() == 0){
        showGameAlert('!', Strings.nothingToSell,['alert'],'200px')
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