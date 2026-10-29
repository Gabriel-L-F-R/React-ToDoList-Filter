import styled from "styled-components";

export const Container = styled.div`
    margin-left: 20%;
    margin-top: 1.5%;
    width: 60%;
    height: 95vh;
    text-align: center;
    padding: 25px;
    border-radius: 10px;
    @media (max-width: 768px) {
        margin: 0;
        padding: 0px;
        width: 100%;
        height: 100vh;
    }
`

export const Title = styled.h1`
    font-size: 3em;
    background-color: #1E293B;
    color: #fff;
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    margin: 0 auto;
`
export const Conteudo = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 86%;
    background-color: #1E293B;

    text-align: center;
    padding: 25px;
    border-radius: 0px 0px 10px 10px;
`

