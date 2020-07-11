var Strings = {
	tee: 'To make tea!',
	teeTitle: 'Here you can make tea',
	player: 'Player', //toPlayerInfo
	playerTitle: 'Here you can see your statistic and change nickname',
	shop: 'Shop',
	shopTitle: 'Here you can buy tea leaves',
	orders: 'Orders',
	ordersTitle: 'Here you can execute orders',
	settings: 'Settings',
	settingsTitle: 'Here you can set color of text and lines, background color and graphics quality of the game',
	about: 'About',
	aboutTitle: 'Here you can read about this game',
	copyright: 'Game by Crinax&copy;',
	font: 'Font',
	version: 'Version',
	versionTitle: 'Click to view change log',
	attentionHeader: 'Attention',
	attentionMessage: 'Do you want to go tutorial?<br/>Click OK if you want to pass, or cross if not<br/>If you want to pass it later, it will be in the settings',
	tutorialHeader: 'Tutorial',
	tutorialMessage: {
		1: 'You can make or sell cups of tea in the "To make tea!" section',
		2: 'You need 3 tea leaves to make 1 cup of tea',
		3: 'It takes 2 seconds to prepare one cup of tea',
		4: `While making tea you can't make another tea, but you can sell tea mugs`,
		5: `Workers make tea in your place if you have tea leaves, even if you can't make them yourself. But they take 1% to 50% of the money from the sale of cups of tea (depending on the amount of tea sold)`,
		6: 'You can get workers by performing quests related to the recruitment of a certain amount of money',
		7: 'You can see your statistics and change nick in the "Player" section',
		8: 'Also in this section you can see information about quests and pick up the award',
		9: 'You can buy tea leaves in the "Shop" section',
		10: 'Click on the name of the tea to enter the exact quantity',
		11: 'Also in this section you can improve your workers. Originally they make 1 mug in 2 seconds, but this speed can be increased to 1 mug in 0.25 seconds',
		12: 'You can customize the game for yourself in the "Settings" section',
		13: `In this section, you can:<br/>
                - Save and load progress<br/>
                - Go through the tutorial again<br/>
                - Change the color of elements<br/>
                - Enable or disable low graphics<br/>
                - Enable or disable autosave`,
        14: 'Report me about all the bugs',
        skip: 'Click to skip tutorial'
	},
	pushDeafaultHeader: 'Quest completed!',
	make: 'Make',
	sell: 'Sell',
	cupsOfTea: {
		black: 'Cups of black tea:',
        green: 'Cups of green tea:',
        yellow: 'Cups of yellow tea:',
        red: 'Cups of red tea:',
        white: 'Cups of white tea:',
        puer: 'Cups of puer tea:',
        oolong: 'Cups of oolong tea:'
	},
	notEnoughTeaLeaves: 'Not enough leaves!', // You need... = tutorialMessage[2] + '!'
	makeCups: 'Make {0} cups',
	nothingToMake: 'Nothing to make!',
	teaIsReady: 'Tea is ready!',
	makingTea: `Making tea... Please wait {0} seconds to make {1} cup(-s). You can't make tea yet :)`,
	questsHeaders: {
		1: 'Beginner teamaker',
		2: 'Intermediate teamaker',
		3: 'Advanced teamaker',
		4: 'Expert teamaker',
		5: 'Tea master',
		6: 'Beginner tea seller',
		7: 'Intermediate tea seller',
		8: 'Advanced tea seller',
		9: 'Expert tea seller',
		10: 'Small businessman',
		11: 'Middle businessman',
		12: 'Major businessman',
		13: `The only thing I'd like to know is, what is color?`,
		14: 'Junior workers',
		15: 'Middle workers',
		16: 'Senior workers',
		17: 'Tutorial master',
		18: 'I am admin!',
		19: 'Freelancer',
		20: 'Hired worker',
		21: 'Last worker',
		22: 'First quest!',
		23: 'Advanced player',
		24: 'Best player',
		25: 'Hacker'
	},
	names: [
	    'Mike',
	    'Daniel',
	    'Jessica',
	    'Kylie',
	    'Kai',
	    'Yuri',
	    'Alisa',
	    'Pandora',
	    'Atlas',
	    'Luna',
	    'Leia'
	],
	notOrders: 'No orders!',
	ordersInProgress: 'You already took the order!',
	ordersName: `{0}'s order`,
	orderText: {
		1: 'Hi! I need ',
		2: 'can you lend me those?'
	},
	takeOrder: 'Take the order!',
	alertOrderHeader: 'Order',
	alertOrderText: 'You took the order',
	orderReward: 'Your reward: {0} money',
	orderRewardHeader: `{0}'s order completed!`,
	quests: 'Quests',
	changeNameTitle: 'Click to change :)',
	playerMoney: 'Money',
	teaMade: 'How much tea did:',
	teaSold: 'How much tea sold:',
	playerHave: 'You have:',
	playerTeaLeaves: {
		black: 'Black tea leaves:',
        green: 'Green tea leaves:',
        yellow: 'Yellow tea leaves:',
        red: 'Red tea leaves:',
        white: 'White tea leaves:',
        puer: 'Puer tea leaves:',
        oolong: 'Oolong tea leaves:'
	},
	changeNameHeader: 'Change Name',
	changeNameText: 'Enter new nick or press the cross to cancel',
	savedSuccess: 'Saved successfully!',
	loadErrHeader: 'Loading error!',
	loadErrText: 'Saving not found',
	loadSuccess: 'Loaded successfully!',
	pushQuestCompletedMessage: 'Quest "{0}" completed!',
	questInfo: {
		conditions: 'You must fulfill the following <u><b>conditions</b></u>:',
		//2: playerTeaLaeves,
		//3: cupsOfTea,
		//4: if I add new object in quests conditions
		admin: 'You must be an admin',
		teamade: 'You must make {0} cups of tea',
		teasold: 'You must sell {0} cups of tea',
		colorChanged: 'You must change color in settings',
		tutorialCompleted: 'You must complete the tutorial',
		money: '{0} money',
		reward: 'Reward:',
		level: 'workers level',
		workers: 'You get 1 worker',
		questsCompleted: 'You must complete {0} quests',
		ordersCompleted: 'You must complete {0} orders'
	},
	questInfoHeader: 'Info',
	getReward: 'Get reward!',
	viewInfo: 'View info',
	rewardHeader: 'Reward',
	rewardText: 'Reward successfully received!',
	noCupsToSell: 'No cups to sell!',
	sellFor: 'Sell for {0}$',
	nothingToSell: 'Nothing to sell!',
	takeTutorial: 'Take a tutorial!',
	color: 'Color:',
	saturation: 'Saturation:',
	lightness: 'Lightness:',
	transparency: 'Transparency:',
	bgColor: 'BG color:',
	bgSaturation: 'BG saturation:',
	bgLightness: 'BG lightness:',
	bgTransparency: 'BG transparency:',
	lowQuality: 'Low quality:',
	autosave: 'Autosave:',
	save: 'Save',
	load: 'Load',
	language: 'Language:',
	enterTeaHeader: 'Enter tea leaves',
	enterTeaText: 'Enter tea leaves from keyboard or enter "max" to buy maximum tea leaves',
	buyFor: 'Buy for {0}$',
	workers: 'Workers',
	leaves: 'Leaves',
	//typesOfTea
	typesOfTea: {
		green: 'Green',
		black: 'Black',
		yellow: 'Yellow',
		red: 'Red',
		white: 'White',
		oolong: 'Oolong',
		puer: 'Puer'
	},
	outOfStock: 'Out of stock!',
	enterTeaTitle: 'Click to change on custom',
	notEnoughMoney: 'Not enough money!',
	nothingToBuy: 'Nothing to buy!',
	boughtSuccess: 'Bought successfully!',
	worker: 'Worker',
	workerLevel: 'Level:',
	workerTime: 'Time to make 1 cup: {0} sec.',
	maxLevel: 'Max level!',
	upgradeFor: 'Upgrade for {0}$',
	haventWorkers: `You haven't workers!`,
	changeLogHeader: 'Change log',
	changeLogText: `
        <u><b>v1.1:</b></u><br/>
        - Fixed balance. Now the game can be played :D<br/>
        <u><b>v1.2:</b></u><br/>
        - In the shop you can enter custom value of tea leaves. Click to the value of tea leaves to change it<br/>
        <u><b>v1.3:</b></u><br/>
        - Bug fixed<br/>
        <u><b>v1.4:</b></u><br/>
        - Now you can save progress :D<br/>
        <u><b>v1.5:</b></u><br/>
        - Bug fixed<br/>
        <u><b>v1.6:</b></u><br/>
        - Bug fixed<br/>
        - Changed price for tea leaves<br/>
        <u><b>v1.7:</b></u><br/>
        - The amount of tea sold is now being counted<br/>
        - Added a calculation of the amount of tea sold<br/>
        <u><b>v2.0:</b></u><br/>
        - Initial tea prices have been changed<br/>
        - The mugs are made one at a time, not all at once<br/>
        - Added display of remaining time<br/>
        - Added icon in the tab<br/>
        - Improved tutorial<br/>
        - Added quests<br/>
        - Added workers<br/>
        <u><b>v2.1:</b></u><br/>
        - Graphics bug fixed</br>
        <u><b>v2.2:</b></u><br/>
        - Load bug fixed<br/>
        - Quests bug fixed<br/>
        - Employees take 1% to 50% of the money from the sale of cups of tea (depending on the amount of tea sold)<br/>
        <u><b>v2.3:</b></u><br/>
        - Reduced amount of tea in the shop<br/>
        - Fixed bug with workers<br/>
        - Added new quests: "Junior workers", "Middle workers", "Senior workers", "The only thing I'd like to know is, what is color?", "Tutorial master"<br/>
        - Slightly adapted for mobile devices<br/>
        <u><b>v2.4:</b></u><br/>
        - Now the workers don't define the tea themselves<br/>
        <u><b>v3.0:</b></u><br/>
        - Added orders<br/>
        - Added new quests<br/>
        - Smooth display of remaining time<br/>
        - A few minor changes<br/>
        - Bug fixed<br/>
        - Added localization<br/>
        <u><b>v3.0.1:</b></u><br/>
        - Increased animation speed<br/>`,
    aboutText: 'In this game you will need to make a <u><strong title=\'\"Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis, an evergreen shrub (bush) native to East Asia.\" &copy;Wiki\'>tea</strong></u>, sell it, hire workers and build a business',
    banHeader: 'You were banned!',
    banText: 'We apologize, but you were banned for using cheats. Please never use these accessories. You can write to me and I will give you codes, in fact, after all, are they not cheats?🌚',
    timeIsOverHeader: 'Time is over',
    timeIsOverText: `You didn't have time to complete {0}'s order`,
    adminMessages: {
    	0: 'Oops! You made a mistake',
    	1: 'Oh! No! No! I will found you! You must stay at here! I have already calculated your IP!',
    	2: 'He-he <0xFF0E>, well done! :)',
    	3: "Do you think, that it's cheat code? No, no!",
    	4: 'Ban system is disabled!'
    },
    enterPassword: 'Enter password',
    ordersCompleted: 'Orders completed:',
    questsCompleted: 'Quests completed:'
}