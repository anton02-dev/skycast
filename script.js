let weatherData
    
  
    const icons = {
      "sun": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>`,
      "cloud": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>`,
      "cloud-sun": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 2v2"></path>
                      <path d="M12 8v2"></path>
                      <path d="M5.2 5.2l1.4 1.4"></path>
                      <path d="M17.4 5.2l-1.4 1.4"></path>
                      <path d="M2 12h2"></path>
                      <path d="M8 12h2"></path>
                      <path d="M5.2 18.8l1.4-1.4"></path>
                      <path d="M8 16H6a4 4 0 1 1 0-8h1a5.06 5.06 0 0 1 5-5 5 5 0 0 1 5 5v1h2a4 4 0 0 1 0 8h-6"></path>
                    </svg>`,
      "cloud-rain": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 13v8"></path>
                      <path d="M8 13v8"></path>
                      <path d="M12 15v8"></path>
                      <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
                    </svg>`,
      "wind": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
              </svg>`,
      "thermometer": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
                    </svg>`,
      "droplet": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>`,
      "eye": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>`,
      "sun-horizon": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 10V2"></path>
                      <path d="m4 10 2-2"></path>
                      <path d="M2 12h2"></path>
                      <path d="m20 10-2-2"></path>
                      <path d="M22 12h-2"></path>
                      <path d="M12 12a4 4 0 0 0-4 4"></path>
                      <path d="M12 12a4 4 0 0 1 4 4"></path>
                      <path d="M2 16h20"></path>
                    </svg>`,
      "gauge": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v10l4-4"></path>
                <circle cx="12" cy="14" r="8"></circle>
              </svg>`
    };
    
 
    function renderWeather(data) {
      const weatherContainer = document.getElementById('weather-container');
      
      const html = `
        <div class="weather-card">
          <div class="current-weather">
            <h1 class="city-name">${data.city}, ${data.country}</h1>
            <div class="date">${data.date}</div>
            <div class="weather-icon">
              ${icons[data.icon]}
            </div>
            <div class="temperature">${data.temp}°C</div>
            <div class="weather-description">${data.description}</div>
          </div>
          
          <div class="weather-details">
            <div class="detail-item">
              ${icons.thermometer}
              <span class="detail-label">Feels Like</span>
              <span class="detail-value">${data.details.feelsLike}°C</span>
            </div>
            <div class="detail-item">
              ${icons.droplet}
              <span class="detail-label">Humidity</span>
              <span class="detail-value">${data.details.humidity}%</span>
            </div>
            <div class="detail-item">
              ${icons.wind}
              <span class="detail-label">Wind Speed</span>
              <span class="detail-value">${data.details.windSpeed} km/h</span>
            </div>
            <div class="detail-item">
              ${icons.gauge}
              <span class="detail-label">Pressure</span>
              <span class="detail-value">${data.details.pressure} hPa</span>
            </div>
            <div class="detail-item">
              ${icons.eye}
              <span class="detail-label">Visibility</span>
              <span class="detail-value">${data.details.visibility} km</span>
            </div>
            <div class="detail-item">
              ${icons["sun-horizon"]}
              <span class="detail-label">UV Index</span>
              <span class="detail-value">${data.details.uvIndex}</span>
            </div>
          </div>
        </div>
        
        <h2 class="forecast-heading">5-Day Forecast</h2>
        <div class="forecast">
          ${data.forecast.map(day => `
            <div class="forecast-day">
              <div class="forecast-date">${day.day}</div>
              <div class="forecast-icon">
                ${icons[day.icon]}
              </div>
              <div class="forecast-temps">
                <span class="max-temp">${day.high}°</span>
                <span class="min-temp">${day.low}°</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      
      weatherContainer.innerHTML = html;
    }

    async function getWeatherData(city) {
        if (!city || city.trim() === '') {
            throw new Error('');
        }
        const apiKey = '543dfc9ec7664658b12130517252203';
        
  
        const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`;
        
        try {
            const response = await fetch(apiUrl);
            
            if (!response.ok) {
            throw new Error('Weather data not available');
            }

            if (response.status === 400) {
                throw new Error('Invalid request to weather API');
            } else if (response.status === 401) {
                throw new Error('API key issue');
            } else if (response.status === 429) {
                throw new Error('Too many requests');
            } else if (!response.ok) {
                throw new Error('Weather data not available');
            }
                        
            const data = await response.json();
            

            const date = new Date();
            const options = { weekday: 'long', month: 'long', day: 'numeric' };
            const formattedDate = date.toLocaleDateString('en-US', options);
            
          
            function mapWeatherIcon(code) {
         
            if (code >= 1000 && code <= 1002) return "sun"; 
            if (code >= 1003 && code <= 1006) return "cloud-sun"; 
            if (code >= 1009 && code <= 1030) return "cloud"; 
            if (code >= 1063 && code <= 1171) return "cloud-rain"; 
            if (code >= 1180 && code <= 1201) return "cloud-rain"; 
            return "cloud"; 
            }
            
           
            const forecastData = data.forecast.forecastday.map(day => {
            const dayDate = new Date(day.date);
            return {
                day: dayDate.toLocaleDateString('en-US', { weekday: 'long' }),
                icon: mapWeatherIcon(day.day.condition.code),
                high: Math.round(day.day.maxtemp_c),
                low: Math.round(day.day.mintemp_c)
            };
            });
            
       
            const formattedData = {
            city: data.location.name,
            country: data.location.country,
            date: formattedDate,
            temp: Math.round(data.current.temp_c),
            description: data.current.condition.text,
            icon: mapWeatherIcon(data.current.condition.code),
            details: {
                feelsLike: Math.round(data.current.feelslike_c),
                humidity: data.current.humidity,
                windSpeed: Math.round(data.current.wind_kph),
                pressure: data.current.pressure_mb,
                visibility: data.current.vis_km,
                uvIndex: data.current.uv
            },
            forecast: forecastData
            };
            
            return formattedData;
            
        } catch (error) {
            console.error('Error fetching:', error);
            throw error;
        }
        }

    
    function showLoading() {
      const weatherContainer = document.getElementById('weather-container');
      weatherContainer.innerHTML = `
        <div class="loading">
          <div class="spinner"></div>
        </div>
      `;
    }
    

    function showError(message) {
      const weatherContainer = document.getElementById('weather-container');
      weatherContainer.innerHTML = `
        <div class="error-message">
          <p>${message}</p>
        </div>
      `;
    }
    

    async function handleSearch() {
        const searchInput = document.getElementById('search-input');
        const city = searchInput.value.trim();
        
        if (!city) return;
        
        showLoading();
        
        try {
            const data = await getWeatherData(city);
            renderWeather(data);
        } catch (error) {
            showError("Failed to get weather data. Please try again.");
            console.error(error);
        }
    }
        

    document.getElementById('search-button').addEventListener('click', handleSearch);
    document.getElementById('search-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    });
    
    function getUserLocation() {
        showLoading();
    
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(

            position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                
            
                getWeatherData(`${lat},${lon}`)
                .then(data => {
                    renderWeather(data);
                })
                .catch(error => {
                    showError("Failed to get weather data. Please try a city name instead.");
                    console.error(error);
                });
            },
    
            error => {
                console.error("Geolocation error:", error);
                showError("Could not get your location. Please search for a city.");
            },
            {
                timeout: 10000,  
                maximumAge: 0    
            }
            );
        } else {
            showError("Geolocation is not supported by your browser. Please search for a city.");
        }
    }

    async function render() {
        const localCity = getUserLocation()
        weatherData = await getWeatherData(localCity);
        renderWeather(weatherData);
    }
    render();