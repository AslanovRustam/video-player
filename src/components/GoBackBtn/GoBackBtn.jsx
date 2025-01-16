import { NavLink } from "react-router";
import s from "./goBackBtn.module.scss";

function GoBackBtn({ name, link }) {
  return (
    <NavLink to={link} className={s.link}>
      {name}
    </NavLink>
  );
}

export default GoBackBtn;
