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
    
    const filtered = repo.filter(item => item.stargazers_count || item.watchers_count )
    filtered.sort((a, b) => a.stargazers_count - b.stargazers_count);
    const reducedrepo = filtered.slice(0,8);

    return (
      <Grid container spacing={1}>
        {reducedrepo.map((data, i) => (
          <RepoCard repo={data} key={i} language={language} />
        ))}
      </Grid>
    );
  }
}
export default GitHubCards;
