# Website Recreation Project Portfolio

## Overview

This project is a recreation of an existing website, specifically the [Rekh Chand Sahu](https://rekhchandsahu.com/) website. The primary purpose of this project is educational; it is intended to study and understand how the original website is constructed. The recreation is done using React, and none of the original code has been copied. All the code in this project has been written by me from scratch.

## Purpose

The goal of this project is to:

- **Learn and practice React:** By recreating a fully functional website, I aim to deepen my understanding of React and its ecosystem.
- **Understand modern web design:** Analyzing and replicating a well-designed website helps in learning about layout, design patterns, and best practices in web development.
- **Improve coding skills:** Building a project from scratch reinforces coding skills and problem-solving abilities.

## Features

- **Minimal Theme:** The recreated website follows the minimalistic design theme of the original.
- **Responsive Design:** The website is designed to be fully responsive, ensuring it works well on various screen sizes.
- **Component-Based Architecture:** Leveraging the power of React, the website is built using reusable components.
- **AI Message Assist:** The contact form includes a "Fill with AI" helper that can generate a message from scratch or continue the text you already typed.

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- Node.js
- npm or yarn

### Running the Project

To start the development server, run:

```bash
npm start
```

or

```bash
yarn start
```

Open your browser and navigate to `http://localhost:3000` to see the website.

### AI in Contact Form

The Contact page can use Google Generative AI (Gemini) to help write or complete your message:

- Set an environment variable `REACT_APP_GEMINI_API_KEY` with a valid Gemini API key.
- If you have already written part of the message, clicking "Fill with AI" will continue and complete your draft instead of replacing it.
- If the key is missing, the button will not work and a warning appears in the console.

## License

This project is for educational purposes only and is not intended for commercial use. All content and code are created by me, inspired by the design of the original website at [rekhchandsahu.com](https://rekhchandsahu.com/).

## Acknowledgements

- Thanks to [Rekh Chand Sahu](https://rekhchandsahu.com/) for the inspiration and the design of the original website.
