import React from 'react';

const Documentation = () => {
    return (
        <section id="docs" className="py-20">
            <div className="container" style={{ maxWidth: '56rem' }}>
                <h2 className="section-title text-center" style={{ marginBottom: '2.5rem' }}>Documentation</h2>

                <div className="glass-panel p-8 rounded-2xl mb-8" style={{ padding: '2rem', borderRadius: '1rem', marginBottom: '2rem' }}>
                    <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-secondary)', marginBottom: '1rem', fontSize: '1.25rem' }}>How to Use</h3>
                    <ol className="list-decimal space-y-3" style={{ color: 'var(--color-text-dim)' }}>
                        <li>Open the <span style={{ fontWeight: 'bold', color: 'white' }}>Command Palette</span> (<kbd>Cmd+Shift+P</kbd>).</li>
                        <li>Type <span style={{ fontWeight: 'bold', color: 'white' }}>Flutter Mate</span> to see all available commands.</li>
                        <li>Explore the context menu in the Explorer (Right-click) for file generation tools.</li>
                        <li>Select a Widget in your code and use <kbd>Cmd+.</kbd> to access quick wraps.</li>
                    </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '0.75rem' }}>
                        <h3 className="font-bold mb-4" style={{ color: '#60a5fa', fontSize: '1.125rem' }}>Requirements</h3>
                        <ul className="list-disc space-y-2" style={{ color: 'var(--color-text-dim)' }}>
                            <li>VS Code <kbd>^{1.90}.0</kbd></li>
                            <li>Flutter SDK installed and added to PATH</li>
                        </ul>
                    </div>

                    <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '0.75rem' }}>
                        <h3 className="font-bold mb-4" style={{ color: '#4ade80', fontSize: '1.125rem' }}>Release Notes (v0.0.1)</h3>
                        <ul className="list-disc space-y-2" style={{ color: 'var(--color-text-dim)' }}>
                            <li>Initial release of Flutter Mate</li>
                            <li>Project Templates (BLoC, Riverpod, etc.)</li>
                            <li>Smart Asset Manager</li>
                            <li>Context Wraps</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Documentation;
