import { useSetRecoilState } from "recoil";
import loginState from "../../state/login";
import contas from "../../contas.json";
import { useState } from "react";
import { Container, Title, Campo, Button } from "./styles";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const setUser = useSetRecoilState(loginState);
    function login(username, password) {
        if (contas.some(conta => conta.username === username && conta.password === password)) {
            setUser({ isLoggedIn: true, username });
        }
        else {
            alert("Usuário ou senha inválidos");
        }
    }

    return (
        <Container>
            <Title>Login</Title>
            <Campo type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Campo type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={() => login(username, password)}  >Login</Button>
        </Container>
    )
}