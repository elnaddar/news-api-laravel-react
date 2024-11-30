import NewsIndexViewer from "./NewsIndexViewer";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

function NewsIndex() {
  const [searchParams] = useSearchParams();
  const params = { page: Number(searchParams.get("page") ?? 1) };
  return (
    <div className="container mt-4">
      <h1 className="display-1 text-center mb-5">News Time</h1>
      <div className="row">
        <NewsIndexViewer params={params} />
      </div>
      <Pagination currentPage={params.page} />
    </div>
  );
}

export default NewsIndex;
