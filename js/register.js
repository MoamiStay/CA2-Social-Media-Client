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

let username = "";
let email = "";
let password = "";


submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    // const username = getUser.value.trim();
    // const email = getEmail.value.trim();
    // const password = getPass.value.trim();
    // console.log(username, email, password);

    // Email must end with noroff.no or stud.noroff.no + regEx validation
    // username can't have any spaces + 3< characters
    // password regEx validation




if (getUser.value.trim() !== "" && getEmail.value.trim() !== "" && getPass.value.trim() !== "") {

    // username
    if (getEmail.value.trim().toLowerCase().endsWith("stud.noroff.no") || getEmail.value.trim().toLowerCase().endsWith("noroff.no"))  {
        return email = getEmail.value.trim();
    }




if (username === getUser.value.trim() || email === getEmail.value.trim() || password === getPass.value.trim()) {

             const userToRegister = {
                    name: username,
                    email: email,
                    password: password,
                }
                console.log(userToRegister);
            // registerUser(registerUrl, userToRegister);

} else {console.log("Registration input is invalid" + email)};
} else {console.log("please fill out the form")};












// if (username !== "" && email !== "" && password !== "") {

//     // Email 
//     if (email.toLowerCase().endsWith("stud.noroff.no") || email.toLowerCase().endsWith("noroff.no"))  {
//         console.log("email is OK");
//     } else { console.log("email is INVALID")};

//     // Username
//     if (username.toLowerCase().length > 2) {
//         console.log("username is OK");
//     } else { console.log("username is INVALID")};

//     // Password
//     if (password.length > 5) {
//         console.log("password is OK");
//     } else { console.log("password is INVALID")}

//         const userToRegister = {
//             name: username,
//             email: email,
//             password: password,
//         }
//         console.log("You created a user: " + username + email + password);
//         // registerUser(registerUrl, userToRegister);
//     } else {
//         console.log("Please fill out the form correctly");
//     }
});