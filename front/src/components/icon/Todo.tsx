import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    cursor: pointer;
`;

const Icon = styled.img`
    width: 50px;
    height: 50px;
`;

const Name = styled.span`
    color: white;
    font-weight: 600;
    font-size: 14px;
`;

interface TodoProps {
    setVisibleTodo: React.Dispatch<React.SetStateAction<boolean>>;
}

const Todo: React.FC<TodoProps> = ({ setVisibleTodo }) => {
    const openWindow = () => {
        setVisibleTodo(true);
    };

    return (
        <Box onClick={openWindow}>
            <Icon src="img/todo.png" alt="todo icon" />
            <Name>Todo</Name>
        </Box>
    );
};

export default Todo;
