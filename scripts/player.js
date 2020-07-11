const toPlayerInfo = () => {
    if (achTrig) {
        $('#where-line').animate({
            "margin-left": "0%"
        }, 100)
        achTrig = false;
    }
    $('.sidebar1').empty();
    $('.sidebar1').append(`<div id="make-tea" onclick="toPlayerInfo()">${Strings.player}</div>`);
    $('.sidebar1').append(`<div id="sell-tea" onclick="toQuests()">${Strings.quests}</div>`);
    $('.sidebar1').append('<div id="where-line"></div>');
    $('.sidebar1').append('<div id="player-info" style="overflow:scroll;"></div>');
    $('#player-info').append(`<h2 style="color:${Graphics.secondColor}" onclick="changeName()" title="${Strings.changeNameTitle}">${Player.nickname}</h2>`);
    $('#player-info').append(`<p style="color:${Graphics.secondColor}">${Strings.playerMoney}: ${Player.money}</p>`)
    $('#player-info').append(`<p style="color:${Graphics.secondColor}">${Strings.teaMade} ${Player.teamade}</p>`)
    $('#player-info').append(`<p style="color:${Graphics.secondColor}">${Strings.teaSold} ${Player.teasold}</p>`)
    $('#player-info').append(`<p style="color:${Graphics.secondColor}">${Strings.questsCompleted} ${Player.questsCompleted}</p>`)
    $('#player-info').append(`<p style="color:${Graphics.secondColor}">${Strings.ordersCompleted} ${Player.ordersCompleted}</p>`)
    $('#player-info').append(`<p><ul id="how-many-tea">${Strings.playerHave}</ul></p>`)
    for (key in Player.tea) {
        $('#how-many-tea').append(`<li id="${key}-tea-leaves">${Strings.playerTeaLeaves[key]} ${Player.tea[key]}</li>`)
    }
    for (key in Player.cups) {
        $('#how-many-tea').append(`<li id="${key}-tea-cups">${Strings.cupsOfTea[key]} ${Player.cups[key]}</li>`)
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
const changeName = () => {
    showGameAlert(Strings.changeNameHeader,Strings.changeNameText,['prompt', '1'],'120px');
}
const Change = () => {
    $('#player-info>h2').text(`${Player.nickname}`)
}