import GoBackBtn from "../components/GoBackBtn/GoBackBtn";
import s from "./pages.module.scss";

function Home() {
  return (
    <div className={s.container}>
      <h2>Home</h2>
      <GoBackBtn name="To playlist" link="/cursos" />
    </div>
  );
}

export default Home;
