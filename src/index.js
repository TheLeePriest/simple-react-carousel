import React from 'react'
import { StateProvider } from './store/store';
import Carousel from './components/Carousel/Carousel';

const SimpleCarousel = ({ children }) => <StateProvider childCount={children.length}><Carousel>{children}</Carousel></StateProvider>;

export default SimpleCarousel;
