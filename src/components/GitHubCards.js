import React, { Component } from "react";
import Axios from "axios";
import baseURL from "../api/GitHub";
import RepoCard from "./RepoCard";
import { Grid } from "@material-ui/core";

class GitHubCards extends Component {
  Title = [];
  state = {
    repo: [],
    language: [],
  };

  async componentDidMount() {
    const api_key = process.env.REACT_APP_API_KEY;

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

    await Axios.get("https://github-lang-deploy.herokuapp.com/").then(
      async (res) => await this.setState({ language: res.data })
    );
    repo.map(
      async (url) =>
        await Axios.get(url, {
          headers: {
            Authorization: `token ${api_key}`,
          },
        }).then(async (res) => {
          await this.setState({
            repo: [...this.state.repo, res.data],
          });
        })
    );
  }

  comapare(a, b) {
    if (a.stargazers_count > b.stargazers_count) return -1;
    else if (a.stargazers_count < b.stargazers_count) return 1;
    else if ((a.stargazers_count = b.stargazers_count)) {
      if (a.forks_count > b.forks_count) return -1;
      else if (a.forks_count < b.forks_count) return 1;
      else return 0;
    }
  }

  render() {
    const { repo, language } = this.state;
    repo.sort(this.comapare);

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
