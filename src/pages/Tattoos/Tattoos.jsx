import PropTypes from "prop-types";
import "./Tattoos.css"; 

const Tattoos = ({ artist }) => {
  return (
    <div className="tattoos-container">
      <h2>Tattoos by {artist.name}</h2>
      <div className="tattoos-list">
        {artist.tattoos.map((tattoo, index) => (
          <div key={index} className="tattoo-item">
            <img src={tattoo.image} alt={`Tattoo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

Tattoos.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tattoos: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Tattoos;






