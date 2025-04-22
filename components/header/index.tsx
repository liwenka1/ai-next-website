import NavLogo from "./components/nav-logo";
import NavMenu from "./components/nav-menu";

const Header = () => {
  return (
    <header className="from-background/80 via-primary/10 to-background/60 sticky top-0 z-50 bg-gradient-to-b shadow-md backdrop-blur-md transition-colors">
      <div className="container flex items-center justify-between py-3">
        <NavLogo />
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
