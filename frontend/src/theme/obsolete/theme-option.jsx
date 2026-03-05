function ThemeOption() {
  return (
    <div className="join join-horizontal">
      <input
        type="radio"
        name="theme"
        value="light"
        aria-label="Light"
        className="btn btn-sm join-item theme-controller"
      />

      <input
        type="radio"
        name="theme"
        value="autumn"
        aria-label="Autumn"
        className="btn btn-sm join-item theme-controller"
      />

      <input
        type="radio"
        name="theme"
        value="default"
        aria-label="Default"
        className="btn btn-sm join-item"
        id="theme-default"
      />

      <input
        type="radio"
        name="theme"
        value="forest"
        aria-label="Forest"
        className="btn btn-sm join-item theme-controller"
      />

      <input
        type="radio"
        name="theme"
        value="dark"
        aria-label="Dark"
        className="btn btn-sm join-item theme-controller"
      />
    </div>
  );
}

export default ThemeOption;