function getEn() {
  var energy = document.getElementById('backyardEnergyProgress').getElementsByClassName('current')[0].innerHTML;
  document.getElementById('petMoneyValue').getElementsByClassName('val')[0].innerHTML = energy;
 }

setInterval(getEn, 10000);
