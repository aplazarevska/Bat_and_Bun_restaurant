import React from 'react';

const EmbedMap = ({ handleMapClick }) => {
  const imgUrl = "./img/bat-bun-map.jpg";
  
  return (
    <div data-testid="embed-map" id="embed-map" style={{ backgroundImage: `url(${imgUrl})` }} onClick={handleMapClick} >
    </div>
  )
}

export default EmbedMap;
