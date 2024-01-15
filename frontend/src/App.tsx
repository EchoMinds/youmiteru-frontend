import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                {/* We will create our pages later it's just an example */}
                <Route 
                    path={ROUTES.HOME} 
                    element={<h1>Our home page</h1>} 
                />

                <Route 
                    path={ROUTES.HELP}
                    element={<h1>Help Page</h1>} 
                />
                
                <Route 
                    path="*" 
                    element={<h1>!Undefined Page! please come back at main page</h1>} 
                /> 
            </Routes>  
        </BrowserRouter>
    );
}

export default App;