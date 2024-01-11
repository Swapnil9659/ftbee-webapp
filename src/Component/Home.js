import React from 'react'
//import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <div>
        <div>
          <div className="conthide">
            <h3 className="text-darkblue"><b>Dine in with your family at your home</b></h3>
          </div>
          <div className="contshow">
            <h5 className="ltsupds text-darkblue"><b>Dine in with your family at your home</b></h5>
          </div>
          <div className="mx-4">
            <table className="table table-secondary table-bordered shadow-lg" >
            <tbody>
              <tr>
              <td><img src="images/vegetarian.jpg" className="imgc" alt="" /></td>
              <td><img src="images/creamofmashroom.jpg" className="imgc" alt="" /></td>
              <td><img src="images/nonveg.jpg" className="imgc" alt="" /></td>
              <td><img src="images/desserts.jpg" className="imgc" alt="" /></td>
              </tr>
              </tbody>
            </table>
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
        <section className="mcontainer ">
        <section className="aboutus">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12  text-center justify-content-center">
                <h4 className="text-darkblue"><b>It’s ftbee[Bee foodie, Bee trendy]</b></h4>
            </div>
            </div> 
            <div className="row mt-4">
            <div className="col-lg-2 col-md-2 col-sm-2 justify-content-start">
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8  text-center justify-content-center">
                <h5 className="text-darkblue">Come join us in our culinary adventure where we’ll create sophisticated & elegant meals which you can easily prepare as your everyday meal for your family & friends..</h5>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 justify-content-end">
            </div>
            </div> 
            <div className="row mt-4">
            <div className="col-lg-2 col-md-2 col-sm-2 justify-content-start">
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8  text-center">
                <button className="text-darkblue p-3 rounded border-secondary"> <b> More Aboout Us <i className="ti-shift-right-alt"></i></b></button>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 justify-content-end">
            </div>
            </div> 
        </section>
        </section>
        <section className="latestrec">
        <div className="row mt-5">
            <div className="col-lg-12 col-md-12 col-sm-12  text-center justify-content-center">
            <h4 className="text-darkblue"><b>Latest Recipes</b></h4>
            </div>
        </div> 
        <div className="row justify-content-center mt-4 ml-4">
            <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="row"><img src="./images/rolls.png" className="w-100 h-100 rounded" alt="" /></div>
            <div className="row mt-4"><h6 className="text-darkblue"><b>Egg Rolls </b></h6></div>
            <div className="row"> <p className="text-darkblue">Learning curve network effects return on investment.</p></div>
            <div className="row"><button className="text-darkblue rounded border-secondary"><b>Read More <i className="ti-shift-right-alt"></i></b></button></div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="row"><img src="./images/biryani.png" className="w-100 h-100 rounded" alt="" /></div>
            <div className="row mt-4"><h6 className="text-darkblue"><b>Chicken Dum Biryani </b></h6></div>
            <div className="row"><p className="text-darkblue">Learning curve network effects return on investment.</p></div>
            <div className="row"><button className="text-darkblue rounded border-secondary"><b>Read More <i className="ti-shift-right-alt"></i></b></button></div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="row"><img src="./images/creamofmashroom.jpg" className="w-100 h-100 rounded" alt="" /></div>
            <div className="row mt-4"><h6 className="text-darkblue"><b>Cream of veg Soup </b></h6></div>
            <div className="row"> <p className="text-darkblue">Learning curve network effects return on investment.</p></div>
            <div className="row"><button className="text-darkblue rounded border-secondary"><b>Read More <i className="ti-shift-right-alt"></i></b></button></div>
            </div>
        </div>
        </section>
        <section className="secblogs pb-4">
        <div className="row mt-5">
            <div className="col-lg-12 col-md-12 col-sm-12  mt-5 ml-5 text-center d-flex justify-content-center">
            <h4 className="text-white w-50"><b>Blogs</b></h4>
            <h4 className="text-white ml-5 "><i className="ti-arrow-circle-left"></i></h4>
            <h4 className="text-white ml-3"><i className="ti-arrow-circle-right"></i></h4>
            </div>
        </div> 
        <div className="row justify-content-center mt-5">
            <div className="blogstxt col-lg-3 col-md-3 col-sm-8">
            <div className="row"><p className="mt-3 text-darkblue p-3">Learning curve network effects return on investment.</p></div>
            <div className="row"><img src="./images/spices.png" className="mt-3 w-100 h-100 rounded" alt="" /></div>
            </div>
            <div className="blogstxt col-lg-3 col-md-3 col-sm-8">
            <div className="row"><p className="mt-3 text-darkblue p-3">Learning curve network effects return on investment.</p></div>
            <div className="row"><img src="./images/seafood.png" className="mt-3 w-100 h-100 rounded" alt="" /></div>
            </div>
            <div className="blogstxt col-lg-3 col-md-3 col-sm-8">
            <div className="row"><p className="mt-3 text-darkblue p-3">Learning curve network effects return on investment.</p></div>
            <div className="row"><img src="./images/chocolate.png" className="mt-3 w-100 h-100 rounded" alt="" /></div>
            </div>
        </div>
        </section>
    </div>
  )
}

