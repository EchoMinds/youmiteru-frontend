import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Login from "./pages/Login/Login";
import WatchAnime from "./pages/WatchAnime/WatchAnime";
import { Title } from "./pages/Title/Title";
import User from "./pages/User/User";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />

                <Route path={ROUTES.TITLE} element={<Title />} />

                <Route path={ROUTES.CATALOG} element={<Catalog />} />

                <Route path={ROUTES.HELP} element={<h1>Help Page</h1>} />

                <Route path={ROUTES.LOGIN} element={<Login />} />

                <Route path={ROUTES.SEASON} element={<WatchAnime />} />

                <Route 
                    path={ROUTES.PROFILE}
                    element={<User />} 
                /> 

                <Route 
                    path={ROUTES.HELP}
                    element={<h1>Help Page</h1>} 
                />
                
                <Route 
                    path={ROUTES.PROFILE}
                    element={<User />} 
                /> 
            </Routes>  
        </BrowserRouter>
    );
}

export default App;
