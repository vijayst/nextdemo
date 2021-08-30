import { Converter } from 'showdown';
import fs from 'fs';
import Head from 'next/head';

export default function Service(props) {
    const {
        content,
        meta: { title },
    } = props;
    return (
        <div className="container">
            <Head>
                <title>{title}</title>
            </Head>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}

export function getStaticProps(context) {
    const { service } = context.params;
    let content = fs.readFileSync(`services/${service}.md`, 'utf8');
    const converter = new Converter({ metadata: true });
    content = converter.makeHtml(content);
    const meta = converter.getMetadata();
    return { props: { content, meta } };
}

export function getStaticPaths() {
    const files = fs.readdirSync('services');
    const paths = files.map((file) => {
        const service = file.slice(0, file.indexOf('.md'));
        return { params: { service } };
    });
    return {
        paths,
        fallback: false,
    };
}
