import { Box, Icon, Name } from './iconStyle';

interface MyComputerProps {
    setVisibleMyComputer: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MyComputer({ setVisibleMyComputer }: MyComputerProps) {
    const openWindow = (): void => {
        setVisibleMyComputer(true);
    };

    return (
        <Box onClick={openWindow}>
            <Icon src="img/myComputer.png" alt="computer icon" />
            <Name>Computer</Name>
        </Box>
    );
}
