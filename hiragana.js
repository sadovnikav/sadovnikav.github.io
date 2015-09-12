Hiragana = {
	_kanas: [{
		symbol: 'ぁ',
		description: 'а'
	},{
		symbol: 'ぃ',
		description: 'и'
	},{
		symbol: 'ぅ',
		description: 'у'
	},{
		symbol: 'ぇ',
		description: 'э'
	},{
		symbol: 'ぉ',
		description: 'о'
	},{
		symbol: 'か',
		description: 'ка'
	},{
		symbol: 'き',
		description: 'ки'
	},{
		symbol: 'く',
		description: 'ку'
	},{
		symbol: 'け',
		description: 'кэ'
	},{
		symbol: 'こ',
		description: 'ко'
	},{
		symbol: 'さ',
		description: 'са'
	},{
		symbol: 'し',
		description: 'си'
	},{
		symbol: 'す',
		description: 'су'
	},{
		symbol: 'せ',
		description: 'сэ'
	},{
		symbol: 'そ',
		description: 'со'
	},{
		symbol: 'た',
		description: 'та'
	},{
		symbol: 'ち',
		description: 'ти'
	},{
		symbol: 'つ',
		description: 'цу'
	},{
		symbol: 'て',
		description: 'тэ'
	},{
		symbol: 'と',
		description: 'то'
	},{
		symbol: 'な',
		description: 'на'
	},{
		symbol: 'に',
		description: 'ни'
	},{
		symbol: 'ぬ',
		description: 'ну'
	},{
		symbol: 'ね',
		description: 'нэ'
	},{
		symbol: 'の',
		description: 'но'
	},{
		symbol: 'は',
		description: 'ха'
	},{
		symbol: 'ひ',
		description: 'хи'
	},{
		symbol: 'ふ',
		description: 'фу'
	},{
		symbol: 'へ',
		description: 'хэ'
	},{
		symbol: 'ほ',
		description: 'хо'
	},{
		symbol: 'ま',
		description: 'ма'
	},{
		symbol: 'み',
		description: 'ми'
	},{
		symbol: 'む',
		description: 'му'
	},{
		symbol: 'め',
		description: 'мэ'
	},{
		symbol: 'も',
		description: 'мо'
	},{
		symbol: 'や',
		description: 'я'
	},{
		symbol: 'ゆ',
		description: 'ю'
	},{
		symbol: 'よ',
		description: 'ё'
	},{
		symbol: 'ら',
		description: 'ра'
	},{
		symbol: 'り',
		description: 'ри'
	},{
		symbol: 'る',
		description: 'ру'
	},{
		symbol: 'れ',
		description: 'рэ'
	},{
		symbol: 'ろ',
		description: 'ро'
	},{
		symbol: 'わ',
		description: 'ва'
	},{
		symbol: 'を',
		description: 'о'
	},{
		symbol: 'ん',
		description: 'н'
	}],
	_cardTemplate: "<div class='card card-small'><i class='card-symbol'>%kana.symbol%</i><div class='description'>%kana.description%</div></div>",
	
	// Получить слусайную кану.
	getRandomKana: function () {
		if (!Hiragana._kanaStack || Hiragana._kanaStack.length == 0) {
			Hiragana._kanaStack = Hiragana._kanas.slice();
		}
		var randIndex = Global.getRandomInt(0, Hiragana._kanaStack.length-1);
		return Hiragana._kanaStack.splice(randIndex, 1)[0];
	},

	// Получить кану по символу.
	getBySymbol: function (symbol) {
		for(var i=0; i<Hiragana._kanas.length; i++) {
			if (Hiragana._kanas[i].symbol == symbol) {
				return Hiragana._kanas[i];
			}
		}
	},
	
	// Перейти к следующей карточке.
	nextKana: function () {
		var card = document.getElementById('hirogana-card');
	
		// Создаём клона и вставляем поверх карты.
		var clncard = card.cloneNode(true);
		clncard.id = 'clone';
		clncard.style.position = 'absolute';
		clncard.style.zIndex = 1000;
		card.parentNode.insertBefore(clncard, card);
	
		// Выставляем следущую карту.
		var kana = Hiragana.getRandomKana();
		card.getElementsByTagName('i')[0].innerHTML = kana.symbol;
		card.getElementsByTagName('div')[0].innerHTML = kana.description;
	
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
		for(var i=0; i<Hiragana._kanas.length; i++) {
		var kana = Hiragana._kanas[i];
			content = content + Hiragana.getCardHtml(kana);
		}
		document.write(content);
	},
	
	// Получить html карточки.
	getCardHtml: function(kana) {
		return Hiragana._cardTemplate.replace('%kana.symbol%', kana.symbol).replace('%kana.description%', kana.description);
	}
};