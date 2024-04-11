import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import * as React from 'react';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const Home: React.FC = () => {
    const { siteConfig } = useDocusaurusContext();

    const HomepageHeader = (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/web/start"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );

    return (
        <Layout
            title={`Home`}
            description="Subjective guides and docs to help you make the most out of the school-tailored student organisation app."
        >
            {HomepageHeader}
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
};

export default Home;
