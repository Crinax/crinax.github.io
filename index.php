print '
<!-- Use a PC for more convenience -->
<!--
    HTML: 45 strings without comments
    CSS: 493 strings
    JS: 899 strings
    Like this :P
    TRY TO FIND THE ADMIN PANEL! ( ͡° ͜ʖ ͡°)
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>G-Game tap Tea!</title>
    <link rel="stylesheet" href="general.css">
    <script src="https://code.jquery.com/jquery-3.3.1.js" type="text/javascript">

    </script>
    
</head>
<body onload="tutorial()">
    <script src="main.js" type="text/javascript">

    </script>
    <div class="wrapper">
        <div id="sqh"></div>
        <header>
            <h1>G-Game tap Tea!</h1>
        </header>
        <div class="game-body">
            <div class="sidebar1">
                
            </div>
            <div class="sidebar2">
                <button id="tee" title="Here you can make tea" onclick="makeTea()">To make tea!</button>
                <button id="player" onclick="playerInfo()" title="Here you can see your statistic and change nickname">Player</button>
                <button id="shop" onclick="shop()" title="Here you can buy tea leaves">Shop</button>
                <button id="settings" onclick="settings()" title="Here you can set color of text and lines, background color and graphics quality of the game">Settings</button>
                <button id="about" title="Here you can read about this game" onclick="about()">About</button>
                <button id="close" title="Click here to close window">Close</button>
            </div>
        </div>

        <footer>
            <h3 id="copyright">Game by Crinax&copy;</h3>
            <h3 id="font">Font: <a href="https://fonts.google.com/specimen/Comfortaa" target="_blank">Comfortaa</a></h3>
            <h3 id="version">Version: 1.0</h3>
            <div id="sq1"></div>
            <div id="sq2"></div>
            <div id="sq3"></div>
        </footer>
    </div>
</body>
</html>
'