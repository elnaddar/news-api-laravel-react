import { useParams } from "react-router-dom";
import { NEWS_API } from "../../../shared/constants";
import NewsForm from "./NewsForm";
import axios from "axios";

function NewsEdit() {
  const { news } = useParams();
  const handleFormSubmit = async function (event) {
    return await axios.put(NEWS_API + `/${news}`, event.target, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div className="container mt-4">
      <h1 className="display-1 text-center mb-5">Update Article</h1>
      <NewsForm
        successMessage="Updated successfully"
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default NewsEdit;
