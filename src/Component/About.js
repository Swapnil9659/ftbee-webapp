import React from 'react'

export default function About() {
  return (
    <div className='mx-3'>
        <section className="aboutus">
            <div className="row pt-3">
            <div className="col-lg-1 col-md-1 col-sm-2 justify-content-start">
            </div>
            <div className="col-lg-12 col-md-12 col-sm-8 bg-primary px-5 py-3 rounded-top">
                <span className="text-white text-uppercase fs-2 fw-normal">-About Us-</span>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-2 justify-content-end">
            </div>
            </div> 
            <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-2 justify-content-start">
            </div>
            <div className="col-lg-12 col-md-12 col-sm-8 bg-primary px-5 py-3 mb-3 rounded-bottom">
                <p className="fw-normal fs-5">welcome! to ftbee,  it’s a food blog for foodies with the tag line “bee foodie, bee trendy”. A bloger website that started in 2022 with unique name ftbee symbolizing a honey bee which according to me is always obsessed for honey preparation, caring nature towards all the members of honey comb.</p>
                <p className="fw-normal fs-5">Myself Swapnil I’m totally obsessed with food. I love exprementing  with food items, give twist to the recipes, as well as love preparing new recipes. I devour cookbooks. I read up on food policy and nutrition. I love photographing food and hope my photos inspire you to step into the kitchen to cook a delicious, healthy meal.</p>
                <p className="fw-normal fs-5">I believe that cooking should be fun and recipes, flexible. I am hardcore  foodie, so you will get all varieties of food recipes, may it be vegetarian or non-vegetarian. I believe in eating whole foods, which are foods that are as close to their source as possible. I’m also an avid supporter of the occasional indulgence, and I love hanging out with family & friends over drinks as often as possible. 
                This blog is all about celebrating good food real, sustainable food that delights the senses and nourishes the body.</p>
                <div className="col-lg-12 col-md-12 col-sm-12 j py-3 ustify-content-end">
                    <img src="./images/biryani.jpg"className="rounded w-100" alt="" />
                </div>
            </div>
            </div> 
        </section>
    </div>
  )
}
