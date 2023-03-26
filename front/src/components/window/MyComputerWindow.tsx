import React, { useState } from 'react';
import '98.css';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../store/userSlice';
import { Resizable } from 're-resizable';

interface Props {
    setVisibleMyComputer: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Position {
    x: number;
    y: number;
}

const Window = styled.div`
    left: 40%;
    top: 40%;
    text-align: center;
    position: absolute;
`;

const WindowHeader = styled.div`
    height: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    cursor: default;
`;

const Hello = styled.p`
    padding-top: 5px;
    font-size: 30px;
`;

const WindowBody = styled.div`
    overflow: auto;
    height: 100%;
    width: 100%;
`;

export default function MyComputerWindow({ setVisibleMyComputer }: Props) {
    const userName = useSelector(selectUserName);
    const [, setPosition] = useState<Position>({ x: 0, y: 0 });
    const trackPos = (data: { x: number; y: number }) => {
        setPosition({ x: data.x, y: data.y });
    };

    const closeButton = () => {
        setVisibleMyComputer(false);
    };

    return (
        <Draggable handle=".title-bar" onDrag={(e, data) => trackPos(data)}>
            <Window className="window">
                <WindowHeader className="title-bar">
                    <div className="title-bar-text">My Computer</div>
                    <div>
                        <div className="title-bar-controls">
                            <button aria-label="Close" onClick={closeButton}></button>
                        </div>
                    </div>
                </WindowHeader>
                <Resizable
                    defaultSize={{ width: 500, height: 200 }}
                    minWidth={300}
                    minHeight={100}
                    enable={{
                        right: true,
                        bottom: true,
                    }}
                    handleComponent={{
                        right: <span className="resize-handle right" />,
                        bottom: <span className="resize-handle bottom" />,
                    }}
                >
                    <div className="window-body">
                        <Hello>Hello, {userName}</Hello>
                    </div>
                </Resizable>
            </Window>
        </Draggable>
    );
}
