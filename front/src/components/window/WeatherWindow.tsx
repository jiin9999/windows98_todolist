import React, { useState, useEffect } from 'react';
import '98.css';
import styled from 'styled-components';
import Draggable from 'react-draggable';

interface Props {
    setVisibleWeather: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Position {
    x: number;
    y: number;
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

const Window = styled.div`
    left: 40%;
    top: 40%;
    height: 200px;
    width: 500px;
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

const WeatherInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export default function WeatherWindow({ setVisibleWeather }: Props) {
    const [, setPosition] = useState<Position>({ x: 0, y: 0 });
    const trackPos = (data: { x: number; y: number }) => {
        setPosition({ x: data.x, y: data.y });
    };

    const closeButton = () => {
        setVisibleWeather(false);
    };

    const [weather, setWeather] = useState<WeatherData | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const position = await new Promise<{ lat: number; lon: number }>((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition((position) => {
                        resolve({
                            lat: position.coords.latitude,
                            lon: position.coords.longitude,
                        });
                    }, reject);
                });

                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lon}&appid=56ffee6fb6e8161d0200129b8870a530&units=metric`,
                );
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchWeather();
    }, []);

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
