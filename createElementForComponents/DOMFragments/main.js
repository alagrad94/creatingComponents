const messages = ["Hi","Hello, how are you today?","I'm doing well, how are you?","I'm doing well also.","That's great to hear."]
const messageComp = [];

function createComponentList () {

    messages.forEach(mes => {
    
    let message = document.createElement("section");
    let messageText = document.createTextNode(`${mes}`);
    message.classList.add("message");
    message.appendChild(messageText);
    messageComp.push(message);

    });
};

function addFragmentsToDOM () {

    const fragment = document.createDocumentFragment()
    messageComp.forEach(message => {

        fragment.appendChild(message)
        return fragment;

    });
    
    document.querySelector("#messages").appendChild(fragment)
};

createComponentList();
addFragmentsToDOM(); 