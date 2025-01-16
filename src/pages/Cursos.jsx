import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
import s from "./pages.module.scss";

function Cursos() {
  return (
    <div className={s.container}>
      <h2>Cursos</h2>
      <GoBackBtn name="Go Back" link="/" />
    </div>
  );
}

export default Cursos;
