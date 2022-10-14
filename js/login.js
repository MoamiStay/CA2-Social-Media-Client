/*
checkbox* do you wanna stay logged in? 
- save token to localstorage or sessionstorage
(or? save token to localstorage in registration, then get token later?)

*/

const getEmail = document.querySelector("input#validationDefaultEmail");
const getPassword = document.querySelector("input#validationDefault01");
const loginBtn = document.querySelector("button#submitBtn");
const logoutBtn = document.querySelector("button#logoutBtn");
const mainContent = document.querySelector("main");
const header = document.querySelector("header");
const loginForm = document.querySelector("section#login");
const API_BASE_URL = "https://nf-api.onrender.com";
const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

async function loginUser(url, userData) {
    try {
        // console.log(url, userData);
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        // console.log(response);
        const json = await response.json();
        // console.log(json);
        // console.log(json.accessToken);
        const userName = json.name;
        const accessToken = json.accessToken;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userName", userName);
        loginForm.style.display = "none";
    } catch (error) {
        console.log(error);
        /* Validering
        error skrives ut her. "wrong password or email"
         */
    } 
    try {
        mainContent.style.display = "block";
        header.style.display = "block";
    } catch (error) {
        console.log(error);
    }
};


loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log("You tried to login");

    const email = getEmail.value.trim();
    const password = getPassword.value.trim();

    const userToLogin = {
        email: email,
        password: password,
    }
    loginUser(loginUrl, userToLogin);
});


logoutBtn.addEventListener("click", (event) => {
    mainContent.style.display = "none";
    header.style.display = "none";
    loginForm.style.display = "block";
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
});

