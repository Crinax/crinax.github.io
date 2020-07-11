const settings = () => {
    showEffect('.sidebar1','top left');
    setTimeout(() => {
        $('.sidebar1').empty();
        $('.sidebar1').prepend('<div class="settings-info"></div>')
        $('.settings-info').prepend(`<h2 style="margin-top:0px; margin-left:50px;">${Strings.settings}</h2>`);
        $('.settings-info').append(`<button class="shop-button" onclick="toTutorial()" style="margin-left: 5px;">${Strings.takeTutorial}</button>`)
        $('.settings-info').append(`<p>${Strings.color}</p>`)
        $('.settings-info').append(`<input id="color" type="range" min="0" max="360" step="1" value="${Graphics.hue}" oninput="chn()">`)
        $('.settings-info').append(`<p>${Strings.saturation}</p>`)
        $('.settings-info').append(`<input id="saturation" type="range" min="0" max="100" step="1" value="${Graphics.sat}" oninput="chn()">`)
        $('.settings-info').append(`<p>${Strings.lightness}</p>`)
        $('.settings-info').append(`<input id="lightness" type="range" min="0" max="100" step="1" value="${Graphics.lig}" oninput="chn()">`)
        $('.settings-info').append(`<p>${Strings.transparency}</p>`)
        $('.settings-info').append(`<input id="alpha" type="range" min="0" max="100" step="1" value="${Graphics.alp}" oninput="chn()">`)
        $('.settings-info').append(`<p>${Strings.bgColor}</p>`)
        $('.settings-info').append(`<input id="bg-color" type="range" min="0" max="100" step="1" value="${Graphics.bg_hue}" oninput="chn()">`)
        $('.settings-info').append(`<p>${Strings.bgSaturation}</p>`)
        $('.settings-info').append(`<input id="bg-saturation" type="range" min="0" max="100" step="1" value="${Graphics.bg_sat}" oninput="chn()">`)
        $('.settings-info').append(`<p>${Strings.bgLightness}</p>`)
        $('.settings-info').append(`<input id="bg-lightness" type="range" min="0" max="100" step="1" value="${Graphics.bg_lig}" oninput="chn()">`)
        $('.settings-info').append(`<p>${Strings.bgTransparency}</p>`)
        $('.settings-info').append(`<input id="bg-alpha" type="range" min="0" max="100" step="1" value="${Graphics.bg_alp}" oninput="chn()">`)
        $('.settings-info').append(`<p>${Strings.lowQuality}</p>`)
        $('.settings-info').append(`<div class="checkbox lowq" onclick="check()" data-content="non"></div>`)
        $('.settings-info').append(`<p>${Strings.autosave}</p>`)
        $('.settings-info').append(`<div class="checkbox savech" onclick="autoSave()" data-content="non"></div>`)
        Graphics.apply();
        Graphics.applyToSliders();
        autoSave(0);
        check(0);
        if ($('#save').length == 0) {
            $('#settings').after(`<button id="save" onclick="save();">${Strings.save}</button>`)
            $('#save').after(`<button id="load" onclick="load();">${Strings.load}</button>`)
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
    Player.colorChanged = true;
    Graphics.apply();
    Graphics.applyToSliders();
}