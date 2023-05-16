function changeColor1() {
  let h1Tag = document.querySelector("#id1");
  h1Tag.style.color = "gold";
  h1Tag.style.fontSize = "40px";
}

function changeColor2() {
  let h1Tag = document.getElementById("id1");
  h1Tag.style.color = "tomato";
  h1Tag.style.fontSize = "40px";
}

function changeColor3() {
  $("#id1").css("color", "green").css("font-size", "40px");
}

// Methods for Enable and Disable
function enableDisableCart1(p1) {
  let cartTag = document.getElementById("cartid");
  if (p1) {
    cartTag.removeAttribute("disabled");
  } else {
    cartTag.setAttribute("disabled", true);
  }
}

function enableDisableCart2(p1) {
  let cartTag = document.querySelector("#cartid");
  if (p1) {
    cartTag.removeAttribute("disabled");
  } else {
    cartTag.setAttribute("disabled", true);
  }
}

function enableDisableCart3(p1) {
  if (p1) {
    $("#cartid").removeAttr("disabled");
  } else {
    $("#cartid").attr("disabled", true);
  }
}
