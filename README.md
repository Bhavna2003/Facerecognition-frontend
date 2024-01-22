# Face Recognition App 👥🔍
[View Live](https://face-recognition-app-i3x0.onrender.com/) ♂️

Welcome to the Face Recognition App, an application that leverages the power of face recognition technology to provide a secure and user-friendly experience. This project includes user authentication features, face detection using the Clarifai API, and storage of user information in a PostgreSQL database.

## Features

### 1. User Authentication
The app implements user authentication features, including registration, login, and logout functionalities. Users can create accounts, securely log in, and log out when they're done.

### 2. Face Recognition with Clarifai API
Utilizing the Clarifai API, the app is capable of detecting faces in images. A distinctive blue-colored box is drawn around the detected faces, providing an interactive and visually appealing experience.

### 3. User-Friendly Interface
The application boasts a user-friendly interface displaying the name of the user and their recognition score. Additionally, an input field allows users to enter an image URL, and the application dynamically displays the image at the bottom of the input.

### 4. PostgreSQL Integration
User information and application data are securely stored in a PostgreSQL database. This ensures data integrity, reliability, and provides a robust foundation for managing user accounts and related information.

## Technologies Used

- **React**: The frontend of the application is built using React, ensuring a dynamic and responsive user interface.
- **Clarifai API**: The Clarifai API is integrated to enable face recognition capabilities.
- **PostgreSQL**: The app utilizes PostgreSQL to securely store user information and application data.
- **Node.js / Express**: The backend server is built using Node.js and Express to handle authentication and database interactions.

## Getting Started

To get started with the Face Recognition App, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Bhavna2003/face-recognition-app.git
   cd face-recognition-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the project root and add the necessary environment variables (database connection details, Clarifai API key, etc.).

4. **Run the Application:**
   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000` in your web browser.

## Acknowledgments

- Clarifai API documentation: [Clarifai Docs](https://docs.clarifai.com/).

Enjoy using the Face Recognition App! 👥🔍
