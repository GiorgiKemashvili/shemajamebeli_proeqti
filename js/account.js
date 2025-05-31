const username = localStorage.getItem("username");
const userGreeting = document.getElementById("userGreeting");

if (username) {
  userGreeting.innerHTML = `Hello, <span class="username">${username}</span>`;
} else {
  userGreeting.textContent =
    "You are not logged in. Please go back and log in.";
}
