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
=======
import { useDashBoardQuery } from "./hooks/useDashBoardQuery";


function App() {
    const DashBoardQuery = useDashBoardQuery();

    if (DashBoardQuery.isLoading) {
        <h1> Loading ....</h1>;
    }

    if (DashBoardQuery.isError) {
        <h1> Error ....</h1>;
    }

    const banners = DashBoardQuery.data?.banners;
    const popular_seasons = DashBoardQuery.data?.popular_seasons;
    const announced_seasons = DashBoardQuery.data?.announced_seasons;
    const released_seasons = DashBoardQuery.data?.released_seasons;
>>>>>>> 104fe937c21c792acbfaf2fb29c76e7c8a61f79d

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
