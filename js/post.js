/*

- view posts on details page: (post.html)***

(comment on post)

 */
const mainContent = document.querySelector("main").style.display = "block";
const header = document.querySelector("header").style.display = "block";
const outElement = document.querySelector("div#post");
let post = "";

let params = new URLSearchParams(document.location.search);
let id = params.get("id");

async function getPost() {
    try {
    const api = `https://nf-api.onrender.com/api/v1/social/posts/${id}`
    const token = localStorage.getItem("accessToken");
    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await fetch(api, fetchOptions);
    // console.log(response);
    const json = await response.json();
    post = json;
    // console.log(post);
    } catch (error) {
        console.log(error);
    }
    try {
        outElement.innerHTML = `
        <div class="mb-5 col-lg-6 card">
        <div class="card-body">
          <div class="pf-image-sm align-items-center p-1">
            <img
              src="images/profilepic.png"
              class="col card-img-top"
              alt="profile_image"
            />
            <h5 class="col card-title p-2">${post.id}</h5>
            <p>${post.created}</p>
            <button type="button">Edit post</button>
            <button type="button">Delete post</button>
          </div>
          <a href="../post.html?id=${post.id}">
          <p class="card-text">${post.body}</p>
          </a>
        </div>
        <div class="card-body">
          <a href="#" class="card-link">like</a>
          <a href="#" class="card-link">comment</a>
          <a href="#" class="card-link">Save</a>
        </div>
      </div>
        `
    } catch (error) {
        console.log(error);
    }
};

getPost();