import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
import s from "./pages.module.scss";

function Contato() {
  return (
    <div className={s.container}>
      <h2>Contato</h2>
      <GoBackBtn name="Go Back" link="/" />
    </div>
  );
}

export default Contato;
