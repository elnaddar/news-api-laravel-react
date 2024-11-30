import { Link } from "react-router-dom";
import { API_BASE } from "../../shared/constants";

function NewsCard(props) {
  const { data: article } = props;
  const imagePath = API_BASE + article.image;
  const articleUrl = "/news/" + article.id;

  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img className="card-img-top" src={imagePath} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{article.title}</h4>
          <h6 className="card-subtitle mb-3">
            By:
            <span className="text-body-secondary"> {article.author}</span>
          </h6>

          <p className="card-text">{article.content.substring(0, 150)}...</p>
          <Link to={articleUrl} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
