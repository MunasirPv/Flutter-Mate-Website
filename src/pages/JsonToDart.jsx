import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { convertJsonToDart } from '../utils/jsonToDart';
import { Copy, ArrowRight, Code2, AlertCircle, Trash2, Check, ChevronDown } from 'lucide-react';
import './JsonToDart.css';

const JsonToDart = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [className, setClassName] = useState('MyClass');
    const [mode, setMode] = useState('Standard');
    const [output, setOutput] = useState('');
    const [error, setError] = useState(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (error) setError(null);
    }, [jsonInput]);

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error", e);
        }
    }, []);

    const handleConvert = () => {
        if (!jsonInput.trim()) {
            setError('Please enter some JSON.');
            return;
        }

        try {
            JSON.parse(jsonInput);
        } catch (e) {
            setError('Invalid JSON format.');
            return;
        }

        setError(null);
        const result = convertJsonToDart(jsonInput, className || 'Root', mode);
        setOutput(result);
    };

    const handleCopy = () => {
        if (!output) return;
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="j2d-container">
            <Helmet>
                <title>JSON to Dart Converter - Information | Flutter Mate</title>
                <meta name="description" content="Instantly convert JSON to type-safe Dart classes. Supports Freezed, Equatable, and JsonSerializable. The best free online JSON to Dart tool for Flutter developers." />
                <meta name="keywords" content="json to dart, dart class generator, flutter json to dart, json to freezed, json to jsonserializable, free online json converter" />
                <link rel="canonical" href="https://fluttermate.com/json-to-dart" />
                {/* ID-JSON Structure for Rich Snippets */}
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "JSON to Dart Converter",
                        "applicationCategory": "DeveloperApplication",
                        "operatingSystem": "Any",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },
                        "description": "Convert JSON to Dart instantly with support for Freezed and JsonSerializable."
                    }
                `}
                </script>
            </Helmet>

            {/* Header / Toolbar Section */}
            <div className="j2d-header">
                <div className="j2d-title">
                    <h1>JSON to Dart</h1>
                    <p>Convert JSON to type-safe Dart classes</p>
                </div>

                <div className="j2d-controls">
                    <div className="j2d-control-group">
                        <label className="j2d-label">Class Name</label>
                        <input
                            type="text"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                            className="j2d-input"
                            placeholder="MyClass"
                        />
                    </div>

                    <div className="j2d-control-group">
                        <label className="j2d-label">Mode</label>
                        <select
                            value={mode}
                            onChange={(e) => setMode(e.target.value)}
                            className="j2d-select"
                        >
                            <option value="Standard">Standard</option>
                            <option value="Freezed">Freezed</option>
                            <option value="Equatable">Equatable</option>
                            <option value="JsonSerializable">JsonSerializable</option>
                        </select>
                    </div>

                    <button
                        onClick={handleConvert}
                        className="j2d-btn-convert"
                    >
                        Convert
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>

            {/* Main Editor Area */}
            <div className="j2d-editor-area">

                {/* Input Panel */}
                <div className="j2d-panel">
                    <div className="j2d-panel-header">
                        <div className="j2d-panel-title">
                            <Code2 size={18} />
                            <span>JSON Input</span>
                        </div>
                        <button
                            onClick={() => setJsonInput('')}
                            className="j2d-action-btn"
                            title="Clear JSON"
                        >
                            <Trash2 size={14} />
                            Clear
                        </button>
                    </div>

                    <div style={{ position: 'relative', flexGrow: 1 }}>
                        <textarea
                            value={jsonInput}
                            onChange={(e) => setJsonInput(e.target.value)}
                            placeholder='Paste your JSON content here...'
                            className="j2d-textarea"
                            spellCheck="false"
                        />
                        {error && (
                            <div className="j2d-error">
                                <AlertCircle size={16} />
                                {error}
                            </div>
                        )}
                    </div>
                </div>

                {/* Output Panel */}
                <div className="j2d-panel">
                    <div className="j2d-panel-header">
                        <div className="j2d-panel-title">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" style={{ width: 16, height: 16 }} alt="Dart" />
                            <span>Dart Output</span>
                        </div>
                        <button
                            onClick={handleCopy}
                            className="j2d-action-btn"
                            style={copied ? { borderColor: '#4ade80', color: '#4ade80' } : {}}
                        >
                            {copied ? <Check size={14} /> : <Copy size={14} />}
                            <span>{copied ? 'Copied' : 'Copy'}</span>
                        </button>
                    </div>

                    <div style={{ position: 'relative', flexGrow: 1, background: '#0B1120' }}>
                        {output ? (
                            <pre className="j2d-pre">
                                {output}
                            </pre>
                        ) : (
                            <div className="j2d-empty-state">
                                <Code2 size={48} />
                                <p>Generated code will appear here</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Tips Overlay */}
            {mode !== 'Standard' && (
                <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-border)', borderRadius: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.75rem', color: 'var(--color-text-dim)' }}>
                    <AlertCircle size={16} style={{ marginTop: 2, flexShrink: 0 }} />
                    <div>
                        {mode === 'Freezed' && (
                            <span><strong>Tip:</strong> Freezed requires <code>freezed_annotation</code>, <code>build_runner</code>, and <code>freezed</code> packages. Don't forget to run <code>flutter pub run build_runner build</code>.</span>
                        )}
                        {mode === 'JsonSerializable' && (
                            <span><strong>Tip:</strong> Remember to include <code>json_annotation</code>, <code>json_serializable</code>, and <code>build_runner</code>.</span>
                        )}
                        {mode === 'Equatable' && (
                            <span><strong>Tip:</strong> Add <code>equatable</code> to your dependencies to use this mode.</span>
                        )}
                    </div>
                </div>
            )}

            {/* AdSense Unit */}
            <div style={{ marginTop: '2rem', textAlign: 'center', minHeight: '100px', display: 'flex', justifyContent: 'center' }}>
                <ins className="adsbygoogle"
                    style={{ display: 'block', width: '100%' }}
                    data-ad-client="ca-pub-7024948825404469"
                    data-ad-slot="3481437519"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </div>
        </div>
    );
};

export default JsonToDart;
