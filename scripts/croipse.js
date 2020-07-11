var a = [];
var d = [];
var i = ' '.charCodeAt(0);
var j = '~'.charCodeAt(0);
for (; i <= j; ++i) {
    if (i == 61) {
        continue;
    };
    a.push(String.fromCharCode(i));
    d.push(i);
};
i = 0;
d = d.map((name) => {
    return name.toString(2);
});
const encrypt = (message, key = '') => {
    if ((key == undefined) || (key == null) || (key == '')) {
        key = generateKey(message);
    }
    var i = 0;
    var encsms = []
    var enckey = []
    for (; i < message.length; i++) {
        encsms.push(d[a.indexOf(message[i])])
    };
    i = key.length - 1;
    for (; i >= 0; i--) {
        enckey.push(d[a.indexOf(key[i])])
    };
    var ince = 0;
    while (enckey.length < encsms.length) {
        enckey.push(enckey[ince])
        ince++
    }
    var encmes = []
    encsms.forEach((item,i) => {
        var c = parseInt(item, 2) ^ parseInt(enckey[i], 2);
        encmes.push(c)
    });
    var q = [];
    i = 0;
    for (; i < encmes.length; i++) {
        q.push(String.fromCharCode(encmes[i]));
    };

    return q.join('');
}
const generateKey = (message) => {
    var key = [];
    while (key.length != message.split('').length) {
        key.push(a[Math.floor(Math.random()*93)])
    }
    return key;
}