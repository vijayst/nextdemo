import Link from 'next/link';
import styles from '../styles/home.module.css';

export default function Index() {
    return (
        <div className={styles.home}>
            <div className={styles.center}>
                <div className={styles.company}>Vijay Consulting Services</div>
                <p className={styles.offering}>
                    We offer custom application development using React
                    framework
                </p>
                <Link href="/services">
                    <button className={styles.button}>View our services</button>
                </Link>
            </div>
        </div>
    );
}
