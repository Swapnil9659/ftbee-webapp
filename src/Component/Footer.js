import React from 'react'
import Container from 'react-bootstrap/Container';

export default function Footer() {
  return (
    <div>
      <footer className="shadow-lg border-top">
            <div className="row d-flex px-3 shadow-lg bg-primary">
                <div className="col col-lg-6 col-md-6">
                    <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-expand-sm  navbar-expand  navbar-warning row my-2">
                        <div className="col-lg-12">
                            <ul className="navbar-nav ml-auto">
                                <li className="py-2 text-white fw-normal text-uppercase mx-1 my-1 fs-5">Follow us on</li>
                                <li className="nav-item mx-2">
                                <a className="text-white nav-link xbootstrap rounded-5" href="#"><i class="fab fa-facebook fs-3"></i></a>
                                </li>
                                <li className="nav-item mx-2">
                                <a className="text-white nav-link xbootstrap rounded-5" href="#"><i className="fab fa-instagram fs-3"></i></a>
                                </li>
                                <li className="nav-item mx-2">
                                <a className="text-white nav-link xbootstrap rounded-5" href="#"><i className="fab fa-youtube fs-3"></i></a>
                                </li>
                            </ul>
                        </div>
                    </nav> 
                    </div>
                    <div className="row m-2 text-white fs-5">
                    All Rights Reserve with <span className="text-white ml-1 fs-5"><i className="far fa-copyright"></i> tcom</span>   
                    </div>
                </div>
                <div className="col col-lg-5 col-md-5">
                <div className="row ml-2">
                    <div className="contsearch">
                        <div className="search mt-1">
                            <b className="text-white fw-normal text-uppercase fs-5">Get the latest recipes & blog posts in your inbox</b>
                            <form>
                                <input placeholder="Email Address" name="uname" id="uname" type="text" tabindex="1" autofocus className="p-3 me-3 rounded w-50" />
                                <button className='btn btn-sm px-3 py-2 fw-bold rounded text-white text-uppercase'>
                                    subscribe
                                </button>
                            </form>
                        </div>
                    </div>    
                </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
