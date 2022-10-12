const outElement = document.querySelector("div#post");
const deletePostBtn = document.querySelector("#delete-button");
let post = "";

let params = new URLSearchParams(document.location.search);
let id = params.get("id");

const deleteUrl = `https://nf-api.onrender.com/api/v1/social/posts/${id}`;

async function getPost() {
    try {
    const api = `https://nf-api.onrender.com/api/v1/social/posts/${id}?_author=true&_comments=true&_reactions=true`;
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
      // console.log(post);
        outElement.innerHTML = `
        <div class="mb-5 col-lg-6 card">
        <div class="card-body">
          <div class="pf-image-sm align-items-center p-1">
            <img
              src="${post.author.avatar}"
              class="col card-img-top"
              alt="profile_image"
            />
            <h5 class="col card-title p-2">${post.author.name}</h5>
            <p>${post.created}</p>
            <a href="../edit.html?id=${post.id}" >Edit</a>
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





async function deletePost(url) {
  try {
  const token = localStorage.getItem("accessToken");
  const fetchOptions = {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
      },
  };
  const response = await fetch(url, fetchOptions);
  console.log(response);
  const json = await response.json();
  post = json;
  console.log(post);
  } catch (error) {
      console.log(error);
  }
};

deletePostBtn.addEventListener("click", (event) => {deletePost(deleteUrl)});