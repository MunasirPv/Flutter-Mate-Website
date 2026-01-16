import React from 'react';
import './index.css';
import Hero from './components/Hero';
import Features from './components/Features';
import PainPoints from './components/PainPoints';
import Documentation from './components/Documentation';
import Author from './components/Author';
import Footer from './components/Footer';
import logo from './assets/logo.png';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full z-50 glass-panel header">
        <div className="container h-full flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold" style={{ fontSize: '1.25rem', letterSpacing: '-0.025em' }}>
            <img src={logo} alt="Logo" style={{ width: '2rem', height: '2rem', borderRadius: '0.5rem' }} />
            <span>Flutter Mate</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Desktop Nav */}
          <nav className="md:flex gap-8 nav-links hidden" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
            <a href="#features" className="nav-link">Features</a>
            <a href="#docs" className="nav-link">Documentation</a>
            <a href="https://github.com/MunasirPv/Flutter-Mate" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
          </nav>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-panel border-t border-white/5 absolute top-full left-0 w-full p-4 flex flex-col gap-4">
            <a href="#features" className="nav-link block" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#docs" className="nav-link block" onClick={() => setIsMobileMenuOpen(false)}>Documentation</a>
            <a href="https://github.com/MunasirPv/Flutter-Mate" target="_blank" rel="noreferrer" className="nav-link block">GitHub</a>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <Features />
        <Documentation />
        <Author />
      </main>

      <Footer />
    </div>
  );
}

export default App;
