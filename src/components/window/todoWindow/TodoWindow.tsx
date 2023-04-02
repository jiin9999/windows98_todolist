import React, { useState, useEffect } from 'react';
import '98.css';
import Draggable, { DraggableData } from 'react-draggable';

import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../../../api/todoAPI';
import {
    Window,
    WindowHeader,
    CloseButton,
    WindowBody,
    InputForm,
    InputBox,
    Todo,
    TodoInput,
    TodoBox,
    TodoDetail,
    ButtonBox,
    EditInput,
} from './TodoWindowStyle';

interface TodoWindowProps {
    setVisibleTodo: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Position {
    x: number;
    y: number;
}

interface Todo {
    id: number;
    text: string;
    isEditing: boolean;
}

export default function TodoWindow({ setVisibleTodo }: TodoWindowProps) {
    const [todos, setTodos] = useState<string[]>([]);
    const [, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [todoInput, setTodoInput] = useState('');

    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editInputValue, setEditInputValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTodos();
            setTodos(data);
        };
        fetchData();
    }, []);

    const handleUpdateClick = (index: number) => {
        setEditingIndex(index);
        setEditInputValue(todos[index]);
    };

    const handleSaveClick = async () => {
        if (editingIndex !== null) {
            const updatedTodo = await updateTodo(editingIndex, editInputValue);
            if (updatedTodo) {
                const newTodos = [...todos];
                newTodos[editingIndex] = updatedTodo.data;
                setTodos(newTodos);
                setEditingIndex(null);
                setEditInputValue('');
            }
        }
    };

    const handleCancelClick = () => {
        setEditingIndex(null);
        setEditInputValue('');
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditInputValue(event.target.value);
    };

    const handleDeleteClick = async (index: number) => {
        await deleteTodo(index);
        setTodos(todos.filter((_, i) => i !== index));
    };

    const addTodoHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (todoInput !== '') {
            const newTodo = await addTodo(todoInput);
            if (newTodo) {
                setTodos([...todos, newTodo.data]);
                setTodoInput('');
            }
        }
    };

    const trackPos = (data: DraggableData) => {
        setPosition({ x: data.x, y: data.y });
    };

    const closeButton = () => {
        setVisibleTodo(false);
    };

    return (
        <Draggable handle=".title-bar" onDrag={(e, data) => trackPos(data)}>
            <Window className="window">
                <WindowHeader className="title-bar">
                    <div className="title-bar-text">Todos</div>
                    <div>
                        <div className="title-bar-controls">
                            <CloseButton aria-label="Close" onClick={closeButton} />
                        </div>
                    </div>
                </WindowHeader>
                <WindowBody className="window-body">
                    <p>Todos,</p>
                    <InputForm onSubmit={addTodoHandler}>
                        <InputBox className="field-row">
                            <TodoInput
                                type="text"
                                value={todoInput}
                                onChange={(e) => setTodoInput(e.target.value)}
                                maxLength={30}
                            />
                            <button type="submit">Add</button>
                        </InputBox>
                    </InputForm>
                    <TodoBox>
                        {todos.map((todo, index) => (
                            <Todo key={index}>
                                {editingIndex === index ? (
                                    <>
                                        <EditInput type="text" value={editInputValue} onChange={handleInputChange} />
                                        <ButtonBox>
                                            <button onClick={handleSaveClick}>Save</button>
                                            <button onClick={handleCancelClick}>Cancel</button>
                                        </ButtonBox>
                                    </>
                                ) : (
                                    <>
                                        <TodoDetail>{todo}</TodoDetail>
                                        <ButtonBox>
                                            <button onClick={() => handleUpdateClick(index)}>Update</button>
                                            <button onClick={() => handleDeleteClick(index)}>Delete</button>
                                        </ButtonBox>
                                    </>
                                )}
                            </Todo>
                        ))}
                    </TodoBox>
                </WindowBody>
            </Window>
        </Draggable>
    );
}
