/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import "./Pagination.css";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button className="buttonPaginationAppointments" onClick={handlePrevClick} disabled={currentPage === 1}>
        <FontAwesomeIcon
          icon={faForward} rotation={180}  style={{ "--fa-primary-color": "#efb810", "--fa-secondary-color": "#efb810",
          }}
        />
      </button>
      <button className="buttonPaginationAppointments" onClick={handleNextClick} disabled={currentPage === totalPages}>
        <FontAwesomeIcon icon={faForward} style={{ color: "#efb810" }} />
      </button>
    </div>
  );
};

export default Pagination;
