import {
    Layers,
    Code2,
    Image as ImageIcon,
    FileJson,
    Package,
    Zap,
    Search
} from 'lucide-react';
import React from 'react';

const features = [
    {
        icon: Layers,
        title: 'Instant Scaffolding',
        description: 'Generate production-ready folder structures (Clean Arch, Riverpod, MVC) with pre-configured dependencies like get_it and go_router.',
        highlight: true
    },
    {
        icon: ImageIcon,
        title: 'Smart Asset Manager',
        description: 'Just drop files into assets/. Flutter Mate auto-generates code so you can use AppAssets.logoPng instead of error-prone strings.',
        code: `// Before
Image.asset('assets/images/hero.png');
// After
Image.asset(AppAssets.heroPng);`
    },
    {
        icon: Code2,
        title: 'Context-Aware Wraps',
        description: 'Intelligent refactoring. If you use Riverpod, it suggests "Wrap with Consumer". If BLoC, "Wrap with BlocBuilder".'
    },
    {
        icon: FileJson,
        title: 'Advanced JSON to Dart',
        description: 'Convert raw JSON into robust Dart models. Supports Freezed, Equatable, and standard generation options.'
    },
    {
        icon: Package,
        title: 'Efficiency Tools',
        description: 'Includes Pubspec Dependency Lens for version hints, Automatic Barrel Files, and Build Runner Status Bar toggle.'
    }
];

const Features = () => {
    return (
        <section id="features" className="py-20" style={{ background: 'rgba(0,0,0,0.2)' }}>
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Key Features</h2>
                    <p className="section-desc">
                        Everything you need to ship high-quality Flutter apps, faster.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`glass-panel feature-card group ${index === 4 ? 'md:col-span-2 max-w-2xl mx-auto w-full' : ''}`}
                        >
                            <div className="flex items-start gap-4">
                                <div className="feature-icon-wrapper shrink-0">
                                    <feature.icon size={24} />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {feature.description}
                                    </p>
                                    {feature.code && (
                                        <div className="bg-black/50 p-3 rounded-lg border border-white/5 font-mono text-xs text-gray-300">
                                            <pre>{feature.code}</pre>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
