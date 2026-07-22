import Lista from "../Lista/Lista";
import Login from "../Login/Login";
import { useLogin } from "../../hooks/useLogin";
import { useState } from "react";
import { Container, Title, Conteudo } from "./styles";

export default function Home() {
    const { isLoggedIn, username } = useLogin();

    return (
        <Container>
            <Title>{username && `${username}'s`} To do list</Title>
            <Conteudo>
                {isLoggedIn ? <Lista /> : <Login />}
            </Conteudo>
        </Container>
    )
}