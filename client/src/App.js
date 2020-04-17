import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Form from "./components/Form";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {
  return (
    <Router>
    <div>
    <header id="header">
      <Nav />
      <div className="intro">
        <div id="osahan-slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="item active">
                  <div className="imgoverlay"></div>
                  <img src="img/sider/slider2.jpg" alt="Third slide"></img>
                  <div className="carousel-caption text-center">
                  <Switch>
                  <Route path="/about">
                  <h1>About Us</h1>
                  </Route>
                  <Route path="/projects">
                <h1>Projects</h1>
                  </Route>
                  <Route path="/logIn">
                  <h1>Login</h1>
                    </Route>
                    <Route path="/signUp">
                    <h1>Sign Up</h1>
                      </Route>
                  <Route path="/">
                  <div>
                  <h1>Construction Helper
                  </h1>
                  <p>The application lets peple post their project so constructor who are interested can contact them.</p>
                  </div>
                    </Route>
                </Switch>
                  </div>
              </div>

            </div>
        </div>
      </div>
      
    </header>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
