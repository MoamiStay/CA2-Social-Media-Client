/*

Get and post a feed of recent posts to main page.

Get feed of posts from my user -> profile


IF My-Post:
- upload file - post new post, edit post, delete post (GET, POST, PUT, DELETE)
IF NOT
inability to edit/delete

 */

const content = document.querySelector("div.post-container");
const postsUrl = `${API_BASE_URL}/api/v1/social/posts`;
let posts = "";


async function getWithToken(url) {
    try {
        const token = localStorage.getItem("accessToken");
        const fetchOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, fetchOptions);
        // console.log(response);
        const json = await response.json();
        posts = json;
        // console.log(json);
    } catch (error) {
        console.log(error);
    }
    try {
        mainContent.style.display = "block";
        header.style.display = "block";
        loginForm.style.display = "none";
    } catch (error) {
        console.log(error);
    }
    try {
        console.log(posts);
        for(item of posts) {
            console.log("post");
            content.innerHTML += `
            <div class="mb-5 col-lg-6 card">
            <div class="card-body">
              <div class="pf-image-sm align-items-center p-1">
                <img
                  src="images/profilepic.png"
                  class="col card-img-top"
                  alt="profile_image"
                />
                <h5 class="col card-title p-2">${item.id}</h5>
                <p>${item.created}</p>
                <button type="button">Edit post</button>
                <button type="button">Delete post</button>
              </div>
              <a href="../post.html?id=${item.id}">
              <p class="card-text">${item.body}</p>
              </a>
            </div>
            <div class="card-body">
              <a href="#" class="card-link">like</a>
              <a href="#" class="card-link">comment</a>
              <a href="#" class="card-link">Save</a>
            </div>
          </div>
            `
        }
    } catch (error) {
        console.log(error);
    }
};

getWithToken(postsUrl);