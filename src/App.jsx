import { useState } from "react";
import { HomePage } from "./pages/Home/HomePage";
import { HeaderPartial } from "./Partials/HeaderPartial/HeaderPartial";
import { AppContext } from "./store/AppContext";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { MinhasPastas } from "./pages/MinhasPastas/MinhasPastas";
const initialState = {
  activePin: null,
  mode: null,
  folders: [],
  type: null
}
const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <AppContext initialState={initialState}>
          <HeaderPartial />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/minhas-pastas" element={<MinhasPastas />} />
          </Routes>
        </AppContext>
      </div>
    </BrowserRouter>
  );
};

export default App;
