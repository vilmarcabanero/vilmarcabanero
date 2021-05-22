import './App.scss';
import MaintainancePage from './PagesCopy/HomePageCopy'
import NavBar from './ComponentsCopy/NavBar';
import HomePage from './PagesCopy/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './PagesCopy/AboutPage';
import PortfliosPage from './PagesCopy/PortfoliosPage';
import BlogsPage from './PagesCopy/BlogsPage';
import ContactPage from './PagesCopy/ContactPage';
import { useState } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      {/* <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div> */}
      <div className="main-content">
          <div className="content">
            <Switch>
              {/* <Route path="/" exact>
                <HomePage />
              </Route> */}
              <Route path="/" exact>
                <MaintainancePage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/portfolios" exact>
                <PortfliosPage />
              </Route>
              <Route path="/blogs" exact>
                <BlogsPage />
              </Route>
              <Route path="/contact" exact>
                <ContactPage />
              </Route>
            </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
