/**
# COUNTER ASSIGNMENT
- SELECT THE ELEMENT
- GET THE EXISTING VALUE :: innerHTML (retuns string)
- INCREMENT THE VALUE BY 1
- SET THE NEW VALUE
 */
function increment() {
    let h1CounterTag = document.querySelector("#counter");
    let existingValue = h1CounterTag.innerHTML;
    let newValue = parseInt(existingValue) + 1;
    h1CounterTag.innerHTML = newValue;
  }
  