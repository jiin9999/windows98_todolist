import { Box, Icon, Name } from './iconStyle';

interface WeatherProps {
    setVisibleWeather: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Weather({ setVisibleWeather }: WeatherProps) {
    const openWindow = () => {
        setVisibleWeather(true);
    };
    return (
        <Box onClick={openWindow}>
            <Icon src="img/weather.png" alt="weather icon" />
            <Name>Weather</Name>
        </Box>
    );
}
