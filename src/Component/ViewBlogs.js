import React from 'react'
import {  Routes, NavLink, Route} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Blogs from './Blogs';

const ViewBlogs = () => {
  return (
    <div>
        <div className="row pt-3">
            <div className="col-lg-12 col-md-12 col-sm-12  text-center justify-content-center">
            <h4 className="text-white">- Blogs -</h4>
            </div>
        </div> 
        <div className="b-4">
            <div className="row bg-warning pt-3 rounded text-center justify-content-center">
                <div className="col-lg-4 col-sm-6 mb-1 px-1">
                    <article className="card shadow-lg">
                    <embed className="card-img-top blog-img" src="images/foodie.jpg" alt="post-thumb" />
                    <div className="p-2">
                        <span className="card-title text-darkblue fs-4 fw-bold text-uppercase">Foodie Blogs
                        </span>
                    </div>
                    </article>
                </div>
                <div className="col-lg-4 col-sm-6 mb-1 px-1">
                    <article className="card shadow-lg">
                    <embed className="card-img-top blog-img" src="images/trendy.jpg" alt="post-thumb" />
                    <div className="p-2">
                        <span className="card-title text-darkblue fs-4 fw-bold text-uppercase">Trendy Blogs
                        </span>
                    </div>
                    </article>
                </div>
                <Nav>
                    <NavLink className="mx-auto btn mb-2 shadow-lg nav-link text-uppercase fs-5"  to="/blogs">go to blogs<i class="fa fa-hand-pointer fw-light fs-6 ps-2 ms-1 rounded-circle xbootstrap "></i></NavLink>
                </Nav>
                <div className="  rounded">
                    <Routes>
                        <Route path="/blogs" element={ <Blogs />} />
                    </Routes>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default ViewBlogs