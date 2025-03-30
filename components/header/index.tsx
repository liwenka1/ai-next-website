import NavLogo from "./components/nav-logo";
import NavMenu from "./components/nav-menu";

const Header = () => {
  return (
    <header className="bg-background/60 sticky top-0 z-50 backdrop-blur">
      <div className="container flex items-center justify-between">
        <NavLogo />
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
