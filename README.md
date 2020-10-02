# react-github-repo-cards

This application aims to show the Github repositories of the user in his/her react website.

---

## [Live Demo]()

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

1. Open [`GitHub.js`](./src/api/GitHub.js) in the api folder. Use your medium user name👤 instead of sabesansathananthan.

```JavaScript
`https://api.github.com/repos/sabesansathananthan/${repo}`;
```

2. Open [`GithubCards.js`](./src/components/GithubCards.js) in the Components folder. Replace your repository names

```JavaScript
let repo = [
      baseURL(`covid-19-tracker`),
      baseURL(`material-ui-medium-blog`),
      baseURL(`github-readme-medium-card`),
      baseURL(`react-youtube-search-clone`),
      baseURL(`tamil-song-corpus`),
      baseURL(`Nozama_Warriors`),
      baseURL(`Nursery_Management`),
      baseURL(`React-Medium-Blog`),
    ];
```

3. Add your github personal access tokens in [`GithubCards.js`](./src/components/GithubCards.js)

```JavaScript
headers: {
            Authorization: "token YOUR_PERSONAL_ACCESS_TOKEN",
          }
```

---

## Deployment Status

---

## License 📄

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details
