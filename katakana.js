Katakana = {
	_kanas: [{
		symbol: 'ァ',
		description: 'а'
	},{
		symbol: 'ィ',
		description: 'и'
	},{
		symbol: 'ゥ',
		description: 'у'
	},{
		symbol: 'ェ',
		description: 'э'
	},{
		symbol: 'ォ',
		description: 'о'
	},{
		symbol: 'カ',
		description: 'ка'
	},{
		symbol: 'ガ',
		description: 'га'
	},{
		symbol: 'キ',
		description: 'ки'
	},{
		symbol: 'ギ',
		description: 'ги'
	},{
		symbol: 'ク',
		description: 'ку'
	},{
		symbol: 'グ',
		description: 'гу'
	},{
		symbol: 'ケ',
		description: 'кэ'
	},{
		symbol: 'ゲ',
		description: 'гэ'
	},{
		symbol: 'コ',
		description: 'ко'
	},{
		symbol: 'ゴ',
		description: 'го'
	},{
		symbol: 'サ',
		description: 'са'
	},{
		symbol: 'ザ',
		description: 'за'
	},{
		symbol: 'シ',
		description: 'си'
	},{
		symbol: 'ジ',
		description: 'зи'
	},{
		symbol: 'ス',
		description: 'су'
	},{
		symbol: 'ズ',
		description: 'зу'
	},{
		symbol: 'セ',
		description: 'сэ'
	},{
		symbol: 'ゼ',
		description: 'зэ'
	},{
		symbol: 'ソ',
		description: 'со'
	},{
		symbol: 'ゾ',
		description: 'зо'
	},{
		symbol: 'タ',
		description: 'та'
	},{
		symbol: 'ダ',
		description: 'да'
	},{
		symbol: 'チ',
		description: 'ти'
	},{
		symbol: 'ヂ',
		description: 'ди'
	},{
		symbol: 'ッ',
		description: 'цу'
	},{
		symbol: 'ヅ',
		description: 'ду'
	},{
		symbol: 'テ',
		description: 'тэ'
	},{
		symbol: 'デ',
		description: 'дэ'
	},{
		symbol: 'ト',
		description: 'то'
	},{
		symbol: 'ド',
		description: 'до'
	},{
		symbol: 'ナ',
		description: 'на'
	},{
		symbol: 'ニ',
		description: 'ни'
	},{
		symbol: 'ヌ',
		description: 'ну'
	},{
		symbol: 'ネ',
		description: 'нэ'
	},{
		symbol: 'ノ',
		description: 'но'
	},{
		symbol: 'ハ',
		description: 'ха'
	},{
		symbol: 'バ',
		description: 'ба'
	},{
		symbol: 'パ',
		description: 'па'
	},{
		symbol: 'ヒ',
		description: 'хи'
	},{
		symbol: 'ビ',
		description: 'би'
	},{
		symbol: 'ピ',
		description: 'пи'
	},{
		symbol: 'フ',
		description: 'фу'
	},{
		symbol: 'ブ',
		description: 'бу'
	},{
		symbol: 'プ',
		description: 'пу'
	},{
		symbol: 'ヘ',
		description: 'хэ'
	},{
		symbol: 'ベ',
		description: 'бэ'
	},{
		symbol: 'ペ',
		description: 'пэ'
	},{
		symbol: 'ホ',
		description: 'хо'
	},{
		symbol: 'ボ',
		description: 'бо'
	},{
		symbol: 'ポ',
		description: 'по'
	},{
		symbol: 'マ',
		description: 'ма'
	},{
		symbol: 'ミ',
		description: 'ми'
	},{
		symbol: 'ム',
		description: 'му'
	},{
		symbol: 'メ',
		description: 'мэ'
	},{
		symbol: 'モ',
		description: 'мо'
	},{
		symbol: 'ャ',
		description: 'я'
	},{
		symbol: 'ュ',
		description: 'ю'
	},{
		symbol: 'ョ',
		description: 'ё'
	},{
		symbol: 'ラ',
		description: 'ра'
	},{
		symbol: 'リ',
		description: 'ри'
	},{
		symbol: 'ル',
		description: 'ру'
	},{
		symbol: 'レ',
		description: 'рэ'
	},{
		symbol: 'ロ',
		description: 'ро'
	},{
		symbol: 'ヮ',
		description: 'ва'
	},{
		symbol: 'ヰ',
		description: 'ви'
	},{
		symbol: 'ヱ',
		description: 'вэ'
	},{
		symbol: 'ヲ',
		description: 'во'
	},{
		symbol: 'を',
		description: 'о'
	},{
		symbol: 'ン',
		description: 'н'
	},{
		symbol: 'ヶ',
		description: 'кэ'
	}],
	_cardTemplate: "<div class='card card-small'><i class='card-symbol'>%kana.symbol%</i><div class='description'>%kana.description%</div></div>",
	
	// Получить слусайную кану.
	getRandomKana: function () {
		if (!Katakana._kanaStack || Katakana._kanaStack.length == 0) {
			Katakana._kanaStack = Katakana._kanas.slice();
		}
		var randIndex = Global.getRandomInt(0, Katakana._kanaStack.length-1);
		return Katakana._kanaStack.splice(randIndex, 1)[0];
	},

	// Получить кану по символу.
	getBySymbol: function (symbol) {
		for(var i=0; i<Katakana._kanas.length; i++) {
			if (Katakana._kanas[i].symbol == symbol) {
				return Katakana._kanas[i];
			}
		}
	},
	
	// Перейти к следующей карточке.
	nextKana: function () {
		var card = document.getElementById('katakana-card');
	
		// Создаём клона и вставляем поверх карты.
		var clncard = card.cloneNode(true);
		clncard.id = 'clone';
		clncard.style.position = 'absolute';
		clncard.style.zIndex = 1000;
		clncard.style.opacity = 1;
		card.parentNode.insertBefore(clncard, card);
	
		// Выставляем следущую карту.
		var kana = Katakana.getRandomKana();
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
		for(var i=0; i<Katakana._kanas.length; i++) {
		var kana = Katakana._kanas[i];
			content = content + Katakana.getCardHtml(kana);
		}
		document.write(content);
	},
	
	// Получить html карточки.
	getCardHtml: function(kana) {
		return Katakana._cardTemplate.replace('%kana.symbol%', kana.symbol).replace('%kana.description%', kana.description);
	}
};