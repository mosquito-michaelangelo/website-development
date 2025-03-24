let textInput = document.getElementById("comment_name_input");
let textArea = document.getElementById("message_team");
let messageButton = document.getElementById("comment_button");

function checkInput() {
    let inputFilled = textInput.value.trim();
    let textMessage = textArea.value.trim();

    if(inputFilled && textMessage) {
        messageButton.disabled = false;
    } else {
        messageButton.disabled = true;
    }
}

textInput.addEventListener("input", checkInput);
textArea.addEventListener("input", checkInput);

function addComment() {
    let comment = document.querySelector(".message-team");
    const newComment = document.createElement("p");
    newComment.textContent = `${textInput.value} - ${textArea.value}`;
    comment.appendChild(newComment);

    textInput.value = "";
    textArea.value = "";

    checkInput();
}