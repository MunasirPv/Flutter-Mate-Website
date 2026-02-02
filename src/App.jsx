import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import JsonToDart from './pages/JsonToDart';
import JsonFormatter from './pages/JsonFormatter';
import logo from './assets/logo.png';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <header className="fixed top-0 w-full z-50 glass-panel header">
            <div className="container h-full flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3 font-bold" style={{ fontSize: '1.25rem', letterSpacing: '-0.025em' }}>
                <img src={logo} alt="Logo" style={{ width: '2rem', height: '2rem', borderRadius: '0.5rem' }} />
                <span>Flutter Mate</span>
              </Link>

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
                <Link to="/json-to-dart" className="nav-link">JSON to Dart</Link>
                <Link to="/json-formatter" className="nav-link">JSON Formatter</Link>
                <a href="/#features" className="nav-link">Features</a>
                <a href="/#docs" className="nav-link">Documentation</a>
                <a href="https://github.com/MunasirPv/Flutter-Mate" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
              </nav>
            </div>

            {/* Mobile Nav Dropdown */}
            {isMobileMenuOpen && (
              <div className="md:hidden glass-panel border-t border-white/5 absolute top-full left-0 w-full p-4 flex flex-col gap-4">
                <Link to="/json-to-dart" className="nav-link block" onClick={() => setIsMobileMenuOpen(false)}>JSON to Dart</Link>
                <Link to="/json-formatter" className="nav-link block" onClick={() => setIsMobileMenuOpen(false)}>JSON Formatter</Link>
                <a href="/#features" className="nav-link block" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                <a href="/#docs" className="nav-link block" onClick={() => setIsMobileMenuOpen(false)}>Documentation</a>
                <a href="https://github.com/MunasirPv/Flutter-Mate" target="_blank" rel="noreferrer" className="nav-link block">GitHub</a>
              </div>
            )}
          </header>

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/json-to-dart" element={<JsonToDart />} />
              <Route path="/json-formatter" element={<JsonFormatter />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
