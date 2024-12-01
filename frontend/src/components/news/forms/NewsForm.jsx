import { useState } from "react";
import { Link } from "react-router-dom";

function NewsForm(props) {
  const defaults = props.defaults ?? {};

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseData, setResponseData] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const response = await props.onFormSubmit(event);
    setResponseData(response.data);
    event.target.reset();
    setIsSubmitting(false);
  };

  const handleAlertClose = () => {
    setResponseData({});
  };
  return (
    <>
      {responseData.id ? (
        <div
          className="alert alert-success mb-5 alert-dismissible fade show"
          role="alert"
        >
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={handleAlertClose}
          ></button>
          {props.successMessage + " "}
          <strong>
            <Link to={"/news/" + responseData.id}>Go To Post</Link>
          </strong>
        </div>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            placeholder="Title"
            aria-describedby="helpId"
            defaultValue={defaults.title ?? ""}
          />
          <small id="helpId" className="text-muted">
            This is my First article and I say Hello.
          </small>
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            className="form-control"
            placeholder="Author"
            aria-describedby="helpId"
            defaultValue={defaults.author ?? ""}
          />
          <small id="helpId" className="text-muted">
            Ahmed Mahdy.
          </small>
        </div>
        <div className="mb-3">
          <label htmlFor="source" className="form-label">
            Source
          </label>
          <input
            type="text"
            name="source"
            id="source"
            className="form-control"
            placeholder="Source"
            aria-describedby="helpId"
            defaultValue={defaults.source ?? ""}
          />
          <small id="helpId" className="text-muted">
            Source.
          </small>
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            type="text"
            name="content"
            id="content"
            className="form-control"
            placeholder="Content"
            rows="10"
            defaultValue={defaults.content ?? ""}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default NewsForm;
