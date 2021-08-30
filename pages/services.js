import Link from 'next/link';
import Layout from '../components/layout';
import styles from './services.module.css';

export default function Services() {
    return (
        <Layout>
            <div>
                <h1>Services</h1>
                <p>View our service offerings:</p>
                <ul className={styles.services}>
                    <li>
                        <Link
                            as="/services/react-app"
                            href="/service?slug=react-app"
                        >
                            <a>React apps</a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            as="/services/react-native-app"
                            href="/service?slug=react-native-app"
                        >
                            <a>React Native apps</a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            as="/services/nextjs-app"
                            href="/service?slug=nextjs-app"
                        >
                            <a>Next apps</a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            as="/services/gatsby-app"
                            href="/service?slug=gatsby-app"
                        >
                            <a>Gatsby apps</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </Layout>
    );
}
