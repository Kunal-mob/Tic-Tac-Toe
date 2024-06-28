var a = document.getElementsByClassName("btn");
for (botton of a) {
  botton.addEventListener("click", showData);
}
function checkThreeButton(a, b, c) {
  if (b.innerText.trim() == "") {
    return false;
  } else {
    return a.innerText == b.innerText && b.innerText == c.innerText;
  }
}
function checkWin() {
  if (
    checkThreeButton(a[0], a[1], a[2]) ||
    checkThreeButton(a[3], a[4], a[5]) ||
    checkThreeButton(a[6], a[7], a[8]) ||
    checkThreeButton(a[0], a[3], a[6]) ||
    checkThreeButton(a[1], a[4], a[7]) ||
    checkThreeButton(a[2], a[5], a[8]) ||
    checkThreeButton(a[2], a[4], a[6]) ||
    checkThreeButton(a[0], a[4], a[8])
  ) {
    return true;
  }
  return false;
}
let touch = true;
let count = 0;
let flag = false;
function showData() {
  if (this.innerText.trim() == "" && touch) {
    count++;
    flag ? (this.innerText = "0") : (this.innerText = "X");
    flag = !flag;
    if (count > 4 ) {
      if (checkWin()) {
        document.getElementById(
          "end"
        ).innerText = `"${this.innerText}" Won the Game!`;
        touch = false;
      } else if (count == 9 ) {
        document.getElementById("end").innerText = `Match draw!`;
      }
      }
  }
}

function reset() {
  window.location.reload();
}
