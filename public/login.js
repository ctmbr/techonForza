const loginForm = document.querySelector("#login-form");
const loginUsername = document.querySelector("#username-input-login");
const loginPassword = document.querySelector("#password-input-login");

loginForm.addEventListener("submit", handleLogin);
async function handleLogin(e) {
  e.preventDefault();
  console.log("form submitted", loginUsername.value, loginPassword.value);

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: loginUsername.value,
      password: loginPassword.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else alert("login failed");
}
