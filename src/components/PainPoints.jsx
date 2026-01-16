import React from 'react';
import { Settings, FileX, Code2 } from 'lucide-react';

const PainPoints = () => {
    const points = [
        {
            icon: <Settings className="text-red-400" size={32} />,
            problem: "Tired of repetitive setup?",
            solution: "Instant Scaffolding. One command to set up Enterprise BLoC, Clean Architecture, or Riverpod projects."
        },
        {
            icon: <FileX className="text-yellow-400" size={32} />,
            problem: "Sick of asset typos?",
            solution: "Smart Asset Manager. Type-safe, auto-generated asset classes. Never debug a missing file again."
        },
        {
            icon: <Code2 className="text-blue-400" size={32} />,
            problem: "Writing manual parsing?",
            solution: "Advanced JSON to Dart. Generate Freezed, Equatable, or standard models instantly."
        }
    ];

    return (
        <section className="py-20 bg-opacity-50" style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)' }}>
            <div className="container">
                <h2 className="section-title text-center mb-16">Why Flutter Mate?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {points.map((point, index) => (
                        <div key={index} className="glass-panel p-8 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                            <div className="mb-6 p-4 bg-white/5 rounded-full inline-block">
                                {point.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-200">
                                "{point.problem}"
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                <strong className="text-blue-400 block mb-1">
                                    {point.solution.split('.')[0]}.
                                </strong>
                                {point.solution.split('.').slice(1).join('.')}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
