import {useLogin} from "../../hooks/useLogin"
import { useState } from "react";
import { Container, Title, Campo, Button} from "./styles";

export default function Login() {
    const { login } = useLogin();
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    return (
        <Container>
            <Title>Login</Title>
            <Campo type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Campo type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={() => login(username, password)}  >Login</Button>
        </Container>
    )
}