const button = document.getElementById("ClickMe");
let count = 0;

function click() {
  count++;
  button.innerHTML = "ClickMe: " + count;

  setTimeout(function(){ alert("Nice score"); }, 5000);
}


button.onclick = click;
button.innerHTML = "ClickMe: " + count;

