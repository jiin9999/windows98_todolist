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

interface WeatherProps {
    setVisibleWeather: React.Dispatch<React.SetStateAction<boolean>>;
}
const Weather: React.FC<WeatherProps> = ({ setVisibleWeather }) => {
    const openWindow = () => {
        setVisibleWeather(true);
    };
    return (
        <Box onClick={openWindow}>
            <Icon src="img/weather.png" alt="weather icon" />
            <Name>Weather</Name>
        </Box>
    );
};
export default Weather;
