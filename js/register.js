/*
xxx get values from form*

 register new user 

validation (from utils.mjs)
@noroff.no / @stud.noroff.no email***
username: no spaces***
double check password 
*/

const getUser = document.querySelector("input#validationDefaultUsername");
const getEmail = document.querySelector("input#validationDefaultEmail");
const getPass = document.querySelector("input#validationDefault01");
// const confirmPass = document.querySelector("input#validationDefault02");
const submitButton = document.querySelector("button#submit-user");
const API_BASE_URL = "https://nf-api.onrender.com";
const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;


async function registerUser(url, userData) {
    // console.log(userData);
    try {
        const postData = {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        // console.log(response);
        const json = await response.json();
        // console.log(json);
    } catch (error) {
        console.log(error);
        /*
        if (email is already registered) {
            innerHTML = "There is already a registrered user with this email address"
        } else {
            innerHTML = "Registration unsuccessful"
        }
        */
    }
};


submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log("You clicked submit");


/* VALIDATION 


    if (getUser.value.trim() === moreThan3Charachters) {
        const username = getUser.value
    } else {
        innerHTML = "Username must be more than 3 characters and not include any spaces"
    };

    if (getEmail.value.trim() === regEx + last part of string is "noroff.no" or "stud.noroff.no") {
        const email = getEmail.value.trim();
    } else {
        innerHTML = "Please enter valid mail"
    };

    if (getPass.value.trim() === regEx) {
        const password = getPass.value.trim();
    } else {
        innerHTML = "Please enter valid password. Must include: ...."
    };

    if (username && email && password) {
    const userToRegister = {
        name: username,
        email: email,
        password: password,
     } 
    registerUser(registerUrl, userToRegister);
    } else {
        innerHTML = "Registration unsuccessful"
    }
});

*/

const username = getUser.value.trim();
const email = getEmail.value.trim();
const password = getPass.value.trim();
console.log(username, email, password);

const userToRegister = {
    name: username,
    email: email,
    password: password,
}

registerUser(registerUrl, userToRegister);
});