export const fetchWeather = async () => {
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
        return data;
    } catch (error) {
        console.error(error);
    }
};
