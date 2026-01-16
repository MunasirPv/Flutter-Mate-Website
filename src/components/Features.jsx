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
        description: 'Kickstart BLoC, Riverpod, or Provider projects with cleaner architectures in seconds.'
    },
    {
        icon: Code2,
        title: 'Context-Aware Wraps',
        description: 'Intelligent wrap options like BlocBuilder or Obx based on your installed state management.'
    },
    {
        icon: ImageIcon,
        title: 'Smart Asset Manager',
        description: 'Auto-generate type-safe asset references. Never type a string path again.'
    },
    {
        icon: FileJson,
        title: 'JSON to Dart',
        description: 'Convert raw JSON into Freezed, Equatable, or standard Dart models instantly.'
    },
    {
        icon: Package,
        title: 'Auto Barrel Files',
        description: 'Clean up imports with one-click barrel file generation for any folder.'
    },
    {
        icon: Zap,
        title: 'Build Runner Status',
        description: 'Toggle code generation watchers directly from your status bar.'
    },
    {
        icon: Search,
        title: 'Pubspec Lens',
        description: 'Auto-complete package names and see version hints right in pubspec.yaml.'
    }
];

const Features = () => {
    return (
        <section id="features" className="py-20" style={{ background: 'rgba(0,0,0,0.2)' }}>
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Supercharge your Workflow</h2>
                    <p className="section-desc">
                        Everything you need to build Flutter apps faster, all in one place.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="glass-panel feature-card group">
                            <div className="feature-icon-wrapper">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
