import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carouselslider() {

  return (
        <Carousel id="carouselExampleSlidesOnly" data-ride="carousel"className='carousel slide carousel slide container hover-wrapper my-4'>
        <Carousel.Item interval={8000}>
        <div className='row align-items-centr'>
          <div className='col-lg-8 col-md-8 col-sm-12 my-auto mx-auto'> <embed 
              className="h-75 w-75 rounded-circle border shadow-lg bg-blur border-gray p-2 px-5"
              src="images/vegetarian.jpg"
              alt="First slide"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <div className='row align-items-centr'>
          <div className='col-lg-8 col-md-8 col-sm-12 my-auto mx-auto'> <embed 
              className="h-75 w-75 rounded-circle border shadow-lg bg-blur border-gray p-2 px-5"
              src="images/creamofmashroom.jpg"
              alt="First slide"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <div className='row align-items-centr'>
          <div className='col-lg-8 col-md-8 col-sm-12 my-auto mx-auto'><embed
              className="h-75 w-75 rounded-circle border shadow-lg bg-blur border-gray p-2 px-5"
              src="images/nonveg.jpg"
              alt="Second slide"/>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <div className='row align-items-centr'>
          <div className='col-lg-8 col-md-8 col-sm-12 my-auto mx-auto'><embed
              className="h-75 w-75 rounded-circle border shadow-lg bg-blur border-gray p-2 px-5"
              src="images/desserts.jpg"
              alt="Second slide"/>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselslider;