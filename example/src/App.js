import React from "react";
import SimpleCarousel from "simple-react-carousel";
import "simple-react-carousel/dist/index.css";

const App = () => {
  return (
    <div style={{width: "500px", height: "700px"}}>
      <SimpleCarousel>
        <img src="https://picsum.photos/1200/600" alt="You can use images in the carousel!" data-itemFit="cover" />
        <div>
          <h2>OMG Text!</h2>
          <p>You can use text here too!</p>
        </div>
        <div>
          <h2>Text and Images!?</h2>
          <div>
            <p>Here is a pretty image:</p>
            <img src="https://picsum.photos/600/600" alt="You can use text and images in the same slide" />
          </div>
        </div>
      </SimpleCarousel>
    </div>
  );
};

export default App;
