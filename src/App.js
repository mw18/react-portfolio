import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

import './App.css';

const Home = () => <span>Home</span>;




const App = () => (
  <MemoryRouter>
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome to Melissa's Portfolio</h1>
        <h2>
          {/* Current Page is{' '} */}
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </h2>
        <h2>
          Navigate to{' '}
          <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/">
              <Button>Home</Button>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <Button>Portfolio</Button>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Button>Contact</Button>
            </LinkContainer>
          </ButtonToolbar>
        </h2>
      </Jumbotron>
    </Container>
  </MemoryRouter>
);

export default App;
