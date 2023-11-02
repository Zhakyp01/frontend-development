# AIU HiddenKey

This is a React-based progressive web application, developed in TypeScript, designed to perform file encryption and decryption using a password within the browser. The project was initiated using [Create React App](https://github.com/facebook/create-react-app).

![AIU HiddenKey preview](preview.png?raw=true "AIU HiddenKey")

## CI/CD and Cloud Deployment

- GitHub Actions: I used GitHub Actions to set up automated workflows that trigger when changes are pushed to the master branch. These workflows include building and testing the application.

- Version Updates: When a change is pushed to the master branch, the pipeline automatically updates the versions in the cloud environment. This guarantees that the latest version of the application is always available to users.

- Google Cloud Services: I have leveraged Google Cloud Services to host my application. Google Cloud provides various tools and services for cloud computing, including hosting web applications.

## Installation

Clone the repo: `git clone https://github.com/Zhakyp01/frontend-development`\
Enter the project directory: `cd frontend-development`\
Install the necessary dependencies: `npm install`\
Run the project locally: `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run production`

Serves the build folder of the react app on localhost.
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `npm run deploy`

Builds the app for production to the `build` folder and deploys the build folder to github pages.

### `npm run package-update`

Run `npm install -g ncu` if you don't have ncu installed.\
Updates the dependency versions in the package.json of the project and installs the latest versions.\

### `npm run eject`

Copies all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

### Live Demo

You can view a live demo here as a [Github Page](https://myvivi.tk) or on [Demo](https://myvivi.tk).

### Usage

Instructions:

1. Select a file.
2. Write any passkey to encrypt/decrypt the file against.
3. Encrypt or Decrypt your file. It's that easy!\
   Note: Only the passkey used to encrypt a file can be used to decrypt the same.
