import NewsIndexViewer from "./NewsIndexViewer";

function NewsIndex() {
  return (
    <div className="container mt-4">
      <h1 className="display-1 text-center mb-5">News Time</h1>
      <div className="row">
        <NewsIndexViewer />
      </div>
    </div>
  );
}

export default NewsIndex;
