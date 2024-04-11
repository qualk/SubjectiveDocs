import Heading from '@theme/Heading';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

interface FeatureProps {
    title: string;
    description: JSX.Element;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => (
    <div className={clsx('col col--4')}>
        <div className="text--center padding-horiz--md">
            <Heading as="h2">{title}</Heading>
            <p>{description}</p>
        </div>
    </div>
);

const HomepageFeatures: React.FC = () => {
    const FeatureList: FeatureProps[] = [
        {
            title: 'Get Started',
            description: (
                <>
                    Quickly get started with Subjective, your school-tailored student organisation app.
                </>
            ),
        },
        {
            title: 'Learn More',
            description: (
                <>
                    Get to know all the features to make the most out of Subjective.
                </>
            ),
        },
        {
            title: 'Developers',
            description: (
                <>
                    Learn about tools like SubjectiveKit, to help you create great student software.
                </>
            ),
        },
    ];

    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={props.title} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomepageFeatures;
