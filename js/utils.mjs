export async function getPost() {
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
    console.log(post);
    } catch (error) {
        console.log(error);
    }
}