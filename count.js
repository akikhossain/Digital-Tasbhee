let count = 0;
function clickMe() {
  const click = document.getElementById("click-zero");
  count += 1;
  click.innerText = count;
}

const btn = document.getElementById("minus-button");
btn.addEventListener("click", function () {
  const click = document.getElementById("click-zero");
  click.innerText = "0";
  if ((count = 0)) {
    click.innerText = "";
  }
});
