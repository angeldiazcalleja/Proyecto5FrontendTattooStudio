import PropTypes from "prop-types";

const ArtistCard = ({ artist }) => {
  return (
    <div className="tatuador-card">
      <img src={artist.image} alt={artist.name} />
      <h3>{artist.name}</h3>
      <p>{artist.specialty}</p>
      <p className="description">{artist.description}</p>
      <button className="see-more">SEE MORE</button>
    </div>
  );
};

ArtistCard.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArtistCard;
