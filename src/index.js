import React, {useEffect} from 'react'

const SimpleCarousel = ({ children }) => {
  useEffect(() => {
    console.log('The use effect works!')
  }, [])
  return <div>{children}</div>
};

export default SimpleCarousel;
