// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meet Our Team</h1>
        <div className="team-section">
          <div className="team-member">
            <img src="/Anish.jpg" alt="Anish" className="profile-pic" />
            <h2>Anish</h2>
            <p className="description">
              Anish is a passionate developer with a love for solving problems and learning new technologies.
            </p>
            <div className="social-links">
              <a href="https://twitter.com/anish" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/anish" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/anish" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="team-member">
            <img src="/jivan.jpeg" alt="Jivan" className="profile-pic" />
            <h2>Jivan</h2>
            <p className="description">
              Jivan specializes in front-end development and has a keen eye for design and user experience.
            </p>
            <div className="social-links">
              <a href="https://twitter.com/jivan" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/jivan" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/jivan" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="team-member">
            <img src="/sachin.jpg" alt="Sachin" className="profile-pic" />
            <h2>Sachin</h2>
            <p className="description">
              Sachin is an experienced full-stack developer with a strong background in database management.
            </p>
            <div className="social-links">
              <a href="https://twitter.com/sachin" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/sachin" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/sachin" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
