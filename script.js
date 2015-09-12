var kanas= [{
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
},
];

function getRandomKana() {
	var randIndex = getRandomInt(0, kanas.length-1);
	return kanas[randIndex];
}

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getBySymbol(symbol) {
	for(var i=0; i<kanas.length; i++) {
		if (kanas[i].symbol == symbol) {
			return kanas[i];
		}
	}
}

function nextKana() {
	var card = document.getElementById('hirogana-card');
	
	// Создаём клона и вставляем поверх карты.
	var clncard = card.cloneNode(true);
	clncard.id = 'clone';
	clncard.style.position = 'absolute';
	clncard.style.zIndex = 1000;
	card.parentNode.insertBefore(clncard, card);
	
	// Выставляем следущую карту.
	var kana = getRandomKana();
	card.getElementsByTagName('i')[0].innerHTML = kana.symbol;
	card.getElementsByTagName('div')[0].innerHTML = kana.description;
	
	// Запускаем анимацию.
	setTimeout(function() {
		clncard.style.marginLeft = -1*Math.max(window.screen.availWidth, 1000) + 'px';
	}, 100);
	
	// Запускаем таймер на удаление клона.
	setTimeout(function() {
		card.parentNode.removeChild(clncard);
	}, 2000);
}

function printAll() {
	var content = '';
	for(var i=0; i<kanas.length; i++) {
	var kana = kanas[i];
		content = content + "<div class='card card-small'><i class='hirogana-symbol'>" + kana.symbol + "</i><div class='description'>" + kana.description + "</div></div>";
	}
	document.write(content);
}

function printBySymbol(symbol) {
	printKana(getBySymbol(symbol));
}

function printKana(kana) {
	var content = "<div class='card'><i class='hirogana-symbol'>" + kana.symbol + "</i><div class='description'>" + kana.description + "</div></div>";
	document.write(content);
}
