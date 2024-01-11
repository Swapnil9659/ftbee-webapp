import React from 'react'

export default function Contact() {
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
        <section className="recipe ml-5">
            <div className="row pt-3">
            <div className="col-lg-1 col-md-1 col-sm-2 justify-content-start">
            </div> 
            <div className="col-lg-10 col-md-10 col-sm-8  justify-content-center">
                <h4 className="text-darkblue"><b>Contact</b></h4>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-2 justify-content-end">
            </div>
            </div> 
            <section className="contact rounded px-4">
                <div className="row mt-4 d-flex">
                    <div className=" shadow-lg p-3 mb-5 rounded col-lg-5 col-md-5 col-sm-12 mt-4 ml-5 mt-5">
                        <form action="#">
                            <div className="row">
                                <h5 className="text-white"><b>Name</b></h5>
                            </div>
                            <div className="row"> 
                                <input type="text" className="inputbox" placeholder="full name" name="name" />
                            </div>
                            <div className="row mt-4">
                                <h5 className="text-white"><b>Subject</b></h5>
                            </div>
                            <div className="row"> 
                                <input type="text" className="inputbox" placeholder="subject" name="subject" />
                            </div>
                            <div className="row mt-4">
                                <h5 className="text-white"><b>Email</b></h5>
                            </div>
                            <div className="row"> 
                                <input type="text" className="inputbox" placeholder="email address"name="email" />
                            </div>
                            <div className="row mt-4">
                                <h5 className="text-white"><b>Message</b></h5>
                            </div>
                            <div className="row"> 
                                <textarea className="message" type="text" placeholder="message" name="message"></textarea>
                            </div>
                            <div className="row my-4"> 
                                <button className="text-darkblue p-2 rounded border border-white"> <b> SEND <i className="ti-shift-right-alt"></i></b></button>
                            </div>
                        </form>
                    </div>
                    <div className="shadow-lg p-3 mb-5 rounded col-lg-6 col-md-6 col-sm-12 mt-5 px-4 ftblogo">
                        <div className="row  mt-5">
                            <h6 className="text-darkblue justify-content-start ml-3"><b>It’s ftbee[Bee foodie, Bee trendy]</b></h6>
                        </div>
                        <div className="row mt-4">
                            <p className="text-darkblue justify-content-center ml-3">Come join us in our culinary adventure where we’ll create sophisticated & elegant meals which you can easily prepare as your everyday meal for your family & friends..Come join us in our culinary adventure where we’ll create sophisticated & elegant meals which you can easily prepare as your everyday meal for your family & friends..</p>
                        </div>
                        <div className="row my-4"> 
                            <button className="text-darkblue p-3 rounded border border-white ml-3"> <b> More Aboout Us <i className="ti-shift-right-alt"></i></b></button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
  )
}
