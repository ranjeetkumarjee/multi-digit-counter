var cur = document.querySelectorAll(".curent");
var nex = document.querySelectorAll(".next");
console.log("coding start");
// console.log(cur);
// console.log(nex);
var x;
var ct = 1;
var ct1 = 1;
var ct2 = 1;
var ct3 = 1;
var ct4 = 1;

var counter = 1;

var chk = ct * 10000 + ct1 * 1000 + ct2 * 100 + ct3 * 10 + ct4;

var btn = document.getElementById("btn-conter");
btn.addEventListener("click", function () {
  console.log("btn clicked ");
  x = document.getElementById("num").value;
  var interId = setInterval(animate, 1000);
});

function animate() {
  console.log("animated fun start");
  if (counter <= x) {
    if (ct1 > 9 && ct2 > 9 && ct3 > 9 && ct4 > 9) {
      ct1 = 0;
      nex[0].classList.add("anima");
      nex[0].innerHTML = ct;
      setTimeout(function () {
        nex[0].classList.remove("anima");
        var b = ct;
        cur[0].innerHTML = b;
        ct++;
      }, 500);
    }

    if (ct2 > 9 && ct3 > 9 && ct4 > 9) {
      ct2 = 0;
      nex[1].classList.add("anima");
      nex[1].innerHTML = ct1;
      setTimeout(function () {
        nex[1].classList.remove("anima");
        var b = ct1;
        cur[1].innerHTML = b;
        ct1++;
      }, 500);
    }

    if (ct3 > 9 && ct4 > 9) {
      console.log("hello", ct3);
      ct3 = 0;
      nex[2].classList.add("anima");
      nex[2].innerHTML = ct2;
      setTimeout(function () {
        nex[2].classList.remove("anima");
        var b = ct2;
        cur[2].innerHTML = b;
        ct2++;
      }, 500);
    }

    if (ct4 > 9) {
      ct4 = 0;
      nex[3].classList.add("anima");
      nex[3].innerHTML = ct3;
      setTimeout(function () {
        nex[3].classList.remove("anima");
        var b = ct3;
        cur[3].innerHTML = b;
        ct3++;
        console.log(ct3);
      }, 500);
    }

    nex[4].classList.add("anima");
    nex[4].innerHTML = ct4;
    setTimeout(function () {
      nex[4].classList.remove("anima");
      var b = ct4;
      cur[4].innerHTML = b;
      ct4++;
      counter++;
    }, 500);
  }
}
