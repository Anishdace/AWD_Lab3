import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "./profile.jpg"; 

const Home = () => (
  <div className="container text-center mt-5">
    <h1>Welcome to My Website</h1>
    <img src={profilePic} alt="Sachin Puri" className="img-fluid rounded-circle mt-3" width="200" height="200" />
    <p className="mt-3">Hi, I'm Sachin Puri, a front-end developer passionate about creating responsive and user-friendly websites.</p>
  </div>
);

const About = () => (
  <div className="container mt-5">
    <h1>About Me</h1>
    <p>I completed a Computer Programming course at Trios College in April 2024. I specialize in React.js and Bootstrap for front-end development.</p>
  </div>
);

const Projects = () => (
  <div className="container mt-5">
    <h1>My Projects</h1>
    <ul>
      <li>Lab 4 - Team project with React.js</li>
      <li>Responsive Web Design with Bootstrap</li>
      <li>Personal Portfolio Website</li>
    </ul>
  </div>
);

const Contact = () => (
  <div className="container mt-5">
    <h1>Contact Me</h1>
    <p>Email: sachin.puri@trios.com</p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/sachin-puri-8156762a7" target="_blank" rel="noopener noreferrer">Sachin Puri</a></p>
  </div>
);

const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Sachin Puri</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <Home />
      <About /> <Projects /><Contact />
      </>
  );
};

export default App;
