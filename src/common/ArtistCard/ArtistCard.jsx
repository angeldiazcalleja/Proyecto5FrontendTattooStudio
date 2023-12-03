// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import "./ArtistCard.css";

// const ArtistCard = ({ artist }) => {
//   return (
//     <div className="artist-card">
//       <img className="imgCard" src={artist.image} alt={artist.name} />
//       <div className="containerNameCard">
//         <h3>{artist.name}</h3>
//       </div>
//       <p className="specialty">{artist.specialty}</p>
//       <p className="description">{artist.description}</p>
//       <Link to={`/artists/${artist.id}/tattoos`}>
//         <button className="see-more">View More</button>
//       </Link>
//     </div>
//   );
// };

// ArtistCard.propTypes = {
//   artist: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     specialty: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default ArtistCard;

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ArtistCard.css";

// const ArtistCard = ({ artist }) => {
//   return (
//     <div className="artist-card">
//       <img className="imgCard" src={artist.image} alt={artist.name} />
//       <div className="containerNameCard">
//         <h3>{artist.name}</h3>
//       </div>
//       <p className="specialty">{artist.specialty}</p>
//       <p className="description">{artist.description}</p>
//       {artist.tattoos && artist.tattoos.length > 0 && (
//         <div>
//           <p>Tattoos:</p>
//           <div className="tattoo-list">
//             {artist.tattoos.map((tattoo) => (
//               <img key={tattoo.id} src={tattoo.image} alt={tattoo.description} />
//             ))}
//           </div>
//         </div>
//       )}
//       <Link to={`/artists/${artist.id}/tattoos`}>
//         <button className="see-more">View More</button>
//       </Link>
//     </div>
//   );
// };

const ArtistCard = ({ artist }) => {
  return (
    <div className="artist-card">
      <img className="imgCard" src={artist.image} alt={artist.name} />
      <div className="containerNameCard">
        <h3>{artist.name}</h3>
      </div>
      <p className="specialty">{artist.specialty}</p>
      <p className="description">{artist.description}</p>
      {/* <Link to={`/artists/${artist.id}/tattoos`}>
        <button className="see-more">View More</button>
      </Link> */}
      <Link to={"/tattooView"} state={{ artist }}>
        <button className="see-more">View More</button>
      </Link>
    </div>
  );
};

ArtistCard.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tattoos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default ArtistCard;
