function getEn() {
  var en = document.getElementById('backyardEnergyProgress').getElementsByClassName('current')[0].innerHTML;
  alert(en);
 }

setInterval(getEn, 10000);
