import { useState } from 'react';
import { DraggableData, DraggableEventHandler } from 'react-draggable';

type Position = { x: number; y: number };

export const useDraggable = (initialPos: Position) => {
    const [position, setPosition] = useState<Position>(initialPos);

    const trackPos: DraggableEventHandler = (e, data: DraggableData) => {
        setPosition({ x: data.x, y: data.y });
    };

    return { position, trackPos };
};
