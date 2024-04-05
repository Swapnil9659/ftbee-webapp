import React from "react";
import Slider from "react-slick";


export const ViewRecipe = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <div className="row pt-3 ">
        <div className="col-lg-12 col-md-12 col-sm-12  text-center justify-content-center">
        <h4 className="text-white">- Worldwide Recipes -</h4>
        </div>
      </div> 
      <div className="img-container">
        <Slider {...settings}>
                  <div className="image">
                      <div className="row"><img src="./images/asian.jpg" className="rimg rounded-top" alt="" /></div>
                      <div className="row bg-warning rounded-bottom py-1"><button className="card-title mx-auto btn w-75 rounded-bottom fs-5 fw-bold text-uppercase">Asian<i class="fa fa-hand-pointer fw-light fs-6 ps-2 rounded-circle xbootstrap ms-1"></i></button></div>
                  </div>
                  <div className="image">
                      <div className="row"><img src="./images/american.jpg" className="rimg rounded-top" alt="" /></div>
                      <div className="row w-100 bg-warning rounded-bottom py-1"><button className="card-title mx-auto rounded-top btn w-75  fs-5 fw-bold text-uppercase">American<i class="fa fa-hand-pointer fw-light fs-6 ps-2 rounded-circle xbootstrap ms-1"></i></button></div>
                  </div>
                  <div className="image">
                      <div className="row"><img src="./images/african.jpg" className="rimg rounded-top" alt="" /></div>
                      <div className="row bg-warning rounded-bottom py-1"><button className="card-title mx-auto btn w-75 rounded-bottom fs-5 fw-bold text-uppercase">African<i class="fa fa-hand-pointer fw-light fs-6 ps-2 rounded-circle xbootstrap ms-1"></i></button></div>
                  </div>
                  <div className="image">
                      <div className="row"><img src="./images/european.jpg" className="rimg rounded-top" alt="" /></div>
                      <div className="row bg-warning rounded-bottom py-1"><button className="card-title mx-auto btn w-75 rounded-top fs-5 fw-bold text-uppercase">European<i class="fa fa-hand-pointer fw-light fs-6 ps-2 rounded-circle xbootstrap ms-1"></i></button></div>
                  </div>
                  <div className="image"> 
                    <div className="row"><img src="./images/oceanic.jpg" className="rimg rounded-top" alt="" /></div>
                    <div className="row bg-warning rounded-bottom py-1"><button className="card-title mx-auto btn w-75 rounded-bottom fs-5 fw-bold text-uppercase">Oceanic<i class="fa fa-hand-pointer fw-light fs-6 ps-2 rounded-circle xbootstrap ms-1"></i></button></div>
                  </div>
        </Slider>
      </div>
    </div>
  );
}
