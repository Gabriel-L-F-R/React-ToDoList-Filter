import { useSetRecoilState, useRecoilValue } from "recoil"
import { listaState } from "../state/lista"

export function useTarefas() {

    const setLista = useSetRecoilState(listaState)
    const lista = useRecoilValue(listaState)
    console.log(lista)


    const salvarTarefa = (e, username, novaTarefa, setNovaTarefa) => {
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
    const concluirTarefa = id => {
        setLista(lista.map(tarefa => {
            if (tarefa.id === id) {
                return { ...tarefa, concluida: !tarefa.concluida }
            }
            return tarefa
        }))
    }

    const excluirTarefa = id => setLista(lista.filter(tarefa => tarefa.id !== id));

    return { salvarTarefa, concluirTarefa, excluirTarefa };
}
