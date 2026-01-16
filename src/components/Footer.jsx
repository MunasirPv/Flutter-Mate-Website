import React from 'react';

const Footer = () => {
    return (
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '2rem 0', background: 'rgba(0,0,0,0.4)' }}>
            <div className="container flex flex-col md:flex-row justify-between items-center gap-4" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                <p>Built with 🧉 by <a href="https://github.com/MunasirPv" className="text-blue-400 hover:text-blue-300">MunasirPv</a></p>
                <div className="flex gap-6">
                    <a href="#docs" className="nav-link">Documentation</a>
                    <a href="#" className="nav-link">Changelog</a>
                    <a href="https://github.com/MunasirPv/Flutter-Mate/issues" className="nav-link">Report an Issue</a>
                    <a href="#" className="nav-link">License</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
