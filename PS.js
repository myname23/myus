/*
 * Получение количество текущей енергии
 */
function getEnergyProgress (){
	return document.getElementById('backyardEnergyProgress').getElementsByClassName('current')[0].innerHTML;
}

/*
 * Вычисление количество кликов
 */
function getClicksNum(percentage, energyPull) {
	var clicks = energyPull / 1000 * percentage;
	return Math.round(clicks);
}

/*
 * Генерация рандомного целого числа в заданном диапазоне
 */
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

/*
 * Кликер
 */ 
 function clicker(clickArea, energyPull, percentage, minTime, maxTime) {
	 var numOfClicks = getClicksNum(percentage, energyPull);
	 if (numOfClicks > 1) {
		 clickArea.click();
		if(--numOfClicks) setTimeout(clicker, randomInteger(minTime, maxTime));
	 }
	 
 }
