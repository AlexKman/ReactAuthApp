Within this project is everything needed for authentication within a React Application using firebase. Within this project you can; sign up, login, reset password, change email and set authentication around routing using React Router.

I intend to use this as a sort of 'component' for my other projects as to why I have used React-Bootstrap for its simplicity, it is very simple to switch around and use your own styling or a different framework if preferable. Past the authentication stage there is a small web app with a basic homepage, navigation bar and profile page where you can change your email/password.

The only parts to this application that are needed to be changed are the .env.local files which include everything needed by firebase to complete authentication, all can be found within the authentication area within a firebase Web Application. As shown below.

REACT_APP_FIREBASE_API_KEY= Api Key Here
REACT_APP_FIREBASE_AUTH_DOMAIN= Auth Domain Here
REACT_APP_FIREBASE_DATABASE_URL= Databse Url Here
REACT_APP_FIREBASE_PROJECT_ID= Project Id Here
REACT_APP_FIREBASE_STORAGE_BUCKET= Storage Bucket Link Here
REACT_APP_FIREBASE_MESSAGING_SENDER_ID= Sender ID Here
REACT_APP_FIREBASE_APP_ID= App Id Here

Resources used:

1. https://reactjs.org/docs/hooks-reference.html
2. https://firebase.google.com/docs/auth
3. https://react-bootstrap.github.io/components/alerts
4. https://medium.com/@erbashakann/how-to-use-context-api-basically-with-authentication-example-33b36d955734
5. https://reactrouter.com/web/guides/quick-start
6. https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
