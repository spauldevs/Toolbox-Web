const systemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const savedTheme = localStorage.getItem("theme") || "default";

function applyTheme(theme) {
  if (theme === "default") {
    document.documentElement.setAttribute("data-theme", systemTheme());
  } else {
    document.documentElement.setAttribute("data-theme", theme);
  }
}

applyTheme(savedTheme);

document.addEventListener("change", (e) => {
  if (e.target.name === "theme") {
    const theme = e.target.value;
    localStorage.setItem("theme", theme);
    applyTheme(theme);
  }
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (localStorage.getItem("theme") === "default") {
      applyTheme("default");
    }
  });