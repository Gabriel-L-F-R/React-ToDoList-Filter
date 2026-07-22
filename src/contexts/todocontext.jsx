import { createContext, useState } from 'react';

export const TodoContext = createContext({})

export function TodoProvider({ children }) {
    const [lista, setLista] = useState([
        {
            id: 1713590000000, 
            texto: "Estudar React",
            username: "Gabriel",
            concluida: false   
        },
        {
            id: 1713590000001,
            texto: "Estudar JavaScript",
            username: "Gabriel",
            concluida: false
        },
        {
            id: 1713590000002,
            texto: "Estudar TypeScript",
            username: "Ana",
            concluida: false
        }

    ])

    
    function tarefaConcluida(id) {
        const novaLista = lista.map(tarefa => {
            if (tarefa.id === id) {
                return { ...tarefa, concluida: !tarefa.concluida }
            }
            return tarefa
        })
        setLista(novaLista)
    }

    function excluirTarefa(id) {
        const novaLista = lista.filter(tarefa => tarefa.id !== id)
        setLista(novaLista)
    }
    return (
        <TodoContext.Provider value={{ lista, setLista, tarefaConcluida, excluirTarefa }}>
            {children}
        </TodoContext.Provider>
    )
}
