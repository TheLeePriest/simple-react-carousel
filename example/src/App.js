import React from "react";
import SimpleCarousel from "simple-react-carousel";

const App = () => {
  const imagesArray = Array(5).fill('https://picsum.photos/1920/1080');
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
