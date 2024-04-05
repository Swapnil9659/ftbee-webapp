import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home';
import { Routes , Route, NavLink} from "react-router-dom";
import About from './About';
import Recipe from './Recipes/RecipeHome';
import Blogs from './Blogs';
import Contact from './Contact';
//import PrivateRoute from '../Utils/PrivateRoute';
//import PublicRoute from '../Utils/PublicRoute';
//import axios from 'axios';
//import { getToken, removeUserSession, setUserSession } from '../Utils/Common';

const Header=()=> { 
    const [expanded, setExpanded] = useState(false);
    return ( 
        <div>
            <header className='border-bottom'>
                <Navbar bg="" expand="lg" expanded={expanded}>
                    <Container>
                        <Navbar.Brand href="/"><embed src="images/ftbee2.png" className="logoimg border border-warning rounded-top rounded-5 p-1" alt="Myself" />
                        </Navbar.Brand>
                        <Navbar.Toggle className="shadow-lg Navbar-Toggle" onClick={() => setExpanded(expanded ? false : "expanded")}/>
                        <Navbar.Collapse>
                        <Nav className="mt-1" variant="pills" defaultActivUeKey="/" onClick={() => setExpanded(false)}>
                            <NavLink className="p-3  rounded   text-white nav-link text-uppercase" eventKey="/home" to="/"><b>Home</b></NavLink>
                            <NavLink className="p-3  rounded   text-white nav-link text-uppercase" eventKey="/about" to="/about"><b>About</b></NavLink>
                            <NavLink className="p-3  rounded   text-white nav-link text-uppercase"   eventKey="/recipehome" to="/recipehome"><b>Recipes</b></NavLink>
                            <NavLink className="p-3  rounded   text-white nav-link text-uppercase"  eventKey="/blogs" to="/blogs"><b>Blogs</b></NavLink>
                            <NavLink className="p-3  rounded   text-white nav-link text-uppercase"  eventKey="/contact" to="/contact"><b>Contact</b></NavLink>
                        </Nav>
                        <NavLink to="/login"><button className="p-3 ms-3 fw-bold rounded shadow-lg btn text-uppercase">Admin Login <i className="ti-user"></i> </button></NavLink>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>  
            </header>
            <div className="px-2 py-2 mb-4 rounded">
                <Routes>
                <Route path="/home" element={ <Home />} />
                <Route path="/about" element={ <About />} />
                <Route path="/recipehome" element= { <Recipe />} />
                <Route path="/blogs" element={ <Blogs />} />
                <Route path="/contact" element={ <Contact />} />
                <Route path="/" element={ <Home />} />
                </Routes>
            </div>
        </div>
        
    )}
export default Header;