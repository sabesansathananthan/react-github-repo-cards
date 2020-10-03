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
  compare = (a, b) => {
    if (a.stargazers_count < b.stargazers_count) {
      return -1;
    }
    if (a.stargazers_count > b.stargazers_count) {
      return 1;
    }
    return 0;
  };

  async componentDidMount() {
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
            Authorization: `token ${process.env.GITHUb_API_KEY}`,
          },
        }).then(async (res) => {
          await this.setState({
            repo: [...this.state.repo, res.data],
          });
        })
    );
  }
  render() {
    const { repo, language } = this.state;
    repo.sort((a, b) =>
      a.stargazers_count > b.stargazers_count
        ? -1
        : b.stargazers_count > a.stargazers_count
        ? 1
        : 0
    );
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
