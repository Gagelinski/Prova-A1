import { useEffect, useState } from "react";
import { error } from "console";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Chamado from "../interfaces/Chamado";

function AlterarChamado(){
    const {id} = useParams();
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        buscarChamado();
    }, [])

    async function buscarChamado() {
        try {
            const resposta = await axios.get<Chamado>(`http://localhost:5000/api/chamado/buscar/${id}`);
            setStatus(resposta.data.status);
        } catch (error) {
            console.log(error);
        }
    }

    function cadastrarChamado(e : any){
        e.preventDefault()
        cadastrarChamadoAPI()
    }

    async function cadastrarChamadoAPI() {
        try{
            const chamado : Chamado = {
                status,
                descricao: ""
            };
            const resposta = await axios.patch(`http://localhost:5000/api/chamado/alterar//${id}`, chamado);
            console.log(resposta.data);
        }catch(error){
            console.log("Erro ao atualizar status: " + error);
        }
    }

    return(
        <div>
            <h1>Alterar Chamado</h1>
            <form onSubmit={cadastrarChamado}>
                <div>
                    <button type="submit">Alterar Status</button>   
                </div>
            </form>
        </div>
    )
}

export default AlterarChamado;