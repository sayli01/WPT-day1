function addNewElement() {
  // let parentTag = document.querySelector("div");
  // let parentTag = document.querySelector("#parent");
  let parentTag = document.querySelector("input").parentElement.children[2];

  let existingValue = parentTag.innerHTML;
  let newValue = `<div style="font-size: 28px; margin-top: 8px">Hello</div>`;

  parentTag.innerHTML = newValue + existingValue;
}
