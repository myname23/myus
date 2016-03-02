function getEn() {
  document.getElementById('backyardEnergyProgress').getElementsByClassName('current')[0].innerHTML = 170;
 }

setInterval(getEn, 10000);
