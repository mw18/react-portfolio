import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import Portfolio from './components/Project';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';


import './App.css';

const Home = () => <span>Home</span>;




const App = () => (
  <MemoryRouter>
    <Header />
    <Container className="p-3">
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
      <footer>
        <Footer />
      </footer>
    </Container>
  </MemoryRouter>




);

export default App;
