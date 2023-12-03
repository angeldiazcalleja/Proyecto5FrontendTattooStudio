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
    { id: 0,name: "Richard Hershman", image: artist0, specialty: "Realism || Dot Work", description:"When it comes to creating lifelike portraits through tattoo artistry, Richard stands out as one of the most skilled professionals"},
    { id: 8,name: "Rebecca Ferguson", image: artist8, specialty: "Neo-Trad || Color Work", description: "Rebeca is a laser tattoo specialist, erasing what never should have existed and creating small pieces for modification." },
    { id: 4,name: "Rachel Parker", image: artist4, specialty: "Fine Line || Body Piercing", description:"Our highly regarded piercer, Rachel, has the expertise to achieve the aesthetic you envision, ensuring a safe and sterile process." },
    { id: 1, name: "Giuseppe Colta", image: artist1, specialty: "Black Work || Laser Tattoo", description: "With 5 years of experience in the tattooing industry, Giuseppe takes immense pleasure in blending various style" },
    { id: 5,name: "Jessica Ink", image: artist5, specialty: "Micro Realism || Fine Line", description: "Jessica specializes in black and grey realistic tattoos, drawing inspiration from both anime and sculptures to bring her art to life." },
    { id: 2,name: "Russell Scrod", image: artist2, specialty: "Text || Dot Work", description:"Russell utilizes fine needles to craft the most delicate pieces. We bring Russell in for his expertise in this particular style."},
    { id: 6,name: "Loreen Talhaoui", image: artist6, specialty: "Japanese || Body Piercing", description: "Loreen has accumulated over a decade of experience in the art of tattooing, with a passion for Japanese tattoo styles."},
    { id: 7,name: "Grace Hamilton", image: artist7, specialty: "Laser Tatoo || Body Piercing", description: "A laser tattoo removal specialist, excelling at erasing what shouldn't endure and creating intricate modifications."},

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
