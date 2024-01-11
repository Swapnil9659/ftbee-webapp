import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home';
import { BrowserRouter , Switch, Route, NavLink} from "react-router-dom";
import About from './About';
import Recipe from './RecipeHome';
import Contact from './Contact';
import Login from './Login';
import Dashboard from './Dashboard';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';
import axios from 'axios';
import { getToken, removeUserSession, setUserSession } from '../Utils/Common';

function Header() {
    const [authLoading, setAuthLoading] = useState(true);
    
    useEffect(() => {
        console.log("function1");
        const token = getToken();
        console.log(token);

        if (!token) {
            console.log("function1-in");
          return;
        }
     
        axios.get(`http://localhost:8080/verifyToken?token=${token}`).then(response => {
          setUserSession(response.data.token, response.data.user);
          console.log("inside get call");
          setAuthLoading(false);
        }).catch(error => {
          removeUserSession();
          setAuthLoading(false); 
          console.log("inside catch call");

        });
      }, []);
     
      if (authLoading && getToken()) {
        console.log("inside function2");
        return <div className="content">Checking Authentication...</div>
        
      }
      
    return (  
       
    <BrowserRouter>
        <header>
            <Navbar  bg="" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src="images/ftbee2.png" className="shadow-lg p-3  rounded w-100 logoimg" alt="Myself" />
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                    <Nav className="me-auto mt-5">
                        <NavLink exact  className="shadow-lg p-3 my-4 rounded  text-warning"  to=" " ><b>Home</b></NavLink>
                        <NavLink  className="shadow-lg p-3 my-4 rounded  text-warning"  to="/about"><b>About</b></NavLink>
                        <NavLink className="shadow-lg p-3 my-4 rounded  text-warning"  to="/recipehome"><b>Recipes</b></NavLink>
                        <NavLink className="shadow-lg p-3 my-4 rounded  text-warning"  to="/recipehome"><b>Blogs</b></NavLink>
                        <NavLink className="shadow-lg p-3 my-4 rounded  text-warning"  to="/contact"><b>Contact</b></NavLink>
                    </Nav>
                    <NavLink to="/login"><button className="p-2 rounded border-0 shadow-lg text-white secblogs">Admin Login <i className="ti-user"></i> </button></NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>   
        </header>
        <div>
        <Container className="shadow-lg px-5 py-3 mb-5 rounded">
            <Switch>
            <Route exxact path="/home" component={ Home } />
            <Route  path="/about" component={ About } />
            <Route  path="/recipehome" component= { Recipe } />
            <Route  path="/contact" component={ Contact } />
            <PublicRoute  path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route exxact path="/" component={ Home } />
            
            
            </Switch>
        </Container>
        </div>
    </BrowserRouter>
  )
}
export default Header;