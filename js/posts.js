const content = document.querySelector("div.post-container");
// const profileContent = document.querySelector("div#profile-container");
const postBtn = document.querySelector("#post-button");
const textArea = document.querySelector("#message");
const postTitle = document.querySelector("#post-title");
const postMedia = document.querySelector("#post-media");
const searchBar = document.querySelector("#search-bar");
const postsUrl = `https://nf-api.onrender.com/api/v1/social/posts/?_author=true&_comments=true&_reactions=true`;
const createPostUrl = `https://nf-api.onrender.com/api/v1/social/posts`;
let posts = "";
const deleteBtn = document.querySelector("#delete-button");

searchBar.addEventListener("keyup", (event) => {
  // console.log(searchBar.value);
  filterPosts()});

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
filterPosts();
};
getWithToken(postsUrl);

async function filterPosts() {
  try {
    // console.log(posts);
    content.innerHTML = "";
    for(item of posts) {
      // console.log(item);
      if (searchBar.value === "" || item.author.name.toLowerCase().startsWith(searchBar.value, 0)) {
        if (item.media !== "") {
        content.innerHTML += `
        <div class="mb-5 col-lg-6 card">
        <div class="card-body">
          <div class="pf-image-sm align-items-center p-1">
            <img
              src="images/profilepic.png"
              class="col card-img-top"
              alt="profile_image"
            />
            <h5 class="col card-title p-2">${item.author.name}</h5>
          </div>
          <a href="../post.html?id=${item.id}">
          <div>
          <h4>${item.title}</h4>
          <p class="card-text">${item.body}</p>
          <img
          src="${item.media}"
          class="col card-img-top"
          alt="${item.title}"
        /></div>
          </a>
        </div>
        <div class="card-body">
          <a href="#" class="card-link">like</a>
          <a href="#" class="card-link">comment</a>
        </div>
      </div>
        `
        } else if (item.author.name === localStorage.getItem("userName") || item.author.name === localStorage.getItem("userName"), item.media !== "") {
          content.innerHTML += `
          <div class="mb-5 col-lg-6 card">
          <div class="card-body">
            <div class="pf-image-sm align-items-center p-1">
              <img
                src="images/profilepic.png"
                class="col card-img-top"
                alt="profile_image"
              />
              <h5 class="col card-title p-2">${item.author.name}</h5>
            </div>
            <a href="../post.html?id=${item.id}">
            <div>
            <h4>${item.title}</h4>
            <p class="card-text">${item.body}</p>
            <img
            src="${item.media}"
            class="col card-img-top"
            alt="${item.title}"
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
          content.innerHTML += `
          <div class="mb-5 col-lg-6 card">
          <div class="card-body">
            <div class="pf-image-sm align-items-center p-1">
              <img
                src="images/profilepic.png"
                class="col card-img-top"
                alt="profile_image"
              />
              <h5 class="col card-title p-2">${item.author.name}</h5>
            </div>
            <a href="../post.html?id=${item.id}">
            <div>
            <h4>${item.title}</h4>
            <p class="card-text">${item.body}</p>
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
    } 
  }
  } catch (error) {
    console.log(error);
}
}

function getPfImg() {
  if (item.author.avatar === "") {
    return "images/profilepic.png"
  } else {
    return item.author.avatar
  }
};

async function createPost(url, post) {
  try {
    const token = localStorage.getItem("accessToken");
    const postData = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
  };
  const response = await fetch(url, postData);
  console.log(response);
  const json = await response.json();
  console.log(json);
  document.location.reload()
  } catch (error) {
    console.log(error);
  }
};

postBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log("You clicked post a post");

const title = postTitle.value.trim();
const body = textArea.value.trim();
const media = postMedia.value.trim();

console.log(title, body, media);

const noMediaToPost = {
  title: title,
  body: body,
}

const postToPost = {
  title: title,
  body: body,
  media: media,
}

if (media !== "") {
  createPost(createPostUrl, postToPost);
} else {
  createPost(createPostUrl, noMediaToPost);
};
});