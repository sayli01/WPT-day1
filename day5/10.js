function changeImageView(p1) {
    let imgTag = document.querySelector("#imgid");
  
    if (p1 == 1) {
      imgTag.setAttribute("src", "1.webp");
    } else if (p1 == 2) {
      imgTag.setAttribute("src", "2.webp");
    } else if (p1 == 3) {
      imgTag.setAttribute("src", "3.webp");
    }
  }
  