import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/home.module.css';

export default function Index() {
    return (
        <div className={styles.home}>
            <Head>
                <title>Vijay Consulting Services</title>
            </Head>
            <div className={styles.background} />
            <div className={styles.overlay} />
            <div className={styles.center}>
                <div className={styles.company}>Custom React Development</div>
                <Link href="/services">
                    <button className={styles.button}>View our services</button>
                </Link>
            </div>
        </div>
    );
}
