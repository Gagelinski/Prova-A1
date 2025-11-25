import React from 'react';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import ListarChamados from './componentes/ListarChamados';
import CadastrarChamado from './componentes/CadastrarChamado';
import AlterarChamado from './componentes/AlterarChamado';



function App() {
  return (
    <div id="componente_app">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="pages/chamado/listar">Listar Chamados</Link>
            </li>
            <li>
              <Link to="pages/chamado/cadastrar">Cadastrar Chamados</Link>
            </li>
              <li>
              <Link to="pages/chamado/alterar">Alterar Chamados</Link>
            </li>
          </ul>
        </nav>
         <Routes>
            <Route path="pages/chamado/listar" element={< ListarChamados/>} />
            <Route path="pages/chamado/cadastrar" element={< CadastrarChamado/>} />
            <Route path="pages/chamado/alterar" element={< AlterarChamado/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;