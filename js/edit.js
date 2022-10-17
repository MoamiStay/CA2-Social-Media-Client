const editBtn = document.querySelector("#edit-button");
const editTitle = document.querySelector("#edit-title");
const editMessage = document.querySelector("#edit-message");
const editMedia = document.querySelector("#edit-media");

let params = new URLSearchParams(document.location.search);
let id = params.get("id");
console.log(id);

const editPostUrl = `https://nf-api.onrender.com/api/v1/social/posts/${id}`;
console.log(editPostUrl);

async function editPost(url, post) {
  try {
    const token = localStorage.getItem("accessToken");
    const postData = {
      method: "PUT",
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
  } catch (error) {
    console.log(error);
  }
};


editBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("You clicked post a post");

const title = editTitle.value.trim();
const body = editMessage.value.trim();
// const media = editMedia.value.trim();
console.log(title, body);

const postToEdit = {
  title: title,
  body: body,
  // media: media,
}
editPost(editPostUrl, postToEdit);
  document.location.href ="../profile.html";
});





