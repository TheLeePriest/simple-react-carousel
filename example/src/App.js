import React from "react";

import SimpleCarousel from "simple-react-carousel";
import "simple-react-carousel/dist/index.css";

const App = () => {
  return (
    <SimpleCarousel autoPlay={true}>
      <img src="https://picsum.photos/200" />
      <h1>Hello</h1>
      <img src="https://picsum.photos/200" />
      <img src="https://picsum.photos/200" />
      <img src="https://picsum.photos/200" />
      <img src="https://picsum.photos/200" />
    </SimpleCarousel>
  );
};

export default App;
