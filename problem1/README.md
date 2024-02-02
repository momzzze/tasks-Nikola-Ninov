# React + Vite Project

## Getting Started
    This project is a simple React project that uses Vite as the build tool
### Installation
This project is built using React and Vite. Follow the steps below to get started.

- npm install
- npm run dev    

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm: npm is distributed with Node.js, so if you have Node.js installed, you should have npm as well.


### Element Structure:

- src
    - components
        -Footer.jsx
        -Banner.jsx    can be named also as hero-section 
        -Content.jsx
        -NavBar.jsx
    - main.jsx
    - App.jsx
    - index.css 

### Explanation:

    My simple App.jsx wraps the components together. They all use the same style sheet index.css.
    The logic is not good but it works I know how many images I have and I know their names I use useState to get random image name and setting it to the state of the image.
    After that in the useEffect I set the image to the state of the image.
    In other words, I have a state for the image and I change it randomly on the reload of the page.
    Then I use 2 div elements on of them for the image with z index -2 or something like that and the other one for the content. Because I had no other idea how to make the image as a background dynamically.
    map is not Iframe but img because I did not use it till this moment and to show the exact  map I need to use zoom but then I mess up with the size of the element thats why deal with what you know.
    I think I fail on the exact pixels on some elements but I am not sure.