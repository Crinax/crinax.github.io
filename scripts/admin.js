const active = () => {
    $('#sq3').click(inc())
}
const deactive = () => {
    $('#sq3').off('click');
}
const inc = () => {
    root++
    if (root>=10) {
        root = 0
        showGameAlert("ةرادإلا ةحول","#O05bLTSOj5iIeddnqNMlsA.VfM6NxA2te0.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", ['prompt'], '60px')
    }
}
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
            return Strings.adminMessages[num]
        case 1:
            return Strings.adminMessages[num]
        case 2:
            return Strings.adminMessages[num]
        case 3:
            return Strings.adminMessages[num]
        case Number(encrypt('G', 'as')):
            return Strings.adminMessages[num]
    }
}
function isAdmin() {
    var verif = prompt(Strings.enterPassword);
    try {
        var rs = checkCrypt(encrypt(verif, '$Kvzd,]G5k;fG-3D`Gu8P03k'));
    }
    catch {
        Player.money = Infinity;
        Player.admin = false;
        return false;
    }
    if (rs == Number(encrypt('G', 'as'))) {
        clearTimeout(timer.checkTimer);
        showGameAlert(getMessage(rs), '', ['alert'], '65px');
        return true;
    }
    else {
        Player.money = Infinity;
        Player.admin = false;
        return false;
    };
}