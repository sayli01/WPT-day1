function applyColor(p1){
    let ptag = document.querySelector("p");
    ptag.style.color = p1;
}

function applyFont(p1){
    let ptag = document.querySelector("p");
    ptag.style.fontSize = p1;
}

function applyAvailability(p1){
    let inputAddToCartTag = document.querySelector("#add-to-cart");
   
    if(p1){
        inputAddToCartTag.removeAttribute("disabled","false");
    }else{
        inputAddToCartTag.removeAttribute("disabled","true")
    }
}
function showAndHide(p1){
    let inputAddToCartTag = document.querySelector("#add-to-cart");
   
    if (p1) {
        inputAddToCartTag.style.display = "inline";
      } else {
        inputAddToCartTag.style.display = "none";
      }
}
