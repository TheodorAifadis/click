const button = document.getElementById("ClickMe");
let count = 0;

function click() {
  count++;
  button.innerHTML = "ClickMe: " + count;
}

button.onclick = click;
button.innerHTML = "ClickMe: " + count;
