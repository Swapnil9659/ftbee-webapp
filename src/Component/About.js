import React from 'react'

export default function About() {
  return (
    <div>
        <div>
            <div className="conthide">
            <h3 className="text-darkblue"><b>Dine in with your family at your home</b></h3>
            </div>
            <div className="contshow">
            <h5 className="ltsupds text-darkblue"><b>Dine in with your family at your home</b></h5>
            </div>
            <div className="shadow-lg search searchcont">
            <form action="#">
                <input type="text"
                    placeholder=" search recipe"
                    aria-label="search" className="inputbox" />
                <span className="recipeicons"><img src="images/quickeasy.png" className="img" alt="Quick-Easy" />
                </span>
                <span className="recipeicons"><img src="images/fishchicken.png" className="img" alt="Fish-Chicken" />
                </span>
                <span className="recipeicons"><img src="images/instantpot.png" className="img" alt="Instantpot" />
                </span>
                <span className="recipeicons"><img src="images/sidedish.png" className="img" alt="Sidedish" />
                </span>
                <span className="recipeicons"><img src="images/beverages.png" className="img" alt="Beverages" />
                </span>
                <span className="recipeicons"><img src="images/bakeditems.png" className="img" alt="Bakeditems" />
                </span>
                <span className="recipeicons"><img src="images/soups.png" className="img" alt="Soups" />
                </span>
            </form>    
          </div>
        </div>
        <div className="contsearch">
        <div className="search ltsupds">
            <b className="text-darkblue">Get the latest recipes & blog posts in your inbox</b>
            <form action="#" className="recipeicons">
                <input type="text"
                    placeholder=" email address"
                    name="search" className="mb-1" />
                <button>
                    <strong>SIGN UP</strong>
                </button>
            </form>
        </div>
        </div> 
        <nav className="navbar navbar-expand-lg navbar-expand-sm  navbar-expand  navbar-warning ">
            <div className="container">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <b className="text-darkblue nav-link icon">Follow us on</b>
                </li>
                <li className="nav-item">
                <a className="text-darkblue nav-link"  href="https://themefisher.com/"><i className="icon ti-facebook"></i></a>
                </li>
                <li className="nav-item">
                <a className="text-darkblue nav-link" size="150x150" href="https://themefisher.com/"><i className="icon ti-instagram"></i></a>
                </li>
                <li className="nav-item">
                <a className="text-darkblue nav-link" size="150x150" href="https://themefisher.com/"><i className="icon ti-pinterest"></i></a>
                </li>
                <li className="nav-item icon">
                <a className="text-darkblue nav-link" size="196x196" href="https://themefisher.com/"><i className="icon ti-youtube"></i></a>
                </li>
            </ul>
            </div>
        </nav>
        <div className="mx-5 my-3 border-bottom border-secondary"></div>  
        <section className="aboutus">
            <div className="row pt-3 px-5">
            <div className="col-lg-1 col-md-1 col-sm-2 justify-content-start">
            </div>
            <div className="col-lg-10 col-md-10 col-sm-8  justify-content-center">
                <h4 className="text-darkblue"><b>About ftbee</b></h4>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-2 justify-content-end">
            </div>
            </div> 
            <div className="row pt-3">
            <div className="col-lg-1 col-md-1 col-sm-2 justify-content-start">
            </div>
            <div className="col-lg-10 col-md-10 col-sm-8  justify-content-center">
                <p className="text-darkblue"><b>welcome! to ftbee,  it’s a food blog for foodies with the tag line “bee foodie, bee trendy”. A bloger website that started in 2022 with unique name ftbee symbolizing a honey bee which according to me is always obsessed for honey preparation, caring nature towards all the members of honey comb.</b></p>
                <p className="text-darkblue"><b>Myself Swapnil I’m totally obsessed with food. I love exprementing  with food items, give twist to the recipes, as well as love preparing new recipes. I devour cookbooks. I read up on food policy and nutrition. I love photographing food and hope my photos inspire you to step into the kitchen to cook a delicious, healthy meal.</b></p>
                <p className="text-darkblue"><b>I believe that cooking should be fun and recipes, flexible. I am hardcore  foodie, so you will get all varieties of food recipes, may it be vegetarian or non-vegetarian. I believe in eating whole foods, which are foods that are as close to their source as possible. I’m also an avid supporter of the occasional indulgence, and I love hanging out with family & friends over drinks as often as possible. 
                This blog is all about celebrating good food real, sustainable food that delights the senses and nourishes the body.</b></p>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-2 justify-content-end">
            </div>
            </div> 
        </section>
        <section>
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 mx-4 mt-3 mb-0">
                <img src="./images/biryani.png"className="w-100 h-100 rounded" alt="" />
            </div>
            </div>
        </section>
    </div>
  )
}
