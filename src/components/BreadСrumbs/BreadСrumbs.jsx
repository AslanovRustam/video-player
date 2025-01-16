import { Link, NavLink, useLocation } from "react-router";
import HomeLogo from "../../assets/home.svg";
import s from "./breadСrumbs.module.scss";

function BreadСrumbs() {
  const location = useLocation();

  let currentLink = "";

  const breadСrumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = +`/${crumb}`;
      return (
        <NavLink to={currentLink} className={s.crumb} key={crumb}>
          &nbsp; / &nbsp; {crumb}
        </NavLink>
      );
    });

  return (
    <div className={s.container}>
      <p>Aprenda a programar</p>
      <nav>
        <NavLink to="/" className={s.crumb}>
          <HomeLogo className={s.icon} /> &nbsp;
        </NavLink>
        {breadСrumbs}
      </nav>
    </div>
  );
}

export default BreadСrumbs;
