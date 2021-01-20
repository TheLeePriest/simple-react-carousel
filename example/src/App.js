import React from "react";
import SimpleCarousel from "simple-react-carousel";

const App = () => {
  const imagesArray = Array(5).fill('https://d3exkw2xny6vg.cloudfront.net/MagicalKenya/img/uploads/image-5fd8c04981d3c.png');
  const renderImages = (images) => images.map((image, i) => <img key={`${image}-${i}`}  src={image} alt={`Test image ${i}`} />);

  return (
    <div>
      <SimpleCarousel>
        {renderImages(imagesArray)}
      </SimpleCarousel>
    </div>
  );
};

export default App;
