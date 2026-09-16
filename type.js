// clock
(function () {
var el = document.getElementById('clock');
function tick() {
    var d = new Date();
    var hh = String(d.getHours()).padStart(2, '0');
    var mm = String(d.getMinutes()).padStart(2, '0');
    var ss = String(d.getSeconds()).padStart(2, '0');
    el.textContent = hh + ':' + mm + ':' + ss;
}
tick();
setInterval(tick, 1000);
})();


(function () {
  const text = "CS student and homelab enthusiast";
  const el = document.getElementById('code');
  const textNode = document.createTextNode('');
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  el.append(textNode, cursor);

  let i = 0;
  function step() {
    textNode.textContent = text.slice(0, i);
    i++;
    if (i <= text.length) setTimeout(step, 22);
  }
  step();
})();