import { useState, useMemo, useContext, useEffect } from "react"
import { Container, Filtro, List, Tarefa } from "./styles"
import {listaFiltrada, filtroState} from "../../state/lista"
import loginState from "../../state/login"
import { useSetRecoilState, useRecoilValue } from "recoil"
import { useTarefas } from "../../hooks/useTarefas"

export default function Lista() {
    const { isLoggedIn, username } = useRecoilValue(loginState);
    const lista = useRecoilValue(listaFiltrada)
    const setFiltro = useSetRecoilState(filtroState)
    const [novaTarefa, setNovaTarefa] = useState("")
    const { salvarTarefa, concluirTarefa, excluirTarefa } = useTarefas();


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
            <form onSubmit={(e) => salvarTarefa(e, username, novaTarefa, setNovaTarefa)}>
                <input type="text" placeholder="Tarefa" value={novaTarefa} onChange={e => setNovaTarefa(e.target.value)} />
                <button type="submit">+</button>
            </form>
        </Container>
    )
}