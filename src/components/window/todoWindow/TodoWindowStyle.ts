import styled from 'styled-components';

export const Window = styled.div`
    left: 40%;
    top: 40%;
    min-height: 200px;
    height: auto;
    width: 500px;
    text-align: center;
    position: absolute;
`;

export const WindowHeader = styled.div`
    height: 20px;
`;

export const CloseButton = styled.button`
    cursor: pointer;
`;

export const WindowBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 5px;
    font-size: 25px;
    height: auto;
`;

export const InputForm = styled.form`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const InputBox = styled.div`
    width: 90%;
`;

export const TodoInput = styled.input`
    width: 87%;
`;

export const TodoBox = styled.div`
    width: 90%;
    font-size: 15px;
    height: 100%;
`;

export const Todo = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const TodoDetail = styled.div`
    text-align: start;
`;

export const ButtonBox = styled.div`
    display: flex;
`;

export const EditInput = styled.input`
    width: 64%;
`;
