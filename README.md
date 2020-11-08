<h1 align='center'>React Github Repo Cards</h1>

<p align="center">
This application aims to show the Github repositories of the user in his/her react website.
</p>
<img alt="UI" src="./docs/ScreenShot.JPG"  align='center'/>

<p align="center">
<a href="https://github.com/sabesansathananthan/react-github-repo-cards/blob/master/.github/LICENSE">
      <img alt="licence" src="https://img.shields.io/github/license/sabesansathananthan/react-github-repo-cards" />
    </a><a href="https://github.com/sabesansathananthan/react-github-repo-cards">
      <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/sabesansathananthan/react-github-repo-cards" />
    </a><a href="https://github.com/sabesansathananthan/react-github-repo-cards">
      <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/sabesansathananthan/react-github-repo-cards?color=ff69b4" />
    </a><a href="https://twitter.com/intent/tweet?text=Wow,%20I%20used%20react-github-repo-cards.%20That%20is%20excellent.%20Thank%20you%20@TheSabesan">
      <img alt="Twitter URL" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTheSabesan" />
    </a>
</p>

## 🛠️ Built with

- [React JS](https://reactjs.org/) - Front-End JavaScript library
- [Material UI](https://material-ui.com/) - React UI Framework

## Installation

To setup the app for development on your local machine, please follow the instructions below:

1.  Clone the repo to your machine

    ```bash
    git clone https://github.com/sabesansathananthan/react-github-repo-cards.git
    cd react-github-repo-cards
    ```

2.  Install packages

    If you use `npm`

    ```bash
    npm install
    ```

    or

    If you use `yarn`

    ```bash
    yarn
    ```

3.  Change username

    Open [GitHub.js](./src/api/GitHub.js) in the api folder. Use your github user name👤 instead of sabesansathananthan.

    ```JavaScript
    const USER_NAME = 'sabesansathananthan';
    ```

4.  Add Token

    Create a new .env file in your root folder. Add your github personal access tokens in `.env`

    ```
    REACT_APP_API_KEY = YOUR_PERSONAL_ACCESS_TOKEN
    ```

5.  Run the development server

    If you use `npm`

    ```bash
    npm start
    ```

    or

    If you use `yarn`

    ```bash
    yarn start
    ```

6.  Visit <http://localhost:3000>

## [Live Demo](https://react-github-repo-cards.vercel.app/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/sabesansathananthan/react-github-repo-cards)

Don't forget to give a star :star: for this repo :slightly_smiling_face:

## <img alt='Article' height='25px' src ="https://raw.githubusercontent.com/matiassingers/awesome-readme/master/icon.png"/> Related Article

[Embed your GitHub project on your React website](https://medium.com/design-bootcamp/embed-your-github-project-on-your-react-website-ccefacc30f62) - _Sabesan Sathananthan_

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./.github/LICENSE) file for details
