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
 * Генерация рандомного целого числа
 */
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
/*
function doClick() {
	var energyProgress = getEnergyProgress();
	if (energyProgress > 10) {
		var clickArea = document.getElementById('backyardMineAnim'),
		numOfClicks = getClicksNum(100, energyProgress);
		
		(function clicker() {
			clickArea.click();
			if(--numOfClicks) setTimeout(clicker, randomInteger(300, 1000))
		}
	}())
}
*/
