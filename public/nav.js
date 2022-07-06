const dashboardLink = document.querySelector("#dashboard");
const signupLink = document.querySelector("#signup");
const loginLink = document.querySelector("#login");
const logoutLink = document.querySelector("#logout");

dashboardLink.addEventListener("click", gotoDashboard);

if (signupLink && loginLink) {
  signupLink.addEventListener("click", gotoSignup);
  loginLink.addEventListener("click", gotoLogin);
} else {
  logoutLink.addEventListener("click", logout);
}

function gotoDashboard() {
  location.replace("/dashboard");
}
function gotoSignup() {
  location.replace("/signup");
}
function gotoLogin() {
  location.replace("/login");
}

async function logout() {
  console.log("logging out");
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    location.replace("/");
  } else {
    alert("Failed to log out.");
  }
}
