# Weather Application Documentation

This is the technical documentation for the **Feather Weather Application** project by *jasmeetSSalh*. The application is designed to retrieve and display weather information based on user input or predefined coordinates.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The **Feather Weather Application** allows users to retrieve and display current weather information for a specific city. The application fetches data from the OpenWeatherMap API and presents it in a user-friendly interface.

## Features

- Fetches and displays weather data for a given city or predefined coordinates.
- Shows temperature in Celsius.
- Displays weather description, humidity, and wind information.
- Stylish user interface.

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (with npm)
- [Git](https://git-scm.com/)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/jasmeetSSalh/feather-weather-app.git
```

2. Navigate to the project directory:

```bash
cd feather-weather-app
```

3. Install the required npm packages:

```bash
npm install
```

## Usage

1. Start the application:

```bash
npm start
```

2. Open your web browser and go to `http://localhost:3000`.

3. Enter a city name in the search input and click the search button to retrieve weather information.

## File Structure

```
feather-weather-app/
├── public/
│   ├── styles.css
├── views/
│   ├── index.ejs
├── app.js
├── package.json
├── README.md
```

- `public/`: Contains static files, including the CSS styles.
- `views/`: Contains the EJS template for the application's UI.
- `app.js`: The main application file containing the server code.
- `package.json`: Contains project metadata and dependencies.
- `README.md`: Documentation for the project.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript)
- Axios (HTTP client)
- OpenWeatherMap API

## Contributing

Contributions to the project are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m "Add some feature"`.
4. Push the branch to your fork: `git push origin feature-name`.
5. Create a pull request in the original repository.
