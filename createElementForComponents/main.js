const messages = ["Hi","Hello, how are you today?","I'm doing well, how are you?","I'm doing well also.","That's great to hear."]

    
messages.forEach(mes => {
    
    let message = document.createElement("section");
    let messageText = document.createTextNode(`${mes}`);
    message.classList.add("message");
    message.appendChild(messageText);

    document.getElementById("messages").appendChild(message);
});