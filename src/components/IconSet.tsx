import React, { useState } from 'react';
import styled from 'styled-components';
import MyComputer from './icon/MyComputer';
import MyComputerWindow from './window/MyComputerWindow';
import Todo from './icon/Todo';
import TodoWindow from './window/todoWindow/TodoWindow';
import Clock from './icon/Clock';
import Weather from './icon/Weather';
import WeatherWindow from './window/WeatherWindow';

const IconBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    height: 450px;
    margin: 10px 0 0 15px;
`;

export default function IconSet() {
    const [visibleMyComputer, setVisibleMyComputer] = useState<boolean>(false);
    const [visibleTodo, setVisibleTodo] = useState<boolean>(false);
    const [visibleClock, setVisibleClock] = useState<boolean>(false);
    const [visibleWeather, setVisibleWeather] = useState<boolean>(false);

    return (
        <IconBox>
            <MyComputer setVisibleMyComputer={setVisibleMyComputer} />
            {visibleMyComputer && <MyComputerWindow setVisibleMyComputer={setVisibleMyComputer} />}

            <Todo setVisibleTodo={setVisibleTodo} />
            {visibleTodo && <TodoWindow setVisibleTodo={setVisibleTodo} />}

            <Clock />

            <Weather setVisibleWeather={setVisibleWeather} />
            {visibleWeather && <WeatherWindow setVisibleWeather={setVisibleWeather} />}
        </IconBox>
    );
}
