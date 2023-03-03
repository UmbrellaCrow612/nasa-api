import Logo from "./Logo";
import NavLink from "./NavLink";

export default function Navigation() {
  return (
    <nav className="justify-between navbar bg-base-100">
      <Logo />
      <div className="flex gap-4">
        <NavLink href="/earth">earth</NavLink>
        <NavLink href="/apod">APOD</NavLink>
      </div>
    </nav>
  );
}
