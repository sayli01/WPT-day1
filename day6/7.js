/**
 * GET THE DIV TAG
 * GET THE EXISTING VALUE
 * ADD THE NEW ELEMENT
 * SET THE DIV TAG
 */
function addNewMessage(p1) {
  let parentTag = document.querySelector("#divid1");
  let existingValue = parentTag.innerHTML;

  let msgTag = document.querySelector("#messageId1");
  let message = msgTag.value;

  let position = p1 ? "end" : "start";
  let newValue = `<div class="fs-5 text-success mb-2" style="font-family:cursive; display: flex; justify-content: ${position}"> ${message}</div>`;
  parentTag.innerHTML = newValue + existingValue;

  // clear the input
  msgTag.value = "";
}
