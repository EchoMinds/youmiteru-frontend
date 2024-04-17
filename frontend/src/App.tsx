import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Login from "./pages/Login/Login";
import WatchAnime from "./pages/WatchAnime/WatchAnime";
import { Title } from "./pages/Title/Title";
import {
    Admin,
    Layout,
    Resource,
    houseDarkTheme,
    houseLightTheme,
} from "react-admin";
import dataProvider from "./providers/adminDataProvider";
import { TitleList } from "./components/AdminTitle/TitleList";
import { TitleEdit } from "./components/AdminTitle/TItleEdit";
import { SeasonList } from "./components/AdminSeason/SeasonList";
import { TitleCreate } from "./components/AdminTitle/TitleCreate";
import { VoiceActorsList } from "./components/AdminVoiceActors/VoiceActorsList";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/admin/*"
                    element={
                        <Admin
                            basename="/admin"
                            dataProvider={dataProvider}
                            layout={Layout}
                            theme={houseLightTheme}
                            darkTheme={houseDarkTheme}
                        >
                            <Resource    
                                name="title"
                                list={TitleList}
                                edit={TitleEdit}
                                create={TitleCreate}
                            />
                            <Resource
                                name="voice-actors"
                                list={VoiceActorsList}
                            />
                            <Resource name="seasons" list={SeasonList} />
                        </Admin>
                    }
                />
                <Route path={ROUTES.HOME} element={<Home />} />

                <Route path={ROUTES.TITLE} element={<Title />} />

                <Route path={ROUTES.CATALOG} element={<Catalog />} />

                <Route path={ROUTES.HELP} element={<h1>Help Page</h1>} />

                <Route path={ROUTES.LOGIN} element={<Login />} />

                <Route path={ROUTES.SEASON} element={<WatchAnime />} />

                <Route
                    path="*"
                    element={
                        <h1>!Undefined Page! please come back at main page</h1>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
