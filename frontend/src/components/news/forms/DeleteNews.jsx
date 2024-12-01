import { useState } from "react";
import { Navigate } from "react-router-dom";

function DeleteNews(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const res = await props.onFormSubmit(event);
    setResponse(res);
    setIsSubmitting(false);
  };
  if (response.status == 201) {
    return <Navigate replace to="/news" />;
  }
  return (
    <>
      <hr />
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-danger"
        >
          Delete
        </button>
      </form>
    </>
  );
}

export default DeleteNews;
