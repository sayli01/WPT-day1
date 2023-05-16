function applyAvailability(p1){
    let inputAddToCartTag = document.querySelector("#add-to-cart");
   
    if(p1){
        inputAddToCartTag.removeAttribute("disabled");
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
