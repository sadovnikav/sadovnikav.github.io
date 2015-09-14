Kanji = {
	_kanas: [{
		symbol: '一',
		description: 'ичи',
		translateRus: 'один'
	},{
		symbol: '右',
		description: 'миги',
		translateRus: 'право'
	},{
		symbol: '雨',
		description: 'аме',
		translateRus: 'дождь'
	},{
		symbol: '円',
		description: 'эн',
		translateRus: 'иена'
	},{
		symbol: '王',
		description: 'о:',
		translateRus: 'царь'
	},{
		symbol: '音',
		description: 'ото',
		translateRus: 'звук'
	},{
		symbol: '下',
		description: 'сита',
		translateRus: 'ниже'
	},{
		symbol: '火',
		description: 'хи',
		translateRus: 'пожар'
	},{
		symbol: '花',
		description: 'хана',
		translateRus: 'цветок'
	},{
		symbol: '貝',
		description: 'каи',
		translateRus: 'молюск'
	},{
		symbol: '学',
		description: 'гука',
		translateRus: 'учёба'
	},{
		symbol: '気',
		description: '',
		translateRus: ''
	},{
		symbol: '休',
		description: '',
		translateRus: ''
	},{
		symbol: '玉',
		description: '',
		translateRus: ''
	},{
		symbol: '金',
		description: '',
		translateRus: ''
	},{
		symbol: '九',
		description: '',
		translateRus: ''
	},{
		symbol: '空',
		description: '',
		translateRus: ''
	},{
		symbol: '月',
		description: '',
		translateRus: ''
	},{
		symbol: '犬',
		description: '',
		translateRus: ''
	},{
		symbol: '見',
		description: '',
		translateRus: ''
	},{
		symbol: '五',
		description: '',
		translateRus: ''
	},{
		symbol: '口',
		description: '',
		translateRus: ''
	},{
		symbol: '校',
		description: '',
		translateRus: ''
	},{
		symbol: '左',
		description: '',
		translateRus: ''
	},{
		symbol: '三',
		description: '',
		translateRus: ''
	},{
		symbol: '山',
		description: '',
		translateRus: ''
	},{
		symbol: '四',
		description: '',
		translateRus: ''
	},{
		symbol: '子',
		description: '',
		translateRus: ''
	},{
		symbol: '糸',
		description: '',
		translateRus: ''
	},{
		symbol: '字',
		description: '',
		translateRus: ''
	},{
		symbol: '耳',
		description: '',
		translateRus: ''
	},{
		symbol: '七',
		description: '',
		translateRus: ''
	},{
		symbol: '車',
		description: '',
		translateRus: ''
	},{
		symbol: '手',
		description: '',
		translateRus: ''
	},{
		symbol: '十',
		description: '',
		translateRus: ''
	},{
		symbol: '出',
		description: '',
		translateRus: ''
	},{
		symbol: '女',
		description: '',
		translateRus: ''
	},{
		symbol: '小',
		description: '',
		translateRus: ''
	},{
		symbol: '上',
		description: '',
		translateRus: ''
	},{
		symbol: '森',
		description: '',
		translateRus: ''
	},{
		symbol: '人',
		description: '',
		translateRus: ''
	},{
		symbol: '水',
		description: '',
		translateRus: ''
	},{
		symbol: '正',
		description: '',
		translateRus: ''
	},{
		symbol: '生',
		description: '',
		translateRus: ''
	},{
		symbol: '青',
		description: '',
		translateRus: ''
	},{
		symbol: '石',
		description: '',
		translateRus: ''
	},{
		symbol: '赤',
		description: '',
		translateRus: ''
	},{
		symbol: '先',
		description: '',
		translateRus: ''
	},{
		symbol: '千',
		description: '',
		translateRus: ''
	},{
		symbol: '川',
		description: '',
		translateRus: ''
	},{
		symbol: '早',
		description: '',
		translateRus: ''
	},{
		symbol: '草',
		description: '',
		translateRus: ''
	},{
		symbol: '足',
		description: '',
		translateRus: ''
	},{
		symbol: '村',
		description: '',
		translateRus: ''
	},{
		symbol: '大',
		description: '',
		translateRus: ''
	},{
		symbol: '男',
		description: '',
		translateRus: ''
	},{
		symbol: '竹',
		description: '',
		translateRus: ''
	},{
		symbol: '中',
		description: '',
		translateRus: ''
	},{
		symbol: '虫',
		description: '',
		translateRus: ''
	},{
		symbol: '町',
		description: '',
		translateRus: ''
	},{
		symbol: '天',
		description: '',
		translateRus: ''
	},{
		symbol: '田',
		description: '',
		translateRus: ''
	},{
		symbol: '土',
		description: '',
		translateRus: ''
	},{
		symbol: '二',
		description: '',
		translateRus: ''
	},{
		symbol: '日',
		description: '',
		translateRus: ''
	},{
		symbol: '入',
		description: '',
		translateRus: ''
	},{
		symbol: '年',
		description: '',
		translateRus: ''
	},{
		symbol: '白',
		description: '',
		translateRus: ''
	},{
		symbol: '八',
		description: '',
		translateRus: ''
	},{
		symbol: '百',
		description: '',
		translateRus: ''
	},{
		symbol: '文',
		description: '',
		translateRus: ''
	},{
		symbol: '本',
		description: '',
		translateRus: ''
	},{
		symbol: '名',
		description: '',
		translateRus: ''
	},{
		symbol: '木',
		description: '',
		translateRus: ''
	},{
		symbol: '目',
		description: '',
		translateRus: ''
	},{
		symbol: '夕',
		description: '',
		translateRus: ''
	},{
		symbol: '立',
		description: '',
		translateRus: ''
	},{
		symbol: '力',
		description: '',
		translateRus: ''
	},{
		symbol: '林',
		description: '',
		translateRus: ''
	},{
		symbol: '六',
		description: '',
		translateRus: ''
	}],
	_cardTemplate: "<div class='card card-small'><div class='title'>%kana.translateRus%</div><i class='card-symbol'>%kana.symbol%</i><div class='description'>%kana.description%</div></div>",
	
	// Получить слусайную кану.
	getRandomKana: function () {
		if (!Kanji._kanaStack || Kanji._kanaStack.length == 0) {
			Kanji._kanaStack = Kanji._kanas.slice();
		}
		var randIndex = Global.getRandomInt(0, Kanji._kanaStack.length-1);
		return Kanji._kanaStack.splice(randIndex, 1)[0];
	},

	// Получить кану по символу.
	getBySymbol: function (symbol) {
		for(var i=0; i<Kanji._kanas.length; i++) {
			if (Kanji._kanas[i].symbol == symbol) {
				return Kanji._kanas[i];
			}
		}
	},
	
	// Перейти к следующей карточке.
	nextKana: function () {
		var card = document.getElementById('kanji-card');
	
		// Создаём клона и вставляем поверх карты.
		var clncard = card.cloneNode(true);
		clncard.id = 'clone';
		clncard.style.position = 'absolute';
		clncard.style.zIndex = 1000;
		clncard.style.opacity = 1;
		card.parentNode.insertBefore(clncard, card);
	
		// Выставляем следущую карту.
		var kana = Kanji.getRandomKana();
		card.getElementsByTagName('i')[0].innerHTML = kana.symbol;
		card.getElementsByTagName('div')[0].innerHTML = kana.translateRus;
		card.getElementsByTagName('div')[1].innerHTML = kana.description;
	
		// Запускаем анимацию.
		setTimeout(function() {
			var offset = -1 * document.body.clientWidth - 5 + 'px';
			clncard.style.transform = 'translateX(' + offset + ')';
		}, 100);
	
		// Запускаем таймер на удаление клона.
		setTimeout(function() {
			card.parentNode.removeChild(clncard);
		}, 2000);
	},
	
	// Распечатать все символы.
	printAll: function () {
		var content = '';
		for(var i=0; i<Kanji._kanas.length; i++) {
		var kana = Kanji._kanas[i];
			content = content + Kanji.getCardHtml(kana);
		}
		document.write(content);
	},
	
	// Получить html карточки.
	getCardHtml: function(kana) {
		return Kanji._cardTemplate.replace('%kana.translateRus%', kana.translateRus).replace('%kana.symbol%', kana.symbol).replace('%kana.description%', kana.description);
	}
};