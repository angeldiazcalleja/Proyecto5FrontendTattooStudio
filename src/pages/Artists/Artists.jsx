import ArtistCard from "../../common/ArtistCard/ArtistCard";
import artist0 from "../../assets/artist0.jpg";
import artist1 from "../../assets/artist1.jpg";
import artist2 from "../../assets/artist2.jpg";
import artist4 from "../../assets/artist4.jpg";
import artist5 from "../../assets/artist5.jpg";
import artist6 from "../../assets/artist6.jpg";
import artist7 from "../../assets/artist7.webp";
import artist8 from "../../assets/artist8.jpg";
import "./Artists.css";


const Artists = () => {
   const artistsData = [
    { id: 0,name: "Richard Hershman", image: artist0, specialty: "Realism || Dot Work", description:"When it comes to tattooing realistic portraits, Richard is one of the best in the game.", },
    { id: 8,name: "Rebecca Ferguson", image: artist8, specialty: "Neo-Trad || Color Work", description: "Grace is a laser tattoo specialist, erasing what never should have existed and creating small pieces for modification." },
    { id: 4,name: "Rachel Parker", image: artist4, specialty: "Fine Line || Body Piercing", description:"Our reputable piercer Rachel, can create the look that you desire through a safe and sterile process." },
    { id: 1, name: "Giuseppe Colta", image: artist1, specialty: "Black Work || Laser Tattoo", description:" Giuseppe has been tattooing for 5 years. He really enjoys combining his styles to create unique custom designs." },
    { id: 5,name: "Jessica Ink", image: artist5, specialty: "Micro Realism || Fine Line", description: "Jessica does black and grey realistic tattoos.She finds inspiration from anime and sculptures" },
    { id: 2,name: "Russell Scrod", image: artist2, specialty: "Text || Dot Work", description:"Russell uses fine needles to create the most delicate pieces. We bring Russell over specifically from Milan for this style." },
    { id: 6,name: "Loreen Talhaoui", image: artist6, specialty: "Japanese || Body Piercing", description: "Loreen has been tattooing for over 10 years and he enjoys Japanese and Neo-Traditional tattoo styles. " },
    { id: 7,name: "Grace Hamilton", image: artist7, specialty: "Laser Tatoo || Body Piercing", description: "Grace is a laser tattoo specialist, erasing what never should have existed and creating small pieces for modification." },
  

  ];

  const artistsRow1 = artistsData.slice(0, 4);
  const artistsRow2 = artistsData.slice(4, 8);

  return (
    <div className="artists-view">
      <div className="lineArtists"></div>
      <div className="artists-row">
        {artistsRow1.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </div>
      <div className="artists-row">
        {artistsRow2.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
};


export default Artists
