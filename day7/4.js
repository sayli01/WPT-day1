function addNewElement(p1) {
  // let parentTag = document.querySelector("input").parentElement.children[2];
  // let parentTag = p1.parentElement.children[2];
  let parentTag = p1.nextElementSibling;

  let existingValue = parentTag.innerHTML;
  let newValue = `<div style="font-size: 28px; margin-top: 8px">Hello</div>`;

  parentTag.innerHTML = newValue + existingValue;
}
