if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  document.querySelector('meta[name="theme-color"]').setAttribute("content", "#020617");
} else {
  document.documentElement.classList.remove("dark");
  document.querySelector('meta[name="theme-color"]').setAttribute("content", "#F1F5F9");
}