import { useState } from "react"
import { useContext } from "react"
import { useTodo } from "../hooks/useTodo"
import { useMemo } from "react"

export function Lista() {
    const conteudo = useTodo()
    const [filto, setFiltro] = useState([])
    // const listaFiltrada = conteudo.lista.filter(i => {
    //     if (filto === "concluidas") return i.concluida
    //     if (filto === "pendentes") return !i.concluida
    //     return true
    // })
    const listaFiltrada = useMemo(() => {
        return conteudo.lista.filter(i => {
            if (filto === "concluidas") return i.concluida
            if (filto === "pendentes") return !i.concluida
            return true
        })
    }, [filto, conteudo.lista])

    return (
        
        <>
        <label htmlFor="filtro">Filtro</label>
        <select id="filtro" onChange={e => setFiltro(e.target.value)}>
            <option value="">Todos</option>
            <option value="concluidas">Concluídas</option>
            <option value="pendentes">Pendentes</option>
        </select>
            <ul>
                {
                    listaFiltrada.map(i => 
                    <li key={i.id}> {i.texto}  <input type="checkbox" checked={i.concluida} onChange={() => conteudo.tarefaConcluida(i.id)} /> <button onClick={() => conteudo.excluirTarefa(i.id)}>Excluir</button>
                    </li>)
                }
            </ul>
        </>
    )
}