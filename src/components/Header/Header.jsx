import { NavLink, Outlet } from "react-router";
import Logo from "../../assets/logo.svg";
import Avatar from "../../assets/avatar.svg";
import s from "./header.module.scss";
import { Suspense } from "react";

function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo className={s.icon} />
        <nav className={s.nav}>
          <NavLink
            to="/"
            className={({ isActive }) => ` ${s.link} ${isActive && s.active}`}
          >
            Início
          </NavLink>
          <NavLink
            to="/cursos"
            className={({ isActive }) => ` ${s.link} ${isActive && s.active}`}
          >
            Cursos
          </NavLink>
          <NavLink
            to="/contato"
            className={({ isActive }) => ` ${s.link} ${isActive && s.active}`}
          >
            Contato
          </NavLink>
        </nav>
        <Avatar className={s.icon} />
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </header>
  );
}

export default Header;
