# Stan TV ReactJS Coding Challenge

## Description

This project was developed as part of the [Stan TV ReactJS coding challenge](https://github.com/StreamCo/stan-tv-coding-challenge/tree/master/reactjs) .

## Installation and Running

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npm run dev` to start the development server. 

## Features

### "Home" Page
- Displays a carousel of images featuring available programs.
- Each image in the carousel links to the corresponding "Program" page.
- Carousel navigation using left and right arrow keys on the keyboard.
- Renders a skeleton while data is being loaded.
- Renders an error message in case of data loading failure.

### "Program" Page
- Displays details of a specific program.
- Program details are determined by the ID passed from the "Home" page.
- Pressing the "backspace" key returns to the "Home" page.
- Renders a skeleton while data is being loaded.
- Renders an error message in case of data loading failure.

## Technologies Used 🛠️

-   React: JavaScript library for building user interfaces.
-   Vite: Build tool that provides fast and reliable development experience for modern web projects.
- Styled Components: A CSS-in-JS library that allows you to write actual CSS code to style your components.
-   React Router: Library for declarative, component-based navigation in React.
- Swiper: A modern touch slider library that can be used to create sliders, carousels, and other interactive components.

## Possible Improvements

- Implement unit and integration tests to ensure code quality.
- Improve responsiveness of the application for different screen sizes and devices.
- Add animations and transitions to enhance user experience.
- Refactor code to make it more modular and reusable. 
