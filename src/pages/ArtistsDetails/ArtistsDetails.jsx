// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ArtistCard from '../../common/ArtistCard/ArtistCard';
// import { tattoosImages } from '../../common/Utils/index';
// import Artists from '../Artists/Artists';
// import "./ArtistsDetails.css";

// const ArtistDetails = () => {
//     console.log('Type of artistsData:', typeof artistsData);
//   const { artistId } = useParams();

//   // Asegúrate de que Artists sea un array antes de intentar usar find
//   const selectedArtist = Array.isArray(Artists) ? Artists.find((artist) => artist.id === parseInt(artistId, 10)) : null;

//   const [tattoos, setTattoos] = useState([]);

//   useEffect(() => {
//     if (selectedArtist) {
//       const artistTattoos = tattoosImages.filter((tattoo) => tattoo.alt.toLowerCase() === selectedArtist.name.toLowerCase());
//       setTattoos(artistTattoos);
//     }
//   }, [selectedArtist]);

//   if (!selectedArtist) {
//     return <div>Artista no encontrado</div>;
//   }

//   return (
//     <div className="containerTattoos">
//       <h2>{selectedArtist.name}</h2>
//       <ArtistCard artist={selectedArtist} />
//       <div>
//         <h3>Tatuajes</h3>
//         <ul className="tattoos-list">
//           {tattoos.map((tattoo, index) => (
//             <li key={index}>
//               <img src={tattoo.src} alt={`Tatuaje ${index + 1}`} />
//               <p>{tattoo.alt}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ArtistDetails;



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
