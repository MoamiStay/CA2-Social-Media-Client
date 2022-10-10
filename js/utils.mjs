/*
fetch posts

authenticate username/email/password



*/



const form = document.querySelector("form#messageForm"); 
const usernameInput = document.querySelector("input#username");
const emailInput = document.querySelector("input#email");
const subjectInput = document.querySelector("input#subject");
const messageInput = document.querySelector("textarea#message");
const submitButton = document.querySelector("button#submitBtn");
const responseDiv = document.querySelector("div#responseMessage");


console.log (form, usernameInput, emailInput, subjectInput, messageInput, submitButton, responseDiv);

/**
 * Get form-data on submit, validate and process
 */
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("You've pressed submit...");

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();
 
    /** 
     * Data to be passed to a function that can send it an API endpoint, 
     * or here to a simple funcion that writes it back to the page, 
     * if
    */ 
    const messageData = {
        username, // equivalent to writing: username: username
        email, 
        subject, 
        message, 
    }
    //console.log(messageData);     

    //console.log("Form data:", username, email, subject, message);
    /** @todo Validate form data here (better). Maybe use a function...and the messageData-object? */
    var validated = true; // Assume the best
    var errorMessage = "";
    if (!username) { 
        errorMessage += "<p>Username missing</p>";
        validated = false;
    }
    if (!email) { 
        errorMessage += "<p>Email missing</p>";
        validated = false;
    }    
    if (!subject) { 
        errorMessage += "<p>Subject missing</p>";
        validated = false;
    }
    if (!message) { 
        errorMessage += "<p>Message missing</p>";
        validated = false;
    }

    if (!validated){
        responseDiv.innerHTML = errorMessage;
        responseDiv.style.color = 'red';
    } else {
        writeData(messageData);

        sessionStorage.clear();
        form.reset();
        console.log ("Form submitted");

        responseDiv.innerHTML = "<span style='color: green'>Form submitted (not, really...)</span>";
        // form.submit(); // Comment out to prevent form from _actually_ being submitted
    }
});

/**
 * Get form-data on change, add to sessionStorage
 */
usernameInput.addEventListener('keyup', addToSessionStorage); 
emailInput.addEventListener('keyup', addToSessionStorage); 
subjectInput.addEventListener('keyup', addToSessionStorage); 
messageInput.addEventListener('keyup', addToSessionStorage); 

function addToSessionStorage() {
    /** @todo secure the data a bit before setting Session Storage */
    //console.log(this.name, this.value);
    sessionStorage.setItem(this.name, this.value); 
}

/**
 * Get form-data from session storage and populate form (in case of an accidental refresh)
 * Remember to clear sessionStorage on successful submit
 */
 window.addEventListener('DOMContentLoaded', () => {
    console.log("Loading page..."); 

    const username = sessionStorage.getItem('username');
    if (username) usernameInput.value = username;

    const email = sessionStorage.getItem('email');
    if (email) emailInput.value = email;

    const subject = sessionStorage.getItem('subject');
    if (subject) subjectInput.value = subject;

    const message = sessionStorage.getItem('message');
    if (message) messageInput.value = message;
})

/**
 * Write submitted data to a div on the page
 */
function writeData (messageData) {
    console.log(messageData);
    const out = document.querySelector("div#outputFromFormHandler");
    console.log(out);
    const txt = `<div>
    <p>Username:<br>${messageData.username}</p>
    <p>Email:<br>${messageData.email}</p>
    <p>Subject:<br>${messageData.subject}</p>
    <p>Message:<br>${messageData.message}</p>
</div>`;
    out.innerHTML = txt;
}
