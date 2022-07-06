const signupForm = document.querySelector("#signup-form");
const signupUsername = document.querySelector("#username-input-signup");
const signupPassword = document.querySelector("#password-input-signup");

signupForm.addEventListener("submit", handlesignup);
async function handlesignup(e) {
  e.preventDefault();
  console.log("form submitted", signupUsername.value, signupPassword.value);

  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: signupUsername.value,
      password: signupPassword.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else alert("signup failed");
}
