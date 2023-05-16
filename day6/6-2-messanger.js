function addnewmessage(p1){
    let parentTag =document.querySelector("#divi1");
    let existingValue=parentTag.innerHTML;

    let msgTag = document.querySelector("#message1");
    let message=msgTag.value;
    
    let position = p1 ? "end" : "start";
    if(position == "start")
    {
        newValue = `<div class="message-style" style="display: flex; justify-content: ${position}">&#x1F466 ${message}</div>`;
    }
    else if(position == "end")
    {
        newValue = `<div class="message-style" style="display: flex; justify-content: ${position}">${message} &#x1F467</div>`;
    }
    parentTag.innerHTML = newValue + existingValue;

    msgTag.value="";
}