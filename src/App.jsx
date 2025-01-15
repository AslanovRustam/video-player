import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}></Route>
    </Routes>
  );
}

export default App;
