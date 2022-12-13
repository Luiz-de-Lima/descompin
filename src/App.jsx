import { useState } from "react";
import { HomePage } from "./Home/pages/HomePage";
import { HeaderPartial } from "./Partials/HeaderPartial/HeaderPartial";
import { saveFolder,savePinFolder } from "./services/pinservices";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { MinhasPastas } from "./Home/MinhasPastas/MinhasPastas";

const App = () => {
  saveFolders('2e13-a363','pin1')
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPartial />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/minhas-pastas" element={<MinhasPastas />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
