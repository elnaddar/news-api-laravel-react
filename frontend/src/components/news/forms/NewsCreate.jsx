import NewsForm from "./NewsForm";

function NewsCreate() {
  return (
    <div className="container mt-4">
      <h1 className="display-1 text-center mb-5">Add Article</h1>

      <NewsForm />
    </div>
  );
}

export default NewsCreate;
