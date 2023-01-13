let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
function increment() {
  count += 1;
  countEl.textContent = count;
}
//increment()

function save() {
  let county = count + " - ";
  saveEl.textContent += county;
  count = 0;
  countEl.textContent = 0;
}
