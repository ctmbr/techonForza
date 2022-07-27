const editPostBtn = document.querySelector("#edit");
const newPostBtn = document.querySelector("#new");
const deletePostBtn = document.querySelector("#delete");

editPostBtn.document.addEventListener("click", editPost);
newPostBtn.document.addEventListener("click", newPost);
deletePostBtn.document.addEventListener("click", deletePost);

async function editPost() {
  const response = await fetch("/api/blog", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });
}

async function newPost() {
  const response = await fetch("/api/blog", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
}

async function deletePost() {
  const response = await fetch("/api/blog", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}
