import styles from './layout.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { Fragment } from 'react';

export default function Layout(props) {
    return (
        <Fragment>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>
                        <Link href="/">
                            <a className={styles.titleLink}>
                                Vijay Consulting Services
                            </a>
                        </Link>
                    </h1>
                    <div>
                        <ul className={styles.menu}>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    <a>Services</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <main>{props.children}</main>
        </Fragment>
    );
}
