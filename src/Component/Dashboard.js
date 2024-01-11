import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import { getUser, removeUserSession } from '../Utils/Common';
import RecipeMabnager  from './RecipeManager';
import BlogPostManager  from './BlogPostManager';
import TaskManager  from './TaskManager';
 
function Dashboard(props) {
  const user = getUser();
  
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/');
    props.history.push('/admin');
    props.history.push('/recipehome');
    props.history.push('/blog');
    props.history.push('/contact');
    props.history.push('/login');
  }
 
  return (
    <div>
      <section className="dashboard">
        
        <BrowserRouter>
              <Navbar  bg="" variant="dark" expand="lg">
                  <Container>
                      <Navbar.Toggle/>
                      <Navbar.Collapse>
                      <Nav className="me-auto mt-5">
                        <NavLink  className="shadow-lg p-3 my-4 rounded  text-warning"  to="/recipemanager"><b>Recipe Manager</b></NavLink>
                        <NavLink className="shadow-lg p-3 my-4 rounded  text-warning"  to="/blogpostmanager"><b>Blog Poste Manager</b></NavLink>
                        <NavLink className="shadow-lg p-3 my-4 rounded  text-warning"  to="/taskmanager"><b>Task Manager</b></NavLink>
                      </Nav>
                      <b className="px-3">Welcome {user.name}!</b> <button className="p-2 rounded border-0 text-white shadow-lg secblogs" onClick={handleLogout}><i className="ti-shift-left-alt"></i>Logout</button>
                      </Navbar.Collapse>
                  </Container>
              </Navbar>   
          <div>
            <Container className=" px-5 py-3 mb-5 rounded">
            <Switch>
            <Route exxact path="/recipemanager" component={ RecipeMabnager } />
            <Route  path="/blogpostmanager" component={ BlogPostManager } />
            <Route  path="/taskmanager" component= { TaskManager } />
            </Switch>
            </Container>
          </div>
        </BrowserRouter>
      </section>
    </div>
      
  )
}
 
export default Dashboard;