function deleteTitle(p1) {
  // Approach 1
  // let h1Tag = document.querySelector("h1");
  // h1Tag.remove();

  // Approach 2
  p1.previousElementSibling.remove();
}
