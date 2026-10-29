import { useState} from "react"
import { Container, Filtro, List, Tarefa, Button, Input } from "./styles"
import {listaState, listaFiltrada, filtroState} from "../../state/lista"
import loginState from "../../state/login"
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil"
import { useTarefas } from "../../hooks/useTarefas"

export default function Lista() {
    const { username } = useRecoilValue(loginState);
    const lista = useRecoilValue(listaFiltrada)
    const setFiltro = useSetRecoilState(filtroState)
    const [novaTarefa, setNovaTarefa] = useState("")
    const { concluirTarefa, excluirTarefa } = useTarefas();
    const [tarefasLista, setTarefasLista] = useRecoilState(listaState)
    const salvarTarefa = (e, username, novaTarefa) => {
        e.preventDefault()
        if (!novaTarefa) return

        const novaTarefaObj = {
            id: Date.now(),
            username: username,
            texto: novaTarefa,
            concluida: false
        }

        setTarefasLista([...tarefasLista, novaTarefaObj])
        setNovaTarefa("")
    }

    


    return (

        <Container>
            <label htmlFor="filtro">Filtro</label>
            <Filtro id="filtro" onChange={e => setFiltro(e.target.value)}>
                <option value="">Todos</option>
                <option value="concluidas">Concluídas</option>
                <option value="pendentes">Pendentes</option>
            </Filtro>
            <List>
                {
                    lista.map(i =>
                        <Tarefa key={i.id}>
                            <span>{i.texto}</span>
                            <input type="checkbox" checked={i.concluida} onChange={() => concluirTarefa(i.id)} />
                            <button onClick={() => excluirTarefa(i.id)}>X</button>
                        </Tarefa>)
                }
            </List>
            <form onSubmit={(e) => salvarTarefa(e, username, novaTarefa)}>
                <Input type="text" placeholder="Tarefa" value={novaTarefa} onChange={e => setNovaTarefa(e.target.value)} />
                <Button type="submit">+</Button>
            </form>
        </Container>
    )
}