async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=19e43d19170e42b289043347250903&q=${city}&aqi=no`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (response.ok) {
            document.getElementById("weatherResult").innerHTML = `
                <h3>${data.location.name}, ${data.location.country}</h3>
                <p>Temperature: ${data.current.temp_c}°C</p>
                 <p><strong>Local Time:</strong> ${data.location.localtime}</p>
                <p>Weather: ${data.current.condition.text}</p>
                <img src="https:${data.current.condition.icon}" alt="Weather icon">
            `;
        } else {
            document.getElementById("weatherResult").innerHTML = `<p>${data.error.message}</p>`;
        }
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = "<p>Error fetching weather data.</p>";
    }
}
