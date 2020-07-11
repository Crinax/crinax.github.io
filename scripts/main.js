// ( ͡° ͜ʖ ͡°)
$(document).ready(() => {
    Graphics.apply();
    Graphics.applyToSliders();
})
const reload = () => {
	$('.wrapper').remove();
	$('body').append(`
        <div class="wrapper">
            <div id="sqh"></div>
            <header>
                <h1>G-Game tap Tea!</h1>
            </header>
            <div class="game-body">
                <div class="sidebar1">
                </div>
                <div class="sidebar2">
                    <button id="tee" title="${Strings.teeTitle}" onclick="makeTea();">${Strings.tee}</button>
                    <button id="player" onclick="playerInfo();" title="${Strings.playerTitle}">${Strings.player}</button>
                    <button id="shop" onclick="shop();" title="${Strings.shopTitle}">${Strings.shop}</button>
                    <button id="orders" title="${Strings.ordersTitle}" onclick="ordersMenu();">${Strings.orders}</button>
                    <button id="settings" onclick="settings();" title="${Strings.settingsTitle}">${Strings.settings}</button>
                    <button id="about" title="${Strings.aboutTitle}" onclick="about();">${Strings.about}</button>
                </div>
            </div>
            <footer>
                <h3 id="copyright">${Strings.copyright}</h3>
                <h3 id="font">${Strings.font}: <a href="https://fonts.google.com/specimen/Comfortaa" target="_blank">Comfortaa</a></h3>
                <h3 id="version" onclick="changeLog()" title="${Strings.versionTitle}">${Strings.version}: 3.0.1</h3>
                <div id="sq1"></div>
                <div id="sq2"></div>
                <div id="sq3"></div>
            </footer>
        </div>
    `);
	Graphics.apply();
    Graphics.applyToSliders();
}