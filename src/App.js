import { Component } from "react";
import axios from "axios";
import { ArticlesList } from "./components/ArticlesList";
axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const response = await axios.get("search?qury=react");
      this.setState({ articles: response.data.hits });
    } catch(error) {
      this.setState({ error });
    } finally {
      this.setState({isLoading: false});
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;
    return (
      <>
      {error && <p>Whoopss... something went wrong!</p>}
        {isLoading && <p>Loading...</p>}

        {articles.length > 0 ? <ArticlesList articles={articles} /> : null}
      </>
    );
  }
}
