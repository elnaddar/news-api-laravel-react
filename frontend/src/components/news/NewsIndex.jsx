import NewsIndexViewer from "./NewsIndexViewer";
import { useSearchParams } from "react-router-dom";

function NewsIndex() {
  const [searchParams] = useSearchParams();
  return (
    <div className="container mt-4">
      <h1 className="display-1 text-center mb-5">News Time</h1>
      <div className="row">
        <NewsIndexViewer params={{ page: searchParams.get("page") }} />
      </div>
    </div>
  );
}

export default NewsIndex;
