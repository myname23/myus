var fants = document.getElementById('petMoneyValue').getElementsByClassName('val')[0].innerHTML;

functiont getEn() {
  var energy = document.getElementById('backyardEnergyProgress').getElementsByClassName('current')[0].innerHTML;
  fants = energy;
 }

setInterval(getEn, 10000);
