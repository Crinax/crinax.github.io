const enterTea = (item) => {
    showGameAlert(Strings.enterTeaHeader, Strings.enterTeaText, ['prompt', '2', 'post()', `${item}`], '95px');
}
const setTea = (item, quan) => {
    if (quan.toLocaleLowerCase() == "max") {
        quan = Math.floor(Player.money / Shop.price[item]);
    }
    if (quan < Shop.tea[`${item}`]) {
        $(`#${item}Tea`).attr('value', quan);
        $(`#${item}Tea`).val(quan);
        $(`#price-${item}-tea`).text(`${Strings.typesOfTea[item]}: ${$(`#${item}Tea`).val()}`);
        $(`#by-${item}-tea-button`).text(Strings.buyFor.format(Shop.price[`${item}`]*$(`#${item}Tea`).val()));
    }
    else {
        $(`#${item}Tea`).attr('value', Shop.tea[`${item}`]);
        $(`#price-${item}-tea`).text(`${Strings.typesOfTea[item]}: ${$(`#${item}Tea`).val()}`);
        $(`#by-${item}-tea-button`).text(Strings.buyFor.format(Shop.price[`${item}`]*$(`#${item}Tea`).val()));
    }
}
const toShop = () => {
    $('.sidebar1').empty();
    $('.sidebar1').append(`<div id="make-tea" onclick="toShop()">${Strings.shop}</div>`);
    $('.sidebar1').append(`<div id="sell-tea" onclick="toWorkers()">${Strings.workers}</div>`);
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
    $('.shop-body').append(`<p><u><strong id="leaves">${Strings.leaves}</strong></u></p>`);
    for (var key in Shop.tea) {
        if (Shop.tea[key] <= 0) {
            $('.shop-body').append(`<p id="price-${key}-tea">${Strings.typesOfTea[key]}: 0</p>`);
            $('.shop-body').append(`<button class="shop-button-disabled" id="by-${key}-tea-button">${Strings.outOfStock}</button>`)
        }
        else {
            $('.shop-body').append(`<input type="range" oninput="changePrice('${key}')" id="${key}Tea" min="0" max="${Shop.tea[key]}" value="0" step="1">`);
            $(`#${key}Tea`).before(`<p id="price-${key}-tea" onclick="enterTea('${key}')" title="${Strings.enterTeaTitle}">${Strings.typesOfTea[key]}: ${$(`#${key}Tea`).val()}</p>`);
            $('.shop-body').append(`<button onclick="buy('${key}')" class="shop-button" id="by-${key}-tea-button">${Strings.buyFor.format(Shop.price[key]*$(`#${key}Tea`).val())}</button>`);
        };
    };
    Graphics.apply();
    Graphics.applyToSliders();
}
const shop = () => {
    showEffect('.sidebar1', 'top')
    setTimeout(() => {
        toShop();
    }, 200)
}
const buy = (item) => {
    if (Player.money - Shop.price[`${item}`]*$(`#${item}Tea`).val() < 0) {
        showGameAlert('!', Strings.notEnoughMoney,['alert'],'200px')
    }
    else if ($(`#${item}Tea`).val() == 0) {
        showGameAlert('!', Strings.nothingToBuy,['alert'],'200px')
    }
    else {
        showGameAlert('!', Strings.boughtSuccess,['alert'],'200px')
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
                $(`#by-${item}-tea-button`).text(Strings.outOfStock);
                $(`#by-${item}-tea-button`).removeAttr('onclick');
            }, 250)
        }
        else {
            $(`#${item}Tea`).attr('max',`${Shop.tea[`${item}`]}`)
        }
    }
}
const ChangeTeaPrise = (item) => {
    if (Math.floor(Math.random()*2) == 0) {
        Shop.price[`${item}`] += Math.floor(Shop.price[`${item}`]*0.15);
    }
    else {
        Shop.price[`${item}`] -= Math.floor(Shop.price[`${item}`]*0.05);
    }
    if ($(`#${item}Tea`).length != 0) {
        $(`#by-${item}-tea-button`).text(Strings.buyFor.format(Shop.price[`${item}`]*$(`#${item}Tea`).val()))
    }
}
const getTea = (item) => {
    Shop.tea[`${item}`] += Math.floor(Math.random()*50)
    if ((Shop.tea[`${item}`] > 0) && ($(`#${item}Tea`).length == 0)) {
        $(`#price-${item}-tea`).after(`<input type="range" oninput="changePrice('${item}')" id="${item}Tea" min="0" max="${Shop.tea[`${item}`]}" value="0" step="1">`)
        $(`#price-${item}-tea`).text(`${Strings.typesOfTea[item]}: ${$(`#${item}Tea`).val()}`);
        $(`#by-${item}-tea-button`).attr('class','shop-button');
        $(`#by-${item}-tea-button`).attr('onclick',`buy('${item}')`)
        $(`#by-${item}-tea-button`).text(Strings.buyFor.format(Shop.price[`${item}`] * +$(`#${item}Tea`).val()));
        
        Graphics.apply();
        Graphics.applyToSliders();
    }
    else {
        $(`#${item}Tea`).attr('max', `${Shop.tea[item]}`);
    }
}
const changePrice = (item) => {
    $(`#price-${item}-tea`).text(`${Strings.typesOfTea[item]}: ${$(`#${item}Tea`).val()}`);
    $(`#by-${item}-tea-button`).text(Strings.buyFor.format($(`#${item}Tea`).val()*Shop.price[`${item}`]));
}