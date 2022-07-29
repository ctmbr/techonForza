const editBlogForms = document.querySelectorAll(".edit-blog");
editBlogForms.forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e.target.children[0].value);
    console.log(e.target.children[1].value);
    editPost(
      e.target.dataset.blogid,
      e.target.children[0].value,
      e.target.children[1].value
    );
  });
});

const editButtons = document.querySelectorAll(".edit-btn");
editButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target.parentElement);
    e.target.parentElement.children[0].classList.add("hidden");
    e.target.parentElement.children[1].classList.remove("hidden");
    e.target.parentElement.children[2].classList.add("hidden");
    e.target.parentElement.children[3].classList.remove("hidden");
    e.target.parentElement.children[4].classList.add("hidden");
  });
});

const cancelButtons = document.querySelectorAll(".cancel-btn");
cancelButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target.parentElement);
    e.target.parentElement.children[0].classList.remove("hidden");
    e.target.parentElement.children[1].classList.add("hidden");
    e.target.parentElement.children[2].classList.remove("hidden");
    e.target.parentElement.children[3].classList.add("hidden");
    e.target.parentElement.children[4].classList.remove("hidden");
  });
});

const deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    deletePost(button.dataset.blogid);
  });
});

const npFormBtn = document.querySelector("#npForm");

npFormBtn.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.target.children[1].value);
  console.log(e.target.children[2].value);
  newPost(e.target.children[1].value, e.target.children[2].value);
});

async function editPost(id, title, body) {
  await fetch(`/api/blog/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, body }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.reload();
}

async function newPost(title, body) {
  await fetch("/api/blog", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body }),
  });

  document.location.reload();
}

async function deletePost(id) {
  await fetch(`/api/blog/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  document.location.reload();
}
