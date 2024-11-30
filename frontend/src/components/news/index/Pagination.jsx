import { Link } from "react-router-dom";

function Pagination(props) {
  const { currentPage } = props;
  const path = "/news?page=";
  const next = {
    link: path + (currentPage + 1),
  };
  const prev = {
    link: currentPage > 1 ? path + (currentPage - 1) : null,
    isNotFirst: currentPage > 1,
  };

  return (
    <ul className="pagination">
      <li className={"page-item " + (prev.isNotFirst ? "" : "disabled")}>
        <Link className="page-link" to={prev.link}>
          Previous
        </Link>
      </li>
      <li className="page-item">
        <Link className="page-link" to={next.link}>
          Next
        </Link>
      </li>
    </ul>
  );
}

export default Pagination;
