import React from 'react';
import './HomePage.css';

function HomePage({ onNavigate }) {
  return (
    <div className="home-page">
      <header className="main-header container">
        <div className="logo-container">
          <img 
            src="https://www.creativefabrica.com/wp-content/uploads/2021/10/04/CH-logo-design-vector-Graphics-18302186-1.jpg" 
            alt="CommunionHub Logo" 
            className="logo"
          />
          <h1 className="site-title">CommunionHub</h1>
        </div>
        <nav className="main-nav">
          <ul>
            <li><button onClick={() => onNavigate('home')}>Home</button></li>
            <li><button onClick={() => onNavigate('events')}>Events</button></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>

      <main className="hero-section container">
        <section className="hero-content">
          <h2 className="hero-title">
            Connecting People Across Faiths & Interests
          </h2>
          <p className="hero-description">
            Connecting people of all faiths through events and community support
          </p>
          
          <button 
            className="btn explore-btn"
            onClick={() => onNavigate('events')}
          >
            Explore Events
          </button>
        </section>
      </main>
    </div>
  );
}

export default HomePage;