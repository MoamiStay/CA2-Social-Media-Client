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
    console.log(userData);
    try {
        const postData = {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("You clicked submit");

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