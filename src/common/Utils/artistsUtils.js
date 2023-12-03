
export const getSelectedArtist = (artists, artistId) => {
    const parsedArtistId = parseInt(artistId, 10);
    return artists.find(artist => artist.id === parsedArtistId);
  };