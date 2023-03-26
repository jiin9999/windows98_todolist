import React from 'react';
import styled from 'styled-components';

interface MyComputerProps {
    setVisibleMyComputer: React.Dispatch<React.SetStateAction<boolean>>;
}

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

const MyComputer: React.FC<MyComputerProps> = ({ setVisibleMyComputer }) => {
    const openWindow = (): void => {
        setVisibleMyComputer(true);
    };

    return (
        <Box onClick={openWindow}>
            <Icon src="img/myComputer.png" alt="computer icon" />
            <Name>Computer</Name>
        </Box>
    );
};

export default MyComputer;
