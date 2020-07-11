const randomInteger = (min, max) => {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}
Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
}
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}
const setLocation = (curLoc) => {
    try {
      history.pushState(null, null, curLoc);
      return;
    }
    catch(e) {

    }
    location.hash = '#' + curLoc;
}
const switchLang = (code = localStorage.getItem('lang')) => {
  loadScript(`scripts/localization/lang-${code}.js`);
}
const loadScript = (src) => {
  if ($('#lang').length != 0) {
    $('#lang').remove();
  };
  let script = document.createElement('script');
  script.src = src;
  script.async = false;
  script.id = 'lang'
  script.onload = function() {
    reload();
  };
  document.head.append(script);
}