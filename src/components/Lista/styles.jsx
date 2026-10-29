import styled from "styled-components";

export const Container = styled.div`
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;

`
export const Filtro = styled.select`
    width: 90%;
    padding: 10px;
    border: 1px solid #475569;
    border-radius: 6px;
    background-color: #0F172A;
    color: #fff;
    font-size: 16px;
    outline: none;
    margin: 20px auto;
`
export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 15px;
    height: 100%;
    border-radius: 20px;
`
export const Tarefa = styled.li`
    display: flex;
    color: #fff;
    align-items: center;
    gap: 20px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #0c0c0c86;
    border-radius: 5px;

    & > :first-child {
    margin-right: auto;
  }
`
export const Input = styled.input`
    width: 80%;
    padding: 10px;
    border: 1px solid #475569;
    border-radius: 6px;
    background-color: #0F172A;
    color: #fff;
    font-size: 16px;
    outline: none;
`
export const Button = styled.button`
    background-color: #0F172A;
    color: #fff;
    border: 1px solid #475569;
    border-radius: 6px;
    padding: 10px 20px;
    cursor: pointer;
    outline: none;
`