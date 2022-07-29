const editPostBtn = document.querySelector("#edit");
const npFormBtn = document.querySelector("#npForm");
const deletePostBtn = document.querySelector("#delete");

editPostBtn.addEventListener("click", editPost);
npFormBtn.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.target.children[1].value);
  console.log(e.target.children[2].value);
  newPost(e.target.children[1].value, e.target.children[2].value);
});
deletePostBtn.addEventListener("click", deletePost);

async function editPost() {
  const response = await fetch("/api/blog", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });
}

async function newPost(title, body) {
  await fetch("/api/blog", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body }),
  });

  document.location.reload();
}

async function deletePost() {
  const response = await fetch("/api/blog", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}
