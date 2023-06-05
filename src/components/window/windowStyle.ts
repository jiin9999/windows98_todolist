import styled from 'styled-components';

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

export { Window, WindowHeader };
