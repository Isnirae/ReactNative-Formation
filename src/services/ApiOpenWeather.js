export const getCurrentWeather = async () => {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Cambrai&appid=94c13c7253fca7b441c3724398315ffb&units=metric&lang=fr')
    if (response.status === 200) {
        return await response.json();
    }
    return null;
}

export const getForecastWeather = async () => {
    const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=Cambrai&appid=94c13c7253fca7b441c3724398315ffb&units=metric&lang=fr')
    if (response.status === 200) {
        return await response.json();
    }
    return null;
}