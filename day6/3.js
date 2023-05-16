/**
 * GET THE DIV TAG
 * GET THE EXISTING VALUE
 * ADD THE NEW ELEMENT
 * SET THE DIV TAG
 */
function addNewMessage() {
  let parentTag = document.querySelector("#divid1");
  let existingValue = parentTag.innerHTML;
  let newValue = `<h1>Hello</h1>`;
  parentTag.innerHTML = existingValue + newValue;
}
