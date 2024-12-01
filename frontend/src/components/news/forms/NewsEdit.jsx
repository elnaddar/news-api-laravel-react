import { useParams } from "react-router-dom";
import { NEWS_API } from "../../../shared/constants";
import NewsForm from "./NewsForm";
import axios from "axios";
import { useEffect, useState } from "react";
import DeleteNews from "./DeleteNews";

function NewsEdit() {
  const { news } = useParams();
  const END_POINT = NEWS_API + news;
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState({});

  useEffect(() => {
    setLoading(true);
    (async function () {
      const response = await axios.get(END_POINT);
      setArticle(response.data.data);
      setLoading(false);
    })();
  }, [END_POINT]);

  const handleFormSubmit = async function (event) {
    return await axios.put(END_POINT, event.target, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleFormDelete = async function () {
    return await axios.delete(END_POINT, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="container mt-4">
      <h1 className="display-1 text-center mb-5">Update Article</h1>
      <NewsForm
        defaults={article}
        successMessage="Updated successfully"
        onFormSubmit={handleFormSubmit}
      />
      <DeleteNews onFormSubmit={handleFormDelete} endpoint={END_POINT} />
    </div>
  );
}

export default NewsEdit;
