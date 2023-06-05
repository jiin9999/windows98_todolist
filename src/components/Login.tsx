import React, { useState } from 'react';
import '98.css';
import styled from 'styled-components';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { useDispatch } from 'react-redux';
import { setUserName } from '../store/userSlice';

const Window = styled.div`
    left: 40%;
    top: 40%;
    height: 200px;
    width: 500px;
    text-align: center;
    position: absolute;
`;

const LoginHeader = styled.div`
    height: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    cursor: default;
    cursor: grab;
`;

const LoginDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 50px 50px 50px;
`;

const LoginP1 = styled.p`
    grid-column: 2;
    grid-row: 1;
    text-align: left;
    padding-top: 10px;
`;

const LoginP2 = styled.p`
    grid-column: 2;
    grid-row: 2;
    text-align: left;
    padding-top: 5px;
`;

const LoginIcon = styled.img`
    margin-top: 10px;
    margin-left: 20px;
    grid-column: 1;
    grid-row: 1/3;
    user-select: none;
`;

const LoginForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column: 2;
    grid-row: 3;
`;

export interface LoginProps {
    setIsLogin: (loggedIn: boolean) => void;
}

export default function Login({ setIsLogin }: LoginProps) {
    const dispatch = useDispatch();
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const trackPos: DraggableEventHandler = (e, data) => {
        setPosition({ x: data.x, y: data.y });
    };

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inputValue = (e.target as HTMLFormElement).elements.namedItem('userName') as HTMLInputElement;
        dispatch(setUserName(inputValue.value));
        setIsLogin(true);
    };

    return (
        <Draggable handle=".title-bar" onDrag={trackPos}>
            <Window className="window" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
                <LoginHeader className="title-bar">
                    <div className="title-bar-text">Enter User's Name</div>
                    <div>
                        <div className="title-bar-controls">
                            <button aria-label="Help"></button>
                        </div>
                    </div>
                </LoginHeader>

                <LoginDiv>
                    <LoginIcon src="img/login_icon.png" />
                    <LoginP1>
                        Type a name to identify yourself to Windows. <br />
                        Enter a name if you want to.
                    </LoginP1>
                    <LoginP2>Tip: If you don't enter a name, you won't start this website.</LoginP2>
                    <LoginForm onSubmit={onSubmitForm}>
                        <label>
                            <u>U</u>ser name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="userName"
                            autoComplete="off"
                            maxLength={15}
                            required
                            autoFocus
                        />
                        <button>Log in</button>
                    </LoginForm>
                </LoginDiv>
            </Window>
        </Draggable>
    );
}
