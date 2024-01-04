document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript code that interacts with the DOM here
});

// Clarity tracking code
(function (c, l, a, r, i, t, y) {
  c[a] = c[a] || function () {
    (c[a].q = c[a].q || []).push(arguments)
  };
  t = l.createElement(r);
  t.async = 1;
  t.src = "https://www.clarity.ms/tag/" + i;
  y = l.getElementsByTagName(r)[0];
  y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "jl9x43lm0m");

// FAQPage JSON-LD script


// Search bar JavaScript
const searchInput = document.getElementById("search");
const teamMembers = document.querySelectorAll("#u li");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  for (const member of teamMembers) {
    const memberName = member.textContent.toLowerCase();
    if (memberName.includes(searchTerm)) {
      member.style.display = "block";
    } else {
      member.style.display = "none";
    }
  }
});

// Function to toggle the theme
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");

  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    themeIcon.innerText = "☀️ Light Mode";
  } else {
    body.classList.add("dark-theme");
    themeIcon.innerText = "🌙 Dark Mode";
  }
}

function toggleTheme2() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");

  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    themeIcon.innerText = "☀️ Light Mode";
  } else {
    body.classList.add("dark-theme");
    themeIcon.innerText = "🌙 Dark Mode automatically enabled. Click to switch to Light Mode.";
  }
}

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Function to run when dark mode is detected
function runFunctionIfDarkMode() {
  if (darkModeMediaQuery.matches) {
    toggleTheme2(); // Call your existing toggleTheme function
  }
}

// Initial call to check if dark mode is set
runFunctionIfDarkMode();

// Listen for changes in the user's color scheme preference
darkModeMediaQuery.addListener(runFunctionIfDarkMode);

// Function to show the cookie consent popup
function showPopup() {
  const popup = document.getElementById("cookie-popup");
  popup.style.display = "block";
}

// Function to close the cookie consent popup
function closePopup() {
  const popup = document.getElementById("cookie-popup");
  popup.style.display = "none";
}

// Check if the user has previously accepted the cookies
if (!document.cookie.includes("cookieConsent=true")) {
  showPopup();
}

// Function to set a cookie when the user clicks "OK"
function setCookie() {
  document.cookie = "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  closePopup();
}

// Attach the setCookie function to the "OK" button's click event
document.getElementById("ok-button").addEventListener("click", setCookie);
