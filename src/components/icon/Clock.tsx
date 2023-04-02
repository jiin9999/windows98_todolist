import React from 'react';
import styled from 'styled-components';

const ClockBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    cursor: pointer;
`;

const ClockIcon = styled.img`
    width: 50px;
    height: 50px;
`;

const ClockName = styled.span`
    color: white;
    font-weight: 600;
    font-size: 14px;
`;

export default function Clock() {
    return (
        <ClockBox>
            <ClockIcon src="img/clock.png" alt="clock icon" />
            <ClockName>Timer</ClockName>
        </ClockBox>
    );
}
