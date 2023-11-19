import React from 'react';
const ExampleCarouselImage = (props) => {

    return (
        <div>
         <img className="d-block w-100" src={props.src}  alt={props.alt}  />
        </div>
    );
};

export default ExampleCarouselImage;