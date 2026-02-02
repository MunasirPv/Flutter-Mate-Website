import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Copy, Code2, AlertCircle, Trash2, Check, AlignLeft, Minimize2 } from 'lucide-react';
import './JsonFormatter.css';

const JsonFormatter = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [output, setOutput] = useState('');
    const [indent, setIndent] = useState(2);
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

    const formatJson = (minify = false) => {
        if (!jsonInput.trim()) {
            setError('Please enter some JSON.');
            return;
        }

        try {
            const parsed = JSON.parse(jsonInput);
            const formatted = minify
                ? JSON.stringify(parsed)
                : JSON.stringify(parsed, null, indent);
            setOutput(formatted);
            setError(null);
        } catch (e) {
            setError('Invalid JSON: ' + e.message);
        }
    };

    const handleCopy = () => {
        if (!output) return;
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="jf-container">
            <Helmet>
                <title>JSON Formatter & Validator - Beautify or Minify | Flutter Mate</title>
                <meta name="description" content="Free online JSON Formatter. Beautify your JSON with proper indentation or minify it to save space. Validate JSON instantly." />
                <meta name="keywords" content="json formatter, json beautifier, json minify, json validator, online json tool" />
                <link rel="canonical" href="https://fluttermate.com/json-formatter" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fluttermate.com/json-formatter" />
                <meta property="og:title" content="JSON Formatter & Validator - Beautify or Minify" />
                <meta property="og:description" content="Free online JSON Formatter. Beautify your JSON with proper indentation or minify it to save space." />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://fluttermate.com/json-formatter" />
                <meta property="twitter:title" content="JSON Formatter & Validator - Beautify or Minify" />
                <meta property="twitter:description" content="Free online JSON Formatter. Beautify your JSON with proper indentation or minify it to save space." />

                {/* Structured Data (JSON-LD) */}
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "JSON Formatter",
                        "applicationCategory": "DeveloperApplication",
                        "operatingSystem": "Any",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },
                        "description": "A free online tool to beautify, minify, and validate JSON data instantly.",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "ratingCount": "150"
                        }
                    }
                `}
                </script>
            </Helmet>


            <div className="jf-header">
                <div className="jf-title">
                    <h1>JSON Formatter</h1>
                    <p>Beautify, minify, and validate your JSON data</p>
                </div>

                <div className="jf-controls">
                    <div className="jf-control-group" style={{ maxWidth: '120px' }}>
                        <label className="jf-label">Indent</label>
                        <select
                            value={indent}
                            onChange={(e) => setIndent(Number(e.target.value))}
                            className="jf-select"
                        >
                            <option value={2}>2 Spaces</option>
                            <option value={4}>4 Spaces</option>
                            <option value={8}>8 Spaces</option>
                        </select>
                    </div>

                    <div className="jf-btn-group">
                        <button
                            onClick={() => formatJson(false)}
                            className="jf-btn-beautify"
                            title="Format JSON with indentation"
                        >
                            <AlignLeft size={18} />
                            Beautify
                        </button>
                        <button
                            onClick={() => formatJson(true)}
                            className="jf-btn-minify"
                            title="Remove all whitespace"
                        >
                            <Minimize2 size={18} />
                            Minify
                        </button>
                    </div>
                </div>
            </div>

            <div className="jf-editor-grid">
                {/* Input Panel */}
                <div className="jf-panel">
                    <div className="jf-panel-header">
                        <div className="jf-panel-title">
                            <Code2 size={18} />
                            <span>Input JSON</span>
                        </div>
                        <button
                            onClick={() => setJsonInput('')}
                            className="jf-action-btn"
                            title="Clear Input"
                        >
                            <Trash2 size={14} />
                            Clear
                        </button>
                    </div>
                    <div style={{ position: 'relative', height: '100%' }}>
                        <textarea
                            value={jsonInput}
                            onChange={(e) => setJsonInput(e.target.value)}
                            placeholder="Paste your messy JSON here..."
                            className="jf-textarea"
                            spellCheck="false"
                        />
                        {error && (
                            <div className="jf-error">
                                <AlertCircle size={16} />
                                {error}
                            </div>
                        )}
                    </div>
                </div>

                {/* Output Panel */}
                <div className="jf-panel">
                    <div className="jf-panel-header">
                        <div className="jf-panel-title">
                            <Check size={18} />
                            <span>Formatted Output</span>
                        </div>
                        <button
                            onClick={handleCopy}
                            className="jf-action-btn"
                            style={copied ? { borderColor: '#10b981', color: '#10b981' } : {}}
                        >
                            {copied ? <Check size={14} /> : <Copy size={14} />}
                            <span>{copied ? 'Copied' : 'Copy'}</span>
                        </button>
                    </div>
                    <div style={{ position: 'relative', height: '100%', background: '#0B1120' }}>
                        {output ? (
                            <textarea
                                readOnly
                                value={output}
                                className="jf-textarea"
                                style={{ color: '#d1fae5' }}
                            />
                        ) : (
                            <div className="jf-empty-state">
                                <AlignLeft size={48} />
                                <p>Formatted JSON will appear here</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

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

export default JsonFormatter;
