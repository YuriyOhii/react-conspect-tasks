import { Component } from "react";
import axios from "axios";
import { ArticlesList } from "./components/ArticlesList";
axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export class App extends Component {
  state = {
    articles: [],
  };

  async componentDidMount() {
    const response = await axios.get("search?query=react");
    this.setState({articles: response.data.hits});
  }

  render() {
    const { articles } = this.state;
    return (
      <>{articles.length > 0 ? <ArticlesList articles={articles} /> : <p>Nothing</p>}</>
    );
  }
}
