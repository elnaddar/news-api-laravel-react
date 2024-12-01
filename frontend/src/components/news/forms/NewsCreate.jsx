import { NEWS_API } from "../../../shared/constants";
import NewsForm from "./NewsForm";
import axios from "axios";

function NewsCreate() {
  const handleFormSubmit = async function (event) {
    return await axios.post(NEWS_API, event.target, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div className="container mt-4">
      <h1 className="display-1 text-center mb-5">Add Article</h1>
      <NewsForm
        successMessage="Created successfully"
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default NewsCreate;
