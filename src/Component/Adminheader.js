import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, NavLink, Route } from "react-router-dom";
import { getUser, removeUserSession } from '../Utils/Common';
import RecipeManager  from './Recipes/RecipeManager';
import BlogManager  from './BlogManager';
import TipsManager  from './TipsManager';
import ReviewManager  from './ReviewManager';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
 

const Adminheader = (props) => {
    const [expanded, setExpanded] = useState(false);
    const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
        <header className='border-bottom'>
            <Navbar  bg="" variant="dark" expand="lg" expanded={expanded}>
                <Container>
                    <Navbar.Brand href="/"><embed src="images/ftbee2.png" className="logoimg rounded-top rounded-5 shadow-lg border border-warning p-1" alt="Myself" />
                    </Navbar.Brand>
                    <Navbar.Toggle className="shadow-lg Navbar-Toggle" onClick={() => setExpanded(expanded ? false : "expanded")}/>
                    <Navbar.Collapse>
                    <Nav className="mt-1 ml-30" variant="pills" defaultActivUeKey="/" onClick={() => setExpanded(false)} >
                        <NavLink  className="shadow-lg p-2  rounded nav-link  text-white text-uppercase"  eventKey="/recipemanager" to="/recipemanager"><b>Recipe Manager</b></NavLink>
                        <NavLink className="shadow-lg p-2 rounded nav-link  text-white text-uppercase" eventKey="/blogmanager" to="/blogmanager"><b>Blog Manager</b></NavLink>
                        <NavLink className="shadow-lg p-2  rounded nav-link  text-white text-uppercase"  eventKey="/tipsmanager" to="/tipsmanager"><b>Tips Manager</b></NavLink>
                        <NavLink className="shadow-lg p-2  rounded nav-link  text-white text-uppercase"  eventKey="/reviewmanager" to="/reviewmanager"><b>Review Manager</b></NavLink>
                    </Nav>
                    <b className="px-3 mx-3 text-warning">Welcome {user && user.email}</b> 
                    <button onClick={handleLogout} className='p-3 ms-3 fw-bold rounded border-0 shadow-lg btn text-uppercase'>
                        Logout
                    </button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>   
        </header>
        <div>
          <Container className=" px-5 rounded">
          <Routes>
          <Route path="/recipemanager" component={ RecipeManager } />
          <Route  path="/blogmanager" component={ BlogManager } />
          <Route  path="/tipsmanager" component= { TipsManager } />
          <Route  path="/reviewmanager" component= { ReviewManager } />
          <Route path="/" component={ RecipeManager } />
          </Routes>
          </Container>
        </div>
    </div>
  )
}

export default Adminheader