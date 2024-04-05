import React, { useState, useMemo } from 'react';
import Slider from "react-slick";
import Pagination from '../Pagination';
import data from "../../Jsondoc/Breakfast.json";

let PageSize = 12;


export default function BreakfastSnacks({Breakfast}) {
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
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return data.items.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
  
    
    return (
        <div className='mx-4'>
            <div className="img-container my-4 vh-50">
                <Slider {...settings}>
                    <article class="card">
                        <div class="card-body bg-warning mx-1">
                            <h5 class="card-title text-white fw-bold">-Breakfast-</h5>
                            <p class="card-text text-white">Breakfast is the first meal of the day usually eaten in the morning. The word in English refers to breaking the fasting period of the previous night.</p>
                        </div>
                    </article>
                    <article className="card">
                        <div class="card-body bg-warning mx-1">
                            <p class="card-text text-white">The first known reference to breakfast in English dates back to the 15th century. The concept of breakfast came to India in the 17th century when the East India Company brought it with them from Europe.</p>
                        </div>
                    </article>
                    <article className="card">
                        <div class="card-body bg-warning mx-1">
                            <p class="card-text text-white">improves your energy levels and ability to concentrate in the short term, and can help with better weight management, reduced risk of type 2 diabetes and heart disease in the long term.</p>
                        </div>
                    </article>
                    <article className="card">
                        <div class="card-body bg-warning mx-1 ">
                            <p class="card-text text-white">When you skip breakfast, your blood sugar levels may plummet, leaving you fatigued, lethargic, and irritable. According to a 2021 study, breakfast skipping is linked to increased fatigue and reduced sleep quality.</p>
                        </div>
                    </article>
                    <article className="card"> 
                        <div class="card-body bg-warning mx-1">
                            <h5 class="card-title text-white fw-bold">-Snacks-</h5>
                            <p class="card-text text-white">Snacks is a small portion of food or drink or a light meal, especially one eaten between regular meals. They can be sweet or savory, light or substantial, and can be healthy or just for fun.</p>
                        </div>
                    </article>
                    <article className="card"> 
                        <div class="card-body bg-warning mx-1">
                            <p class="card-text text-white">The earliest recorded snacking dating back to Medieval Europe. In the 19th century, people began to consume prepared commercial snacks such as Dried fruits, Nuts, Chocolate bars, Cotton candy, and Waffle cones for ice cream etc.</p>
                        </div>
                    </article>
                    <article className="card"> 
                        <div class="card-body bg-warning mx-1">
                            <p class="card-text text-white">The history of snacks in India can be traced back to ancient times, when street food vendors sold affordable food to the general public. Some snacks have been eaten for generations, such as samosas, pakoras, and dhoklas.</p>
                        </div>
                    </article>
                </Slider>
            </div>
            <div className="mx-2 border-bottom border-secondary"></div>
            <section className="recipe">
                <div className="row pt-3">
                    <div className="col-lg-1 col-md-1 col-sm-2 justify-content-start">
                    </div> 
                    <div className="col-lg-12 col-md-12 col-sm-12 bg-primary px-5 rounded-top py-3">
                    <span className="text-white pt-2 text-uppercase ms-3 fs-2 fw-normal">Breakfast & Snacks</span>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 justify-content-end">
                    </div>
                </div> 
                <div className="shadow-lg px-5 bg-primary rounded-bottom pb-4 mb-5">
                    <div className='row mb-3'>
                        {currentTableData.map((d,index) =>(
                            <div className='col-lg-2 col-md-4 col-sm-12 m-3 w-21' key={d.id}>
                                <div className="row"><img src={d.picture} className="rimg" /></div>
                                <div className="row"><div className="card-text  btn rounded-3 py-2 w-100"><b>{d.name}</b><i class="fa fa-hand-pointer fw-light fs-6 ps-2 rounded-circle xbootstrap ms-1"></i></div></div>
                            </div>
                        ))}
                    </div>
                    <Pagination
                    className="pagination-bar ms-3 w-75 py-1 rounded"
                    currentPage={currentPage}
                    totalCount={data.items.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                    />
                </div>
            </section> 
        </div>
    )

}
