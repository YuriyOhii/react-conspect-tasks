import { Component } from "react";
import api from "./components/api";
import { ArticlesList } from "./components/ArticlesList";

export class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const articles =await api.fetchQuery('react');
      this.setState({ articles });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;
    return (
      <>
        {error && (
          <p>
            Whoopss... something went wrong!
            {error.message}
          </p>
        )}
        {isLoading && <p>Loading...</p>}

        {articles.length > 0 ? <ArticlesList articles={articles} /> : null}
      </>
    );
  }
}
