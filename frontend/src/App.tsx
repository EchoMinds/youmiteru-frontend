import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import SectionSeasons from "./components/SectionSeasons/SectionSeasons";

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        {/* We will create our pages later it's just an example }
        <Route path={ROUTES.HOME} element={<h1>Our main page</h1>} />

        <Route path="/about" element={<h1>Our first pagination</h1>} />

        <Route
          path="*"
          element={<h1>!Undefined Page! please come back at main page</h1>}
        />
      </Routes> */}
      <h2>Онгоинги</h2>
      <SectionSeasons />
      <h2>Анонсы</h2>
      <SectionSeasons />
      <h2>С высокой оценкой</h2>
      <SectionSeasons />
    </BrowserRouter>
  );
}

export default App;
