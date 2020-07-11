const refTutorial = () => {
    showGameAlert(Strings.attentionHeader, Strings.attentionMessage, ['alert', 'toTutorial()', 'ddchk()', 'ddchk();'], '150px');
}
const toTutorial = () => {
    if (timer.workers == 0) {
        ddchk();
    };
    tutorialNum = 1;
    tutorial();
}
const tutorial = () => {
    post();
    switch (tutorialNum) {
        /*
        case :
            setTimeout(() => {
                tutorialNum++;
                showGameAlert('Tutorial','<br/><br/><a onclick="post()">--> Click to skip tutorial <--</a>',['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250);
            break;
        */
        case 1:
            setTimeout(() => {
                tutorialNum++;
                showGameAlert(Strings.tutorialHeader,`${Strings.tutorialMessage[tutorialNum-1]}<br/><br/><a onclick="post()">--> ${Strings.tutorialMessage.skip} <--</a>`,['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250);
            break;
        case 2:
            setTimeout(() => {
                tutorialNum++;
                showGameAlert(Strings.tutorialHeader,`${Strings.tutorialMessage[tutorialNum-1]}<br/><br/><a onclick="post()">--> ${Strings.tutorialMessage.skip} <--</a>`,['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250);
            break;
        case 3:
            setTimeout(() => {
                tutorialNum++;
                showGameAlert(Strings.tutorialHeader,`${Strings.tutorialMessage[tutorialNum-1]}<br/><br/><a onclick="post()">--> ${Strings.tutorialMessage.skip} <--</a>`,['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250);
            break;
        case 4:
            setTimeout(() => {
                tutorialNum++;
                showGameAlert(Strings.tutorialHeaderStrings.tutorialHeader,`${Strings.tutorialMessage[tutorialNum-1]}<br/><br/><a onclick="post()">--> ${Strings.tutorialMessage.skip} <--</a>`,['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250);
            break;
        case 5:
            setTimeout(() => {
                tutorialNum++;
                showGameAlert(Strings.tutorialHeader,`${Strings.tutorialMessage[tutorialNum-1]}<br/><br/><a onclick="post()">--> ${Strings.tutorialMessage.skip} <--</a>`,['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250);
            break;
        case 6:
            setTimeout(() => {
                tutorialNum++;
                showGameAlert(Strings.tutorialHeader,`${Strings.tutorialMessage[tutorialNum-1]}<br/><br/><a onclick="post()">--> ${Strings.tutorialMessage.skip} <--</a>`,['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250);
            break;
        case 7:
            setTimeout(() => {
                tutorialNum++;
                showGameAlert(Strings.tutorialHeader,`${Strings.tutorialMessage[tutorialNum-1]}<br/><br/><a onclick="post()">--> ${Strings.tutorialMessage.skip} <--</a>`,['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250);
            break;
        case 8:
            setTimeout(() => {
                tutorialNum++;
                showGameAlert(Strings.tutorialHeader,`${Strings.tutorialMessage[tutorialNum-1]}<br/><br/><a onclick="post()">--> ${Strings.tutorialMessage.skip} <--</a>`,['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250);
            break;
        case 9:
            setTimeout(() => {
                tutorialNum++;
                showGameAlert(Strings.tutorialHeader,`${Strings.tutorialMessage[tutorialNum-1]}<br/><br/><a onclick="post()">--> ${Strings.tutorialMessage.skip} <--</a>`,['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250);
            break;
        case 10:
            setTimeout(() => {
                tutorialNum++;
                showGameAlert(Strings.tutorialHeader,`${Strings.tutorialMessage[tutorialNum-1]}<br/><br/><a onclick="post()">--> ${Strings.tutorialMessage.skip} <--</a>`,['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250);
            break;
        case 11:
            setTimeout(() => {
                tutorialNum++;
                showGameAlert(Strings.tutorialHeader,`${Strings.tutorialMessage[tutorialNum-1]}<br/><br/><a onclick="post()">--> ${Strings.tutorialMessage.skip} <--</a>`,['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250);
            break;
        case 12:
            setTimeout(() => {
                tutorialNum++;
                showGameAlert(Strings.tutorialHeader,`${Strings.tutorialMessage[tutorialNum-1]}<br/><br/><a onclick="post()">--> ${Strings.tutorialMessage.skip} <--</a>`,['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250);
            break;
        case 13:
            setTimeout(() => {
                tutorialNum++;
                showGameAlert(Strings.tutorialHeader,`${Strings.tutorialMessage[tutorialNum-1]}<br/><br/><a onclick="post()">--> ${Strings.tutorialMessage.skip} <--</a>`,['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250);
            break;
        case 14:
            post();
            setTimeout(() => {
                tutorialNum++;
                showGameAlert(Strings.tutorialHeader,`${Strings.tutorialMessage[tutorialNum-1]}<br/><br/><a onclick="post()">--> ${Strings.tutorialMessage.skip} <--</a>`,['alert','tutorial()','tutorial()','tutorial()'],'150px');
            }, 250)
            break;
        case 15:
            post();
            Player.tutorialCompleted = true;
            break;
    }
}