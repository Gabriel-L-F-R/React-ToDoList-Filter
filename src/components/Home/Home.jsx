import Lista from "../Lista/Lista";
import Login from "../Login/Login";
import loginState from "../../state/login";
import { Container, Title, Conteudo } from "./styles";
import { useRecoilValue } from "recoil";

export default function Home() {
    const { isLoggedIn, username } = useRecoilValue(loginState);

    return (
        <Container>
            <Title>{username && `${username}'s`} To do list</Title>
            <Conteudo>
                {isLoggedIn ? <Lista /> : <Login />}
            </Conteudo>
        </Container>
    )
}