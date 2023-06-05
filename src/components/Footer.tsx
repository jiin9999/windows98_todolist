import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FooterBar = styled.footer`
    display: flex;
    justify-content: space-between;
    background-color: silver;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2px;
    z-index: 2;
    border-top: 1px solid #f4f4f4;
    border-bottom: 1px solid #4e4e4e;
    box-shadow: inset 1px 0 #fff;
`;

const StartButtonContainer = styled.div`
    width: 50px;
    color: #000;
    margin-left: 2px;
    margin-bottom: 2px;
    vertical-align: middle;
    padding: 2px 6px 2px;
    background-color: silver;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
    box-shadow: inset 1px 1px #dfdfdf, 1px 0 #000, 0 1px #000, 1px 1px #000;
    min-width: 59px;
    margin-right: 6px;
`;

const StartImage = styled.img`
    width: 45px;
    height: 14px;
`;

const TimeBar = styled.div`
    width: 100px;
    line-height: 22px;
    padding: 0 10px;
    border-top: 1px solid gray;
    border-left: 1px solid gray;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    font-weight: 400;
`;

export default function Footer() {
    const [date, setDate] = useState(() => new Date());

    useEffect(() => {
        const timeId = setInterval(() => setDate(new Date()), 60 * 1000);
        return () => clearInterval(timeId);
    }, []);

    const hour = date.getHours();
    const minute = date.getMinutes();
    const isAM = hour < 12;

    return (
        <FooterBar>
            <StartButtonContainer>
                <StartImage src="./img/start.png" />
            </StartButtonContainer>
            <TimeBar>
                {isAM ? '오전' : '오후'} {hour % 12}:{minute.toString().padStart(2, '0')}
            </TimeBar>
        </FooterBar>
    );
}
