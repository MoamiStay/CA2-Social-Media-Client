const outElement = document.querySelector("div#post");
const deletePostBtn = document.querySelector("#delete-button");
const EditPostBtn = document.querySelector("#edit-button");
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
      // console.log(posts);
          if (post.media !== "") {
          outElement.innerHTML += `
          <div class="mb-5 col-lg-6 card">
          <div class="card-body">
            <div class="pf-image-sm align-items-center p-1">
              <img
                src="images/profilepic.png"
                class="col card-img-top"
                alt="profile_image"
              />
              <h5 class="col card-title p-2">${post.author.name}</h5>
              <a href="../edit.html">Edit</a>
            </div>
            <div>
            <h4>${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <img
            src="${post.media}"
            class="col card-img-top"
            alt="${post.title}"
          /></div>
            </a>
          </div>
          <div class="card-body">
            <a href="#" class="card-link">like</a>
            <a href="#" class="card-link">comment</a>
          </div>
        </div>
          `
          } else if (post.author.name === localStorage.getItem("userName"), post.media !== "") {
            outElement.innerHTML += `
            <div class="mb-5 col-lg-6 card">
            <div class="card-body">
              <div class="pf-image-sm align-items-center p-1">
                <img
                  src="images/profilepic.png"
                  class="col card-img-top"
                  alt="profile_image"
                />
                <h5 class="col card-title p-2">${post.author.name}</h5>
                <a href="../edit.html?id=${post.id}" >Edit</a>
              </div>
              <a href="../post.html?id=${post.id}">
              <div>
              <h4>${post.title}</h4>
              <p class="card-text">${post.body}</p>
              <img
              src="${post.media}"
              class="col card-img-top"
              alt="${post.title}"
            /></div>
              </a>
            </div>
            <div class="card-body">
              <a href="#" class="card-link">like</a>
              <a href="#" class="card-link">comment</a>
            </div>
          </div>
            `
          } else {
            outElement.innerHTML += `
            <div class="mb-5 col-lg-6 card">
            <div class="card-body">
              <div class="pf-image-sm align-items-center p-1">
                <img
                  src="images/profilepic.png"
                  class="col card-img-top"
                  alt="profile_image"
                />
                <h5 class="col card-title p-2">${post.author.name}</h5>
                <a href="../edit.html?id=${post.id}" >Edit</a>
              </div>
              <a href="../post.html?id=${post.id}">
              <div>
              <h4>${post.title}</h4>
              <p class="card-text">${post.body}</p>
              </div>
              </a>
            </div>
            <div class="card-body">
              <a href="#" class="card-link">like</a>
              <a href="#" class="card-link">comment</a>
            </div>
          </div>
            `
          }
    } catch (error) {
      console.log(error);
  }
  }

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
  // console.log(post);
  document.referrer ? window.location = document.referrer : history.back() // source: https://benborgers.com/posts/js-back-and-refresh
  } catch (error) {
      console.log(error);
  }
};

deletePostBtn.addEventListener("click", (event) => {
  if ( confirm("Are you sure you want to delete this post?") === true ) {
    deletePost(deleteUrl)
  } else {
    console.log("canceled");
  }
});