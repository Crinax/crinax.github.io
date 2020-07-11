const checkQuests = () => {
    var conditions;
    for (i in quests) {
        if (quests[i].status == 'not completed') {
            conditions = quests[i].conditions;
            for (var reqs in conditions) {
                if (reqs == 'workers') {
                    for (var j = 1; j < workers.length; j++) {
                        if (workers[j].level >= conditions[reqs].level) {
                            quests[i].status = 'completed';
                            if ($('.quests-body').length != 0) {
                                $('.quests-body').empty();
                                showQuests();
                            };
                            showPush(Strings.pushQuestCompletedMessage.format(Strings.questsHeaders[i]));
                        };
                    };
                }
                else if (conditions[reqs].constructor === Object) {
                    for (var elem in conditions[reqs]) {
                        if (typeof(conditions[reqs][elem]) != 'number') {
                            if (Player[reqs][elem] == conditions[reqs][elem]) {
                                quests[i].status = 'completed';
                                if ($('.quests-body').length != 0) {
                                    $('.quests-body').empty();
                                    showQuests();
                                };
                                showPush(Strings.pushQuestCompletedMessage.format(Strings.questsHeaders[i]));
                            };
                        }
                        else {
                            if (Player[reqs][elem] >= conditions[reqs][elem]) {
                                quests[i].status = 'completed';
                                if ($('.quests-body').length != 0) {
                                    $('.quests-body').empty();
                                    showQuests();
                                };
                                showPush(Strings.pushQuestCompletedMessage.format(Strings.questsHeaders[i]));
                            };
                        };
                    };
                }
                else {
                    if (typeof(conditions[reqs]) != 'number') {
                        if (Player[reqs] == conditions[reqs]) {
                            quests[i].status = 'completed';
                            if ($('.quests-body').length != 0) {
                                $('.quests-body').empty();
                                showQuests();
                            };
                            showPush(Strings.pushQuestCompletedMessage.format(Strings.questsHeaders[i]));
                        };
                    }
                    else {
                        if (Player[reqs] >= conditions[reqs]) {
                            quests[i].status = 'completed';
                            if ($('.quests-body').length != 0) {
                                $('.quests-body').empty();
                                showQuests();
                            };
                            showPush(Strings.pushQuestCompletedMessage.format(Strings.questsHeaders[i]));
                        };
                    };
                };
            };
        };
    };
}
const getInfo = (id) => {
    var conditions = quests[id].conditions;
    var reward = quests[id].reward;
    var text = `${Strings.questInfo.conditions}</br>`;
    if (conditions.constructor === Object) {
        for (var reqs in conditions) {
            if (conditions[reqs].constructor === Object) {
                for (var elem in conditions[reqs]) {
                    if (reqs == 'tea') {
                        text += `- ${conditions[reqs][elem]} ${Strings.playerTeaLeaves[elem].charAt(0).toUpperCase() + Strings.playerTeaLeaves[elem].slice(1)}<br/>`;
                    }
                    else if (reqs == 'cups') {
                        text += `- ${conditions[reqs][elem]} ${Strings.cupsOfTea[elem].charAt(0).toUpperCase() + Strings.cupsOfTea[elem].slice(1)}<br/>`;
                    }
                    else {
                        text += `- ${conditions[reqs][elem]} ${Strings.questInfo[elem]}<br/>`; //${elem} ${reqs}
                    };
                };
            }
            else {
                switch (reqs) {
                    case 'admin':
                        text += `- ${Strings.questInfo[reqs]}<br/>`;
                        break;
                    case 'teamade':
                        text += `- ${Strings.questInfo[reqs].format(conditions[reqs])}<br/>`;
                        break;
                    case 'teasold':
                        text += `- ${Strings.questInfo[reqs].format(conditions[reqs])}<br/>`;
                        break;
                    case 'colorChanged':
                        text += `- ${Strings.questInfo[reqs]}<br/>`;
                        break;
                    case 'tutorialCompleted':
                        text += `- ${Strings.questInfo[reqs]}<br/>`
                        break;
                    default:
                        text += `- ${Strings.questInfo[reqs].format(conditions[reqs])}<br/>`;
                        break;
                };
            };
        };
    };
    text += `<u><b>${Strings.questInfo.reward}</b></u><br/>`;
    if (reward.constructor === Object) {
        for (var reqs in reward) {
            if (reward[reqs].constructor === Object) {
                if (reqs == 'workers') {
                    text += `- ${Strings.questInfo.workers}<br/>`
                }
                else {
                    for (var elem in reward[reqs]) {
                        if (reqs == 'tea') {
                            text += `- ${reward[reqs][elem]} ${Strings.playerTeaLeaves[elem].charAt(0).toUpperCase() + Strings.playerTeaLeaves[elem].slice(1)}<br/>`;
                        }
                        else if (reqs == 'cups') {
                            text += `- ${reward[reqs][elem]} ${Strings.cupsOfTea[elem].charAt(0).toUpperCase() + Strings.cupsOfTea[elem].slice(1)}<br/>`;
                        }
                        else {
                            text += `- ${reward[reqs][elem]} ${elem} ${reqs}<br/>`;
                        };
                    };
                }
            }
            else {
                if (reqs == 'workers') {
                    text += `- ${Strings.questInfo.workers}<br/>`
                }
                else {
                    text += `- ${Strings.questInfo.money.format(reward[reqs])}<br/>`;
                };
            };
        };
    };
    showGameAlert(Strings.questInfoHeader, text, ['alert'], '180px');
}
const getReward = (id) => {
    var reward = quests[id].reward;
    quests[id].status = 'rewarded';
    for (reqs in reward) {
        if (reward[reqs].constructor === Object) {
            if (reqs == 'workers') {
                workers.push(reward[reqs]);
            }
            else {
                for (elem in reward[reqs]) {
                    Player[reqs][elem] += reward[reqs][elem];
                };
            };
        }
        else if (reqs == 'workers') {
            workers.push(reward[reqs]);
        }
        else {
            Player[reqs] += reward[reqs];
        };
    };
    Player.questsCompleted++;
    showGameAlert(Strings.rewardHeader, Strings.rewardText, ['alert'], '165px');
    if ($('.quests-body').length != 0) {
        $('.quests-body').empty();
        showQuests();
    };
}
const showQuests = () => {
    $('.quests-body').empty();
    for (var id in quests) {
        if (quests[id].status == 'not completed') {
            if (quests[id].prevQuest != null) {
                branch = quests[id];
                idi = id;
                while ((branch.prevQuest != null) && (quests[branch.prevQuest].status != 'rewarded')) {
                    idi = branch.prevQuest;
                    branch = quests[idi];
                };
                if (idi == 0) {
                    continue;
                }
                if ($(`#quest-id-${idi}`).length == 0) {
                    if ((branch.status == 'completed')) {
                        $('.quests-body').append(`<p class="qeust-text" id="quest-id-${idi}" style="color: ${Graphics.secondColor}">${Strings.questsHeaders[idi]}</p>`);
                        $('.quests-body').append(`<button class="shop-button" id="reward-${idi}" onclick="getReward(${idi});">${Strings.getReward}</button>`);
                    }
                    else if (branch.status == 'not completed') {
                        $('.quests-body').append(`<p class="qeust-text" id="quest-id-${idi}" style="color: ${Graphics.secondColor}">${Strings.questsHeaders[idi]}</p>`);
                        $('.quests-body').append(`<button class="shop-button" id="info-${idi}" onclick="getInfo(${idi});">${Strings.viewInfo}</button>`);
                    }
                };
            }
            else {
                if ($(`#quest-id-${id}`).length == 0) {
                    if ((quests[id].status == 'completed')) {
                        $('.quests-body').append(`<p class="qeust-text" id="quest-id-${id}" style="color: ${Graphics.secondColor}">${Strings.questsHeaders[id]}</p>`);
                        $('.quests-body').append(`<button class="shop-button" id="reward-${id}" onclick="getReward(${id});">${Strings.getReward}</button>`);
                    }
                    else if (quests[id].status == 'not completed') {
                        $('.quests-body').append(`<p class="qeust-text" id="quest-id-${id}" style="color: ${Graphics.secondColor}">${Strings.questsHeaders[id]}</p>`);
                        $('.quests-body').append(`<button class="shop-button" id="info-${id}" onclick="getInfo(${id});">${Strings.viewInfo}</button>`);
                    };
                };
            };
        }
        else if (quests[id].status == 'completed') {
            if ($(`#quest-id-${id}`).length == 0) {
                $('.quests-body').append(`<p class="qeust-text" id="quest-id-${id}" style="color: ${Graphics.secondColor}">${Strings.questsHeaders[id]}</p>`);
                $('.quests-body').append(`<button class="shop-button" id="reward-${id}" onclick="getReward(${id});">${Strings.getReward}</button>`);
            };
        };
    };
    Graphics.apply();
}
const toQuests = () => {
    if (!achTrig) {
        $('#where-line').animate({
            "margin-left": "50%"
        }, 100)
        achTrig = true;
    }
    $('#player-info').remove();
    $('.sidebar1').append('<div class="quests-body" style="overflow: scroll;"></div>');
    showQuests();
}