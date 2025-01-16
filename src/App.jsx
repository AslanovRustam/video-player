import { Navigate, Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Cursos from "./pages/Cursos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
