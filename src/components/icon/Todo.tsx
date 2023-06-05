import { Box, Icon, Name } from './iconStyle';

interface TodoProps {
    setVisibleTodo: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Todo({ setVisibleTodo }: TodoProps) {
    const openWindow = () => {
        setVisibleTodo(true);
    };

    return (
        <Box onClick={openWindow}>
            <Icon src="img/todo.png" alt="todo icon" />
            <Name>Todo</Name>
        </Box>
    );
}
