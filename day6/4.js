/**
 * GET THE DIV TAG
 * GET THE EXISTING VALUE
 * ADD THE NEW ELEMENT
 * SET THE DIV TAG
 */
function addNewMessage() {
  let parentTag = document.querySelector("#divid1");
  let existingValue = parentTag.innerHTML;

  let msgTag = document.querySelector("#messageId1");
  let message = msgTag.value;

  // let newValue = "<h1>" + message + "</h1>";
  let newValue = `<h1> ${message} </h1>`;
  parentTag.innerHTML = newValue + existingValue;

  // clear the box
  msgTag.value = "";
}
