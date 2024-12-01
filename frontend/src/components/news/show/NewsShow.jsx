import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE, NEWS_API } from "../../../shared/constants";
import { useParams, Link } from "react-router-dom";

function NewsShow() {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const { news } = useParams();
  const imagePath = API_BASE + article.image;

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await axios.get(NEWS_API + news);
      setArticle(response.data.data);
      setLoading(false);
    };

    fetchData();
  }, [news]);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="display-1 text-center mb-5">{article.title}</h1>
      <div>
        {article.image ? (
          <div className="mb-4 text-center">
            <img src={imagePath} className="img-fluid rounded-top" alt="" />
          </div>
        ) : (
          ""
        )}

        <p>{article.content}</p>
        <hr />
        <Link to={"/news/" + news + "/edit"} className="btn btn-primary">
          Edit Article
        </Link>
      </div>
    </div>
  );
}

export default NewsShow;
