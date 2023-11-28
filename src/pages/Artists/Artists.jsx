
import ArtistCard from "../../common/ArtistCard/ArtistCard"

const Artists = () => {
  const artists = [
    { name: "Richard Hershman", image: "", specialty: "Realism | Dot Work" },
    { name: "Tatuador 2", image: "url2", specialty: "Estilo 2" },
    
  ];

  return (
    <div className="artists-view">
      {artists.map((artist, index) => (
        <ArtistCard key={index} artist={artist} />
      ))}
    </div>
  );
};

export default Artists;
