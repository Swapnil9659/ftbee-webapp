import React from 'react'

export default function RecipeHome() {
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
                        <h4 className="text-darkblue"><b>Recipes</b></h4>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 justify-content-end">
                    </div>
                </div> 
                <table className="shadow-lg table table-secondary table-border mx-2">
                    <tbody>
                    <tr>
                        <td>
                            <div className="row"><img src="./images/starter.png" className="rimg" alt="" /></div>
                            <div className="row"><button className="text-darkblue border-secondary p-2 w-100"><b>STARTERS</b></button></div>
                        </td>
                        <td>
                            <div className="row"><img src="./images/complimentry.png" className="rimg" alt="" /></div>
                            <div className="row"><button className="text-darkblue border-secondary  p-2 w-100"><b>COMPLIMENTARY</b></button></div>
                        </td>
                        <td>
                            <div className="row"><img src="./images/maincourse.png" className=" rimg" alt="" /></div>
                            <div className="row"><button className="text-darkblue border-secondary p-2 w-100"><b>MAIN COURSE</b></button></div>
                        </td>
                        <td>
                            <div className="row"><img src="./images/breakfast.png" className="rimg" alt="" /></div>
                            <div className="row"><button className="text-darkblue border-secondary p-2 w-100"><b>BREAKFAST</b></button></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="row"><img src="./images/desserts.png" className="rimg" alt="" /></div>
                            <div className="row"><button className="text-darkblue border-secondary p-2 w-100"><b>DESSERTS</b></button></div>
                        </td>
                        <td>
                            <div className="row"><img src="./images/saladssoups.png" className="rimg" alt="" /></div>
                            <div className="row"><button className="text-darkblue border-secondary p-2 w-100"><b>SALADS & SOUPS</b></button></div>
                        </td>
                        <td>
                            <div className="row"><img src="./images/bevrages.png" className="rimg" alt="" /></div>
                            <div className="row"><button className="text-darkblue border-secondary p-2 w-100"><b>BEVRAGES</b></button></div>
                        </td>
                        <td>
                            <div className="row"><img src="./images/quick-easy.png" className="rimg" alt="" /></div>
                            <div className="row"><button className="text-darkblue border-secondary p-2 w-100"><b>QUICK & EASY</b></button></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="row"><img src="./images/instant-pot.png" className="rimg" alt="" /></div>
                            <div className="row"><button className="text-darkblue border-secondary p-2 w-100"><b>INSTANT POT</b></button></div>
                        </td>
                        <td>
                            <div className="row"><img src="./images/kidsspecial.png" className="rimg" alt="" /></div>
                            <div className="row"><button className="text-darkblue border-secondary p-2 w-100"><b>KIDS SPECIAL</b></button></div>
                        </td>
                        <td>
                            <div className="row"><img src="./images/dietfood.png" className="rimg" alt=""  /></div>
                            <div className="row"><button className="text-darkblue border-secondary p-2 w-100"><b>DIET FOOD</b></button></div>
                        </td>
                        <td>
                            <div className="row"><img src="./images/baked-items.png" className="rimg" alt="" /></div>
                            <div className="row"><button className="text-darkblue border-secondary p-2 w-100"><b>BAKED ITEMS</b></button></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="row"><img src="./images/seasonspecial.png" className="rimg" alt="" /></div>
                            <div className="row"><button className="text-darkblue border-secondary p-2 w-100"><b>SEASON SPECIAL</b></button></div>
                        </td>
                        <td>
                            <div className="row"><img src="./images/traditional.png" className="rimg" alt="" /></div>
                            <div className="row"><button className="text-darkblue border-secondary p-2 w-100"><b>TRADITIONAL</b></button></div>
                        </td>
                        <td>
                            <div className="row"><img src="./images/continental.png" className="rimg" alt="" /></div>
                            <div className="row"><button className="text-darkblue border-secondary p-2 w-100"><b>CONTINENTAL</b></button></div>
                        </td>
                        <td>
                            <div className="row"><img src="./images/oneingredient.png" className="rimg" alt="" /></div>
                            <div className="row"><button className="text-darkblue border- p-2 w-100"><b>ONE INGREDIENT</b></button></div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </section>    
        </div>
    )
}
