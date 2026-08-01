import { atom, selector } from 'recoil';
import loginState from './login';

const listaState = atom({
    key: 'listaState',
    default: [
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

    ]
});

const filtroState = atom({
    key: 'filtroState',
    default: ''
});

const listaFiltrada = selector({
    key: 'listaFiltrada',
    get: ({ get }) => {
        const lista = get(listaState)
        const filtro = get(filtroState)
        const { username } = get(loginState);

        return lista.filter(i => {
            if (filtro === "concluidas" &&i.username === username) return i.concluida
            if (filtro === "pendentes" && i.username === username) return !i.concluida
            return i.username === username
            
        })
    }
})

export { listaState, filtroState, listaFiltrada };