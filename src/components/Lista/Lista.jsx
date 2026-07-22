import { useState, useMemo, useContext } from "react"
import { useTodo } from "../../hooks/useTodo"
import { useLogin } from "../../hooks/useLogin"
import { Container, Filtro, List, Tarefa } from "./styles"

export default function Lista() {
    const { username } = useLogin()
    const conteudo = useTodo()
    const [filto, setFiltro] = useState([])
    const listaFiltrada = useMemo(() => {
        const listuser = conteudo.lista.filter(i => i.username === username)
        return listuser.filter(i => {
            if (filto === "concluidas") return i.concluida
            if (filto === "pendentes") return !i.concluida
            return true
        })
    }, [filto, conteudo.lista])

    const [novaTarefa, setNovaTarefa] = useState("")
    const { lista, setLista } = useTodo()


    function salvar(e) {
        e.preventDefault()
        if (!novaTarefa) return

        const novaTarefaObj = {
            id: Date.now(),
            username: username,
            texto: novaTarefa,
            concluida: false
        }

        setLista([...lista, novaTarefaObj])
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
                    listaFiltrada.map(i =>
                        <Tarefa key={i.id}>
                            <span>{i.texto}</span>
                            <input type="checkbox" checked={i.concluida} onChange={() => conteudo.tarefaConcluida(i.id)} /> 
                            <button onClick={() => conteudo.excluirTarefa(i.id)}>X</button>
                        </Tarefa>)
                }
            </List>
            <form onSubmit={salvar}>
                <input type="text" placeholder="Tarefa" value={novaTarefa} onChange={e => setNovaTarefa(e.target.value)} />
                <button type="submit">+</button>
            </form>
        </Container>
    )
}