import React, { useState } from 'react';
import '98.css';
import styled from 'styled-components';
import { Window, WindowHeader } from './windowStyle';
import Draggable from 'react-draggable';
import { useDraggable } from '../../hooks/useDraggable';
import { selectUserName, resetUser } from '../../store/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLogin } from '../../store/loginSlice';
import { db } from '../../firebase-config';
import { doc, deleteDoc } from 'firebase/firestore';

interface Props {
    setVisibleMyComputer: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Position {
    x: number;
    y: number;
}

const Hello = styled.p`
    padding-top: 5px;
    font-size: 30px;
`;

const WindowBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-direction: center;
    height: 100%;
    width: 100%;
`;

const ComputerIconSet = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    height: 100px;
    margin-top: 10px;
`;

const ComputerBox = styled.div`
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

const IconName = styled.span`
    font-weight: 600;
    font-size: 14px;
`;

export default function MyComputerWindow({ setVisibleMyComputer }: Props) {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const docRef = doc(db, 'todos', userName);
    const { trackPos } = useDraggable({ x: 0, y: 0 });

    const IMAGE_PATH = {
        logOut: 'img/logout.png',
        deleteData: 'img/deleteData.png',
        madeBy: 'img/madeBy.png',
    };

    const closeButton = () => {
        setVisibleMyComputer(false);
    };

    const logout = () => {
        dispatch(resetUser());
        dispatch(setIsLogin(false));
    };

    const deleteData = async () => {
        console.log(userName);
        try {
            await deleteDoc(docRef);
        } catch (error) {
            console.error('Error deleting document: ', error);
        }
        dispatch(resetUser());
        dispatch(setIsLogin(false));
    };

    return (
        <Draggable handle=".title-bar" onDrag={trackPos}>
            <Window className="window">
                <WindowHeader className="title-bar">
                    <div className="title-bar-text">My Computer</div>
                    <div>
                        <div className="title-bar-controls">
                            <button aria-label="Close" onClick={closeButton}></button>
                        </div>
                    </div>
                </WindowHeader>
                <WindowBody className="window-body">
                    <Hello>Hello, {userName}</Hello>
                    <ComputerIconSet>
                        <ComputerBox onClick={logout}>
                            <Icon src={IMAGE_PATH.logOut} alt="logout icon" />
                            <IconName>Logout</IconName>
                        </ComputerBox>
                        <ComputerBox onClick={deleteData}>
                            <Icon src={IMAGE_PATH.deleteData} alt="delete Data icon" />
                            <IconName>Delete Data</IconName>
                        </ComputerBox>
                        <ComputerBox>
                            <Icon src={IMAGE_PATH.madeBy} alt="made by icon" />
                            <IconName>Made By</IconName>
                        </ComputerBox>
                    </ComputerIconSet>
                </WindowBody>
                {/* </Resizable> */}
            </Window>
        </Draggable>
    );
}
