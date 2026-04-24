import { createContext } from 'react';
import { useState } from 'react';

export const TodoContext = createContext({})

export function TodoProvider({ children }) {
    const [lista, setLista] = useState([
        {
            id: 1713590000000, 
            texto: "Estudar React",
            concluida: false   
        },
        {
            id: 1713590000001,
            texto: "Estudar JavaScript",
            concluida: false
        },
        {
            id: 1713590000002,
            texto: "Estudar TypeScript",
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
