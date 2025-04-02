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
    let commentContainer = document.querySelector(".message-team");
    let newComment = document.createElement("p");
    let timeSpan = document.createElement("span");
    let getDate = dateGenerator();
    let getTime = timeGenerator();

    timeSpan.textContent = `${getDate} | ${getTime}`;
    newComment.textContent = `${textArea.value} - ${textInput.value} `;
    
    newComment.appendChild(timeSpan);
    commentContainer.appendChild(newComment);
    
    textInput.value = "";
    textArea.value = "";
    
    checkInput();
}

function dateGenerator() {
    let date = new Date();
    return date.toLocaleDateString();
}

function timeGenerator() {
    let date = new Date();
    return date.toLocaleTimeString();
}

function sortAscending() {
    let container = document.querySelector(".message-team");
    let allComments = Array.from(container.querySelectorAll("p"));
    
    allComments.sort((a, b) => {
        let timeStampA = convertTimeStamp(a.querySelector('span').textContent);
        let timeStampB = convertTimeStamp(b.querySelector('span').textContent);
        return timeStampA - timeStampB;
    });
    
    container.innerHTML = "";
    allComments.forEach(comment => {
        container.appendChild(comment);
    });
}

function sortDescending() {
    let container = document.querySelector(".message-team");
    let allComments = Array.from(container.querySelectorAll("p"));
    
    allComments.sort((a, b) => {
        let timeStampA = convertTimeStamp(a.querySelector('span').textContent);
        let timeStampB = convertTimeStamp(b.querySelector('span').textContent);
        return timeStampB - timeStampA;
    });
    
    container.innerHTML = "";
    allComments.forEach(comment => {
        container.appendChild(comment);
    });
}

function convertTimeStamp(dateString) {
    let parts = dateString.trim().split('|');
    let datePart = parts[0].trim();
    let timePart = parts[1].trim();
    let dateTimeString = `${datePart} ${timePart}`;
    let date = new Date(dateTimeString);

    return date.getTime();
}