import React, { Component } from "react";
import Axios from "axios";
import RepoCard from "./RepoCard";
import { Grid } from "@material-ui/core";
import {USER_NAME} from '../api/Github';

class GitHubCards extends Component {
  Title = [];
  state = {
    repo: [],
    language: [],
  };

  async componentDidMount() {
    const api_key = process.env.REACT_APP_API_KEY;

    let repos = await Axios.get(`https://api.github.com/users/${USER_NAME}/repos`);

    let lang = {}

    //Cached language data
    if (localStorage.getItem('lang')) {
      lang.data = JSON.parse(localStorage.getItem('lang'))
    } else {
      lang = await Axios.get("https://github-lang-deploy.herokuapp.com/");
      localStorage.setItem('lang', JSON.stringify(lang.data));
    }

    this.setState({
      repo: repos.data,
      language: lang.data
    })
  }
  render() {
    const { repo, language } = this.state;
    repo.sort((a, b) => a.startgazers_count - b.startgazers_count);

    return (
      <Grid container spacing={1}>
        {repo.map((data, i) => (
          <RepoCard repo={data} key={i} language={language} />
        ))}
      </Grid>
    );
  }
}
export default GitHubCards;
