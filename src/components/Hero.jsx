import { Download, Github, ArrowRight } from 'lucide-react';
import React from 'react';
import logo from '../assets/logo.png'; // Make sure to handle image imports correctly

const Hero = () => {
    return (
        <section className="relative overflow-hidden hero-section">
            <div className="bg-blur-circle"></div>

            <div className="container text-center relative z-10">
                <div className="hero-badge animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    v0.0.1 Released
                </div>

                <h1 className="hero-title">
                    Stop Writing Boilerplate. <br />
                    <span className="text-gradient">Start Building Apps.</span>
                </h1>

                <p className="hero-desc">
                    The ultimate productivity companion for Flutter developers. Instant scaffolding, smart assets, and intelligent automation in one powerful extension.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <a href="https://marketplace.visualstudio.com/items?itemName=MunasirPv.flutter-mate" target="_blank" rel="noreferrer" className="btn btn-primary group">
                        <Download size={20} />
                        Install for VS Code
                        <ArrowRight size={16} className="opacity-0 -ml-2 group-hover:ml-0 group-hover:opacity-100 transition-all" />
                    </a>
                    <a href="https://github.com/MunasirPv/Flutter-Mate" target="_blank" rel="noreferrer" className="btn btn-secondary">
                        <Github size={20} />
                        View on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
