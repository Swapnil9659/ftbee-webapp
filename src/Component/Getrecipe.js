import React from 'react'

const Getrecipe = () => {
  return (
    <div className='px-2 pb-1 rounded-3'>
      <nav className="navbar navbar-expand-lg navbar-expand-sm  navbar-expand  navbar-warning row my-2">
        <div className="col-lg-12">
          <ul className="navbar-nav ml-auto">
            <li className="py-2 text-white fw-bold text-uppercase mx-1 my-2">Follow us on</li>
            <li className="nav-item mx-2">
            <a className="nav-link xbootstrap rounded-5" href="#"><i class="fab fa-facebook fs-3"></i></a>
            </li>
            <li className="nav-item mx-2">
            <a className="nav-link xbootstrap rounded-5" href="#"><i className="fab fa-instagram fs-3"></i></a>
            </li>
            <li className="nav-item mx-2">
            <a className="nav-link xbootstrap rounded-5" href="#"><i className="fab fa-youtube fs-3"></i></a>
            </li>
          </ul>
        </div>
      </nav> 
      <div>
        <div>
          <h3 className="text-white">Dine in with your family at your home</h3>
        </div>

        <div className="row bg-warning px-4 mt-2 shadow-lg rounded">
          <div className="col-lg-4 col-md-5 pt-4 px-2">
            <form>
            <input placeholder="Search Recipe" name="uname" id="uname" type="text" tabindex="1" autofocus className="form-control p-4 mb-4 rounded mt-1" />
            </form>
          </div>
          <div className="col-lg-8 col-md-7 mb-2 mt-1 pt-1 rounded">
              <button className="rounded-circle  ms-2 btn p-3"><img src="images/icons/breakfast.png" className="img" alt="BREAKFAST" title="CLICK BREAKFAST"/>
              </button>
              <button className="rounded-circle ms-2 btn p-3"><img src="images/icons/appetizer.png" className="img" alt="APPETIZERS" title="CLICK APPETIZERS"/>
              </button>
              <button className="rounded-circle ms-2 btn p-3"><img src="images/icons/main-course.png" className="img" alt="MAIN COURSE" title="CLICK MAIN COURSE"/>
              </button>
              <button className="rounded-circle ms-2 btn p-3"><img src="images/icons/desserts.png" className="img" alt="DESEARTS" title="CLICK DESEARTS"/>
              </button>
              <button className="rounded-circle ms-2 btn p-3"><img src="images/icons/baked-item.png" className="img" alt="BAKED ITEMS"  title="CLICK BAKED ITEMS"/>
              </button>
              <button className="rounded-circle ms-2 btn p-3"><img src="images/icons/beverages.png" className="img" alt="BEVERAGES" title="CLICK BEVERAGES"/>
              </button>   
              <button className="rounded-circle ms-2 btn p-3"><img src="images/icons/kids-special.png" className="img" alt="KIDS SPECIAL" title="CLICK KIDS SPECIAL"/>
              </button>    
          </div>
        </div>
      </div>
      <div className="row my-2">
        <div className="col-lg-5 col-md-5 py-2">
            <b className="text-white fw-normal fs-5 text-uppercase">Get the latest recipes & blog posts in your inbox</b>
        </div>
        <div className="col-lg-5 col-md-5">
            <form>
                <input placeholder="Email Address" name="uname" id="uname" type="text" tabindex="1" autofocus className="p-2 me-3 rounded w-50" />
                <button className='btn btn-sm px-3 py-2 fw-bold rounded text-white text-uppercase'>
                    subscribe
                </button>
            </form>
        </div>
        <div className="col-lg-2 col-md-2">
        </div>
      </div> 
    </div>
  )
}

export default Getrecipe