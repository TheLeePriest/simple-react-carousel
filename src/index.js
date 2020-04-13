import React from 'react'
import { StateProvider } from './store/store';
import Carousel from './components/Carousel/Carousel';

const SimpleCarousel = ({ children, autoPlay }) => console.log(autoPlay, 'logging autoplay') || <StateProvider childCount={children.length} autoPlay={autoPlay}><Carousel>{children}</Carousel></StateProvider>;

export default SimpleCarousel;
