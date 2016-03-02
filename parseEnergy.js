functiont getEn() {
  alert(document.getElementById('backyardEnergyProgress').getElementsByClassName('current')[0].innerHTML);
}

setInterval('getEn', 10000);
