import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import authorImg from '../assets/author.png';

const Author = () => {
    return (
        <section className="py-20" style={{ background: 'linear-gradient(to top, rgba(30, 64, 175, 0.1), transparent)' }}>
            <div className="container text-center">
                <h2 className="section-title text-center" style={{ marginBottom: '2.5rem' }}>Meet the Creator</h2>

                <div style={{ display: 'inline-block', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, background: '#3b82f6', filter: 'blur(24px)', opacity: 0.2, borderRadius: '9999px' }}></div>
                    <img
                        src={authorImg}
                        alt="Munasir PV"
                        style={{
                            position: 'relative',
                            width: '8rem',
                            height: '8rem',
                            borderRadius: '9999px',
                            border: '4px solid rgba(59, 130, 246, 0.2)',
                            objectFit: 'cover',
                            margin: '0 auto 1.5rem',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                        }}
                    />
                </div>

                <h3 className="text-xl font-bold" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Made with ❤️</h3>
                <p style={{ color: '#60a5fa', fontWeight: 600, marginBottom: '1rem', fontSize: '1.1rem' }}>Munasir PV</p>
                <p style={{ color: '#9ca3af', maxWidth: '32rem', margin: '0 auto 2rem', lineHeight: 1.6 }}>
                    Senior Developer building high-quality tools for the developer community since 2015.
                    Dedicated to professionalism and clean code.
                </p>

                <div className="flex justify-center gap-4">
                    <a href="https://github.com/MunasirPv" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        <Github size={18} />
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/munasirpv/" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        <Linkedin size={18} />
                        LinkedIn
                    </a>
                    <a href="mailto:munasirpv@gmail.com" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        <Mail size={18} />
                        Email
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Author;
