Weather App
This is a simple weather app built with JavaScript, Handlebars, CSS, and HTML. It fetches the current weather data for a given location using the OpenWeatherMap API and displays it in a user-friendly format.

Demo
You can try the app online at https://chaudhry-weather-app.herokuapp.com/

Getting Started
To run the app locally, you'll need to have Node.js and npm installed on your system. Then, follow these steps:

Clone this repository or download the ZIP file and extract it to a directory of your choice.
Open a terminal or command prompt and navigate to the directory where you've saved the app.
Run npm install to install the app's dependencies.
Run npm start to start the app.
Open your web browser and go to http://localhost:3000.
Usage
To use the app, simply enter a city name, a zip code, or a latitude and longitude pair in the search bar and press the "Get Weather" button. The app will fetch the weather data for the location you've entered and display it on the screen. You can also change the temperature units (Celsius or Fahrenheit) by clicking on the corresponding button.

Credits
This app was created by Usman Chaudhry as a personal project. The weather data is provided by the OpenWeatherMap API, which requires an API key to use. The app uses dotenv to load the API key from a .env file, which is not included in this repository for security reasons. If you want to run the app locally, you'll need to create your own .env file and set the API_KEY variable to your own API key from OpenWeatherMap.