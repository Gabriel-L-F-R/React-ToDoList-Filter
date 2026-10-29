import styled from "styled-components";

export const Container = styled.div`
    background-color: #3b45633d;
    text-align: center;
    width: 70%;
    height: 55%;
    margin: 15% auto;
    border-radius: 10px;
    box-shadow: 5px 4px 10px 0px #0000009a;

`
export const Title = styled.h1`
    font-size: 3em;
    background-color: #0F172A;
    color: #fff;
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    margin: 0 auto;
`
export const Campo = styled.input`
    width: 70%;
    display: block;
    margin: 20px auto 0px auto;
    border-radius: 10px;
    border: 1px solid #0400df;
    padding: 10px;
`
export const Button = styled.button`
    width: 75%;
    display: block;
    margin: 20px auto;
    border-radius: 10px;
    border: 1px solid #0400df;
    padding: 10px;
    background-color: #2563EB;
    color: #fff;
    cursor: pointer;

    &&:hover {
        background-color: #5b7bf8;
    }
    &&:active {
        background-color: #4d6add;
        border: 2px solid #020224;
    }
`
