import { useState } from "react";
import { Lista } from "./lista";
import { useTodo } from "../hooks/useTodo";

export function Home() {
    const [novaTarefa, setNovaTarefa] = useState("")
    const { lista, setLista } = useTodo()
    

    function salvar(e) {
        e.preventDefault()
        if (!novaTarefa) return

        const novaTarefaObj = {
            id: Date.now(),
            texto: novaTarefa,
            concluida: false
        }

        setLista([...lista, novaTarefaObj])
        setNovaTarefa("")

    }

    return (
        <>
            <h1>To do list</h1>
            <Lista/>
            <form onSubmit={salvar}>
                <input type="text" placeholder="Tarefa" value={novaTarefa} onChange={e => setNovaTarefa(e.target.value)} />
                <button type="submit">+</button>
            </form>
        </>
    )
}