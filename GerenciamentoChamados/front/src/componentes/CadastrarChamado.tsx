import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Chamado from "../interfaces/Chamado";


function CadastrarChamado(){

    const [descricao, setDescricao] = useState("");

    function cadastrarChamado(e : any){
        e.preventDefault()
        cadastrarChamadoAPI()
    }

    async function cadastrarChamadoAPI() {
        try{
            const chamado : Chamado = {
                descricao,
            };
            const resposta = await axios.post("http://localhost:5000/api/chamado/cadastrar", chamado);
            console.log(resposta.data);
        }catch(error){
            console.log("Erro ao cadastrar chamado: " + error);
        }
    }

    return(
        <div>
            <h1>Cadastrar Chamado</h1>
            <form onSubmit={cadastrarChamado}>
                <div>
                    <label>Descrição:</label>
                    <input onChange={(e : any) => setDescricao(e.target.value)} type="text" /> 
                </div>
                <div>
                    <button type="submit">Cadastrar</button>   
                </div>
            </form>
        </div>
    )
}

export default CadastrarChamado;