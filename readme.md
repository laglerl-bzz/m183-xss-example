# XSS Demo Project

This project demonstrates different types of Cross-Site Scripting (XSS) vulnerabilities using a simple Node.js application with Express.

## Features

The application showcases the following types of XSS vulnerabilities:

1. **Stored XSS**: Users can post comments that are displayed without proper sanitization.
2. **Reflected XSS**: User input in the search query is reflected back in the response without escaping.
3. **DOM-Based XSS**: User input is directly manipulated in the DOM using JavaScript.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node app.js
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

3. Explore the following routes:
    - `/stored`: Demonstrates Stored XSS.
    - `/search`: Demonstrates Reflected XSS.
    - `/dom`: Demonstrates DOM-Based XSS.

## Project Structure

- `app.js`: Main application file containing the Express server and routes.
- `readme.md`: Documentation for the project.

## Security Notice

This project is intentionally vulnerable to demonstrate XSS attacks. **Do not deploy this application in a production environment.**

## License

This project is for educational purposes only and is not licensed for production use.
