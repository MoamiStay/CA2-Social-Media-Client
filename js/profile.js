const username = localStorage.getItem("userName");
const myName  = document.querySelector("#my-name");
const title = document.querySelector("title");
const profileContent = document.querySelector("#profile-container");
const profileUrl = `https://nf-api.onrender.com/api/v1/social/profiles/${username}?_posts=true&_following=true&_followers=true`;
const postsUrl = `https://nf-api.onrender.com/api/v1/social/posts/?_author=true&_comments=true&_reactions=true`;

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
        // profileContent.style.display = "block";
        // header.style.display = "block";
        // loginForm.style.display = "none";
    } catch (error) {
        console.log(error);
    }
    try {
        // console.log(posts);
        for(item of posts) {
          const myName = localStorage.getItem("userName");
          if (item.author.name === myName) {
        profileContent.innerHTML += `
          <div class="mb-5 col-lg-6 card">
          <div class="card-body">
            <div class="pf-image-sm align-items-center p-1">
              <img
                src="images/profilepic.png"
                class="col card-img-top"
                alt="profile_image"
              />
              <h5 class="col card-title p-2">${item.author.name}</h5>
              <p>${item.created}</p>
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
      }
    } catch (error) {
        console.log(error);
    }
  };

  getWithToken(postsUrl);