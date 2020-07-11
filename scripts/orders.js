const ordersMenu = () => {
	showEffect('.sidebar1', 'bottom');
	setTimeout(() => {
		hideBut();
		showOreders();
	}, 200);
}
const showOreders = () => {
	$('.sidebar1').empty();
	$('.sidebar1').append('<div class="orders-body"></div>');
	if (ordersQuant == 0) {
		$('.orders-body').append(`<p id="orders-empty" style="color:${Graphics.secondColor}"><b>${Strings.notOrders}</b></p>`);
	}
	else if (orderInProgress) {
		$('.orders-body').append(`<p id="orders-empty" style="color:${Graphics.secondColor}"><b>${Strings.ordersInProgress}</b></p>`);
	}
	else {
		for (var i in orders) {
			$('.orders-body').append(`<p id="order-${i}-name"><b><u>${Strings.ordersName.format(orders[i].customer)}</u></b></p>`);
			var text = Strings.orderText[1];
			for (var j in orders[i].conditions.cups) {
				text += `${orders[i].conditions.cups[j]} ${Strings.cupsOfTea[j].charAt(0).toLowerCase() + Strings.cupsOfTea[j].slice(1, Strings.cupsOfTea[j].length-1)}, `;
			};
			$('.orders-body').append(`<p id="order-${i}-message">${text}${Strings.orderText[2]}</p>`);
			$('.orders-body').append(`<button class="shop-button" onclick="takeOreder(${i});">${Strings.takeOrder}</button>`);
		};
	};
}
const takeOreder = (id) => {
	orderInProgress = true;
	orders[id].inProgress = true;
	timer.orders = setTimeout(ods = () => {
		if (!checkOrder(id)) {
			timer.orders = setTimeout(ods, 1);
		}
		else {
			timer.orders = 0;
		};
	}, 1);
	showGameAlert(Strings.alertOrderHeader, Strings.alertOrderText, ['alert'], '160px');
	showOreders();
}
const checkOrder = (id) => {
	var verif = false;
	if (orders[id].inProgress) {
		for (var i in orders[id].conditions.cups) {
			if (Player.cups[i] >= orders[id].conditions.cups[i]) {
				verif = true;
			}
			else {
				verif = false;
				break;
			};
		};
	};
	if (verif) {
		Player.copmletedOrders++;
		Player.money += orders[id].reward;
		for (var i in orders[id].conditions.cups) {
			Player.cups[i] -= orders[id].conditions.cups[i];
		};
		Player.ordersCompleted++;
		orderInProgress = false;
		showPush(Strings.orderReward.format(orders[id].reward), Strings.orderRewardHeader.format(orders[id].customer));
		setTimeout(() => {
			delete orders[id];
		}, 500);
		ordersQuant--;
		if ($('.orders-body').length != 0) {
			showOreders();
		};
	}
	return verif;
}
const addOrder = () => {
	var income = Player.teamade;
	var strIncome = String(income);
	ordersQuant++;
	switch (strIncome.length) {
		case 1:
		case 2:
			orders[ordersQuant] = {
				customer: names[randomInteger(0, names.length-1)],
	            conditions: {
	            	cups: {}
	            },
	            reward: randomInteger(50, 100),
	            lifeTime: randomInteger(100, 200), //seconds
	            timer: 0,
	            id: ordersQuant,
	            inProgress: false
			}
			var cQuant = randomInteger(0, 1);
			for (var i = 0; i <= cQuant; i++) {
				var typeTea = typesTea[randomInteger(0, 1)]
				if (orders[ordersQuant].conditions.cups[typeTea] != undefined) {
					orders[ordersQuant].conditions.cups[typeTea] += randomInteger(5, 50);
				}
				else {
					orders[ordersQuant].conditions.cups[typeTea] = randomInteger(5, 50);
				};
			};
			break;
		case 3:
		case 4:
			orders[ordersQuant] = {
				customer: names[randomInteger(0, names.length-1)],
	            conditions: {
	            	cups: {}
	            },
	            reward: randomInteger(50, 10000),
	            lifeTime: randomInteger(300, 400), //seconds
	            timer: 0,
	            id: ordersQuant,
	            inProgress: false
			}
			var cQuant = randomInteger(0, 3);
			for (var i = 0; i <= cQuant; i++) {
				var typeTea = typesTea[randomInteger(0, 4)]
				if (orders[ordersQuant].conditions.cups[typeTea] != undefined) {
					orders[ordersQuant].conditions.cups[typeTea] += randomInteger(5, 1000);
				}
				else {
					orders[ordersQuant].conditions.cups[typeTea] = randomInteger(5, 1000);
				};
			};
			break;
		default:
			orders[ordersQuant] = {
				customer: names[randomInteger(0, names.length-1)],
	            conditions: {
	            	cups: {}
	            },
	            reward: randomInteger(2000, 1000000),
	            lifeTime: randomInteger(500, 600), //seconds
	            timer: 0,
	            id: ordersQuant,
	            inProgress: false
			}
			var cQuant = randomInteger(0, 10);
			for (var i = 1; i <= cQuant; i++) {
				var typeTea = typesTea[randomInteger(0, typesTea.length-1)]
				if (orders[ordersQuant].conditions.cups[typeTea] != undefined) {
					orders[ordersQuant].conditions.cups[typeTea] += randomInteger(5, 1000);
				}
				else {
					orders[ordersQuant].conditions.cups[typeTea] = randomInteger(5, 1000);
				};
			};
			break;
	};
	if ($('.orders-body').length != 0) {
		if ($('#orders-empty').length != 0) {
			showOreders();
		}
		else {
			$('.orders-body').append(`<p id="order-${ordersQuant}-name"><b><u>${Strings.ordersName.format(orders[ordersQuant].customer)}</u></b></p>`);
			var text = 'Hi! I need ';
			for (var j in orders[ordersQuant].conditions.cups) {
				text += `${orders[ordersQuant].conditions.cups[j]} ${Strings.cupsOfTea[j].charAt(0).toLowerCase() + Strings.cupsOfTea[j].slice(1, Strings.cupsOfTea[j].length-1)}, `;
			};
			$('.orders-body').append(`<p id="order-${ordersQuant}-message">${text}${Strings.orderText[2]}</p>`);
			$('.orders-body').append(`<button class="shop-button" onclick="takeOreder(${ordersQuant});">${Strings.takeOrder}</button>`);
		};
	};
	return orders;
}