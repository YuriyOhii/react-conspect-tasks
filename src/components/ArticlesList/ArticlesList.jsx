import PropTypes from "prop-types";

export const ArticlesList = ({ articles }) => {
  return (
    <ul>
      {articles.map(({ objectID, title, url }) => (
        <li key={objectID}>
          <a href={url} target="_blank" rel="noopener norefferer">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};
