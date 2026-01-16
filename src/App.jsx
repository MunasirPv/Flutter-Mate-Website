import React from 'react';
import './index.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Documentation from './components/Documentation';
import Author from './components/Author';
import Footer from './components/Footer';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full z-50 glass-panel header">
        <div className="container h-full flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold" style={{ fontSize: '1.25rem', letterSpacing: '-0.025em' }}>
            <img src={logo} alt="Logo" style={{ width: '2rem', height: '2rem', borderRadius: '0.5rem' }} />
            <span>Flutter Mate</span>
          </div>
          <nav className="md:flex gap-8 md:hidden text-gray-400" style={{ display: 'none' }}> {/* Simple mobile hide logic for now, using media query in CSS is better but inline constraint here */}
            {/* Note: I'm relying on CSS .md:flex to show this */}
          </nav>
          <nav className="md:flex gap-8 nav-links hidden" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
            <a href="#features" className="nav-link">Features</a>
            <a href="#docs" className="nav-link">Documentation</a>
            <a href="https://github.com/MunasirPv/Flutter-Mate" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Hero />
        <Features />
        <Documentation />
        <Author />
      </main>

      <Footer />
    </div>
  );
}

export default App;
