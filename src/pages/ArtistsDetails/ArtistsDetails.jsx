import { useParams } from 'react-router-dom';
import { tattoosImages } from '../../common/Utils/index';
import "./ArtistsDetails.css";

const ArtistsDetails = () => {
  const { artistId } = useParams();

  const artistTattoos = tattoosImages.filter(tattoo => tattoo.alt.toLowerCase() === artistId.toLowerCase());

  if (artistTattoos.length === 0) {
    return <div>No se encontraron tatuajes para este artista</div>;
  }

  return (
    <div className="containerTattoos">
      <h2>Tatuajes de {artistId}</h2>
      <div>
        <ul className="tattoos-list">
          {artistTattoos.map((tattoo, index) => (
            <li key={index}>
              <img src={tattoo.src} alt={`Tatuaje ${index + 1}`} />
              <p>{artistId}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArtistsDetails;
