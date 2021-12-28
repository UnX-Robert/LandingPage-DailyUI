var width = window.innerWidth;

if (width < 991) {
  var content = document.querySelector('div.col-change1').innerHTML
  document.querySelector('div.col-change1').innerHTML = document.querySelector('div.col-change2').innerHTML;
  document.querySelector('div.col-change2').innerHTML = content;
}
