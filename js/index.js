
function button1Clicked() {
  document.getElementById('button-1').classList.toggle('was-clicked');
}
function windowLoaded() {
  console.log('linked ok!');
  document.getElementById('button-1').addEventListener('click', button1Clicked);
  document.getElementById('button-2').addEventListener('mouseover', button2Hovered);
  /*
  mouseover
  mouseleave
  mousedown
  mouseup
  */
}
function button2Hovered() {
  document.getElementById('button-2').classList.toggle('was-hovered');

}

window.onload = windowLoaded;
