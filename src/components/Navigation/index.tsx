import Logo from "./Logo";
import NavLink from "./NavLink";

export default function Navigation() {
  return (
    <nav className="navbar bg-base-100 justify-between">
      <Logo />
      <NavLink href="/apod">APOD</NavLink>
    </nav>
  );
}
