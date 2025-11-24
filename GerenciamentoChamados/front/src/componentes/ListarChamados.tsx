import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Chamado from "../interfaces/chamado";

function ListarChamados() {
  const [chamados, setChamado] = useState<Chamado[]>([]);

  useEffect(() => {
    listarChamadosAPI();
  }, []);

  async function listarChamadosAPI() {
    try {
      const resposta = await axios.get<Chamado[]>(
        "http://localhost:5000/api/chamado/listar"
      );
      const dados = resposta.data;
      setChamado(dados);
    } catch (error) {
      console.log("Erro na requisição" + error);
    }
  }

  return (
    <div>
      <h1>Lista de Chamados</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Descricao</th>
            <th>Criado Em</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {chamados.map((chamado) => (
            <tr>
              <td>{chamado.chamadoId}</td>
              <td>{chamado.descricao}</td>
              <td>{chamado.criadoEm}</td>
              <td>{chamado.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarChamados;