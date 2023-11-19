import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../carousels/ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.css';
import movieData from '../../data.json';


function UncontrolledExample() {
  return (
    <div style={{ display: 'block', width: 300, marginLeft:10 }}>
 <Carousel> 
        { 
          Object.values(movieData).map((el) => { 
            if(Array.isArray(el)) { 
              return el.map((childEl, key) => { 
                return  <Carousel.Item  key={key} interval={500}> 
                    <ExampleCarouselImage  
                        src={`assets/${childEl['CoverImage']}`} 
                    /> 
                    <Carousel.Caption> 
                      <h3>{childEl.Category}</h3> 
                    <p> 
                    {childEl.Description}
                    </p> 
                    </Carousel.Caption> 
                </Carousel.Item> 
              }) 
            } 
          }) 
        } 
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;