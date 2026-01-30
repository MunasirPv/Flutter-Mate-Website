import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PainPoints from '../components/PainPoints';
import Documentation from '../components/Documentation';
import Author from '../components/Author';

const Home = () => {

    React.useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error", e);
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Flutter Mate - The Ultimate VS Code Extension for Flutter</title>
                <meta name="description" content="Boost your Flutter productivity with Flutter Mate. Instant project scaffolding, smart asset management, and advanced JSON-to-Dart conversion." />
                <link rel="canonical" href="https://fluttermate.com/" />
            </Helmet>
            <Hero />

            {/* AdSense Unit */}
            <div className="container mx-auto px-4 py-8 flex justify-center">
                <ins className="adsbygoogle"
                    style={{ display: 'block', width: '100%', maxWidth: '970px' }}
                    data-ad-client="ca-pub-7024948825404469"
                    data-ad-slot="1625430364"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </div>

            <PainPoints />
            <Features />
            <Documentation />
            <Author />
        </>
    );
};

export default Home;
