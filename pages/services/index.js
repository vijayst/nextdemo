import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/services.module.css';
import fs from 'fs';
import { Converter } from 'showdown';

export default function Services({ services }) {
    return (
        <div className="container">
            <Head>
                <title>Services</title>
            </Head>
            <h1>Services</h1>
            <p>View our service offerings:</p>
            <ul className={styles.services}>
                {services.map((service) => (
                    <li key={service.slug}>
                        <Link href={`/services/${service.slug}`}>
                            {service.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function getStaticProps() {
    const files = fs.readdirSync('services');
    const services = files.map((file) => {
        const service = file.slice(0, file.indexOf('.md'));
        const content = fs.readFileSync(`services/${service}.md`, 'utf8');
        const converter = new Converter({ metadata: true });
        converter.makeHtml(content);
        const meta = converter.getMetadata();
        const { title } = meta;
        return {
            slug: service,
            title,
        };
    });
    return {
        props: {
            services,
        },
    };
}
