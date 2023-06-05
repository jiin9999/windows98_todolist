import React, { useState, useEffect } from 'react';
import '98.css';
import styled from 'styled-components';
import { Window, WindowHeader } from './windowStyle';
import Draggable from 'react-draggable';
import { useDraggable } from '../../hooks/useDraggable';
import { fetchWeather } from '../../api/weatherAPI';

const WeatherInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

interface Props {
    setVisibleWeather: React.Dispatch<React.SetStateAction<boolean>>;
}

interface WeatherData {
    main: {
        temp: number;
    };
    weather: {
        main: string;
        description: string;
    }[];
}

export default function WeatherWindow({ setVisibleWeather }: Props) {
    const { trackPos } = useDraggable({ x: 0, y: 0 });

    const closeButton = () => {
        setVisibleWeather(false);
    };

    const [weather, setWeather] = useState<WeatherData | null>(null);

    useEffect(() => {
        fetchWeather()
            .then((data) => setWeather(data))
            .catch((error) => console.error(error));
    }, []);

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
                <div className="window-body">
                    {weather ? (
                        <WeatherInfo>
                            <div>Temperature: {weather.main.temp}°C</div>
                            <div>Weather: {weather.weather[0].main}</div>
                            <div>Description: {weather.weather[0].description}</div>
                        </WeatherInfo>
                    ) : (
                        <div>Loading weather...</div>
                    )}
                </div>
            </Window>
        </Draggable>
    );
}
