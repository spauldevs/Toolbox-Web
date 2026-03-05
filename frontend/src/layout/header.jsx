import ThemeController from "../theme/themeController";
function Header() {
  return (
    <header className="flex items-center justify-between p-4 ">
      <span className="font-extrabold text-2xl">Web Toolbox</span>
      <ThemeController />
    </header>
  );
}

export default Header;
