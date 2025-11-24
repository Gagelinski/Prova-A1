import React from 'react';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import ListarChamados from './componentes/ListarChamados';



function App() {
  return (
    <div id="componente_app">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="pages/chamado/listar">ListarChamados</Link>
            </li>
          </ul>
        </nav>
         <Routes>
            <Route path="pages/chamado/listar" element={< ListarChamados/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;