// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from "./components/Post";


import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';


const title = 'My Minimal React Webpack Babel Setup';



class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar className="navbg" variant="dark" expand="lg">
                        <div className="container">
                            <Link to={'/'} className="navbar-brand"> React </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link to={'/'} className="nav-link"> Home </Link>
                                <Link to={'/contact'} className="nav-link">Contact</Link>
                                <Link to={'/about'} className="nav-link">About</Link>
                                <Link to={'/post'} className="nav-link">Post</Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form> 
                        </Navbar.Collapse>
                        </div>
                    </Navbar>
                    {/* <h2>{title}</h2> */}
                    <div className="container containerTop">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/about' component={About} />
                        <Route path='/post' component={Post} />
                        <Route component={NoMatch} />
                    </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

function NoMatch({ location }) {
    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

export default App;