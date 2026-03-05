import { useEffect, useState } from "react";

function ThemeController() {
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "default";
  });

  useEffect(() => {
    const applyTheme = (selectedTheme) => {
      if (selectedTheme === "default") {
        document.documentElement.setAttribute("data-theme", getSystemTheme());
      } else {
        document.documentElement.setAttribute("data-theme", selectedTheme);
      }
    };

    applyTheme(theme);

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = () => {
      if (localStorage.getItem("theme") === "default") {
        applyTheme("default");
      }
    };

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme]);

  const handleChange = (e) => {
    const selected = e.target.value;
    setTheme(selected);
    localStorage.setItem("theme", selected);
  };

  return (
    <div className="join join-horizontal">
      <input
        type="radio"
        name="theme"
        value="light"
        aria-label="Light"
        checked={theme === "light"}
        onChange={handleChange}
        className="btn btn-sm join-item"
      />

      <input
        type="radio"
        name="theme"
        value="autumn"
        aria-label="Autumn"
        checked={theme === "autumn"}
        onChange={handleChange}
        className="btn btn-sm join-item"
      />

      <input
        type="radio"
        name="theme"
        value="default"
        aria-label="Default"
        checked={theme === "default"}
        onChange={handleChange}
        className="btn btn-sm join-item"
      />

      <input
        type="radio"
        name="theme"
        value="forest"
        aria-label="Forest"
        checked={theme === "forest"}
        onChange={handleChange}
        className="btn btn-sm join-item"
      />

      <input
        type="radio"
        name="theme"
        value="dark"
        aria-label="Dark"
        checked={theme === "dark"}
        onChange={handleChange}
        className="btn btn-sm join-item"
      />
    </div>
  );
}

export default ThemeController;
