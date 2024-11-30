function NewsForm(props) {
  const defaults = props.defaults ?? {
    title: "",
    author: "",
    source: "",
    content: "",
  };
  return (
    <form action="">
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
          defaultValue={defaults.title}
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
          defaultValue={defaults.author}
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
          defaultValue={defaults.source}
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
          defaultValue={defaults.content}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default NewsForm;
