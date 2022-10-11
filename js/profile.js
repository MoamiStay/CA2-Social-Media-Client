const username = localStorage.getItem("userName");
const myName  = document.querySelector("#my-name");
const title = document.querySelector("title");
const profileUrl = `https://nf-api.onrender.com/api/v1/social/profiles/${username}?_posts=true&_following=true&_followers=true`;

async function getUser(url) {
    try {
        const token = localStorage.getItem("accessToken");
        const postData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, postData);
        // console.log(response);
        const json = await response.json();
        // console.log(json);
        title.innerHTML = json.name;
        myName.innerHTML = json.name;
    } catch (error) {
        console.log(error);
    } 
};

getUser(profileUrl);