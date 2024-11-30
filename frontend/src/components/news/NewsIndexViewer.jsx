import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

function NewsIndexViewer() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchNews = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/news");
      setArticles(response.data.data);
      setLoading(false);
    };
    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <>
      {articles.map((data) => (
        <NewsCard key={data.id} data={data} />
      ))}
    </>
  );
}

export default NewsIndexViewer;
