import styled from "styled-components";

export const Container = styled.div`
    color: #000000;
    background-color: #3b45633d;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;

`
export const Filtro = styled.select`
    width: 100%;
    height: 40px;
    padding: 10px;
    border: 1px solid #ffffffcb;
    border-radius: 20px;
    background-color: #ffffffcb;
    color: #000;
    font-size: 16px;
    outline: none;
`
export const List = styled.ul`
    list-style: none;
    background-color: #3b45633d;
    display: flex;
    flex-direction: column;
    padding: 15px;
    height: 100%;
    border-radius: 20px;
`
export const Tarefa = styled.li`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #ffffffcb;
    border: 1px solid #ffffffcb;
    border-radius: 20px;

    & > :first-child {
    margin-right: auto;
  }
`