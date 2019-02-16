import Link from 'next/link';
import Layout from '../components/layout';
import styles from './services.css';

export default function Services() {
    return (
        <Layout>
            <div>
                <h1>Services</h1>
                <p>View our service offerings:</p>
                <ul className={styles.services}>
                    <li><Link href="/service/react-app"><a>React apps</a></Link></li>
                    <li><Link href="/service/react-native-app"><a>React Native apps</a></Link></li>
                    <li><Link href="/service/nextjs-app"><a>Next apps</a></Link></li>
                    <li><Link href="/service/gatsby-app"><a>Gatsby apps</a></Link></li>
                </ul>
            </div>
        </Layout>
    )
}