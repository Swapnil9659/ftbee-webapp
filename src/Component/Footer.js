import React from 'react'
import Container from 'react-bootstrap/Container';

export default function Footer() {
  return (
    <div>
      <footer className="shadow-lg">
            <Container>
            <div className="row d-flex">
                <div className="col col-lg-6 col-md-6 col-sm-5">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-expand-sm  navbar-expand  navbar-warning">
                            <div className="container">
                                <ul className="navbar-nav">
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
                    </div>
                    <div className="row m-2 icon">
                    All Rights Reserve with <h6 className="text-darkblue ml-1 icon">s.v.takawale</h6>   
                    </div>
                </div>
                <div className="col col-lg-5 col-md-5 col-sm-5 ">
                <div className="row ml-2">
                    <div className="contsearch">
                        <div className="search ltsupds">
                            <b className="text-darkblue">Get the latest recipes & blog posts in your inbox</b>
                            <form action="#" className="recipeicons">
                                <input type="text"
                                    placeholder=" email address"
                                    name="search"/>
                                <button>
                                    <strong>Subscribe</strong>
                                </button>
                            </form>
                        </div>
                    </div>    
                </div>
                </div>
            </div>
            </Container>
        </footer>
    </div>
  )
}
