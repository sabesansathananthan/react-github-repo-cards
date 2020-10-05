# react-github-repo-cards

This application aims to show the Github repositories of the user in his/her react website.

---

## Article

[Article](https://medium.com/design-bootcamp/embed-your-github-project-on-your-react-website-ccefacc30f62)

---

## [Live Demo](https://react-github-repo-cards.vercel.app/)

---

## ScreenShot

![image](./docs/ScreenShot.JPG)

---

## Technologies used 🛠️

- [React](https://es.reactjs.org/) - Front-End JavaScript library
- [Material UI](https://material-ui.com/) - React UI Framework

## Development

To setup the app for development on your local machine, please follow the instructions below:

1. Clone the repo to your machine

```bash
git clone https://github.com/sabesansathananthan/react-github-repo-cards.git
```

2. Install necessary packages

```bash
npm install
```

3. Start the development environment

```bash
npm start
```

4. Visit http://localhost:3000

---

## Configuration

1. Open [`GitHub.js`](./src/api/GitHub.js) in the api folder. Use your github user name👤 instead of sabesansathananthan.

```JavaScript
const USER_NAME = 'sabesansathananthan';
```

2. Create a new .env file in your root folder. Add your github personal access tokens in `.env`

```
REACT_APP_API_KEY = YOUR_PERSONAL_ACCESS_TOKEN
```

---

## Deployment Status

## [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/sabesansathananthan/react-github-repo-cards)

## License 📄

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details
