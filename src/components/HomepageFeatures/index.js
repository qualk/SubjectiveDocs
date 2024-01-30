import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
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

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
