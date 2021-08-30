import { Converter } from 'showdown';
import Layout from '../../components/layout';
import fs from 'fs';

export default function Service(props) {
    const {
        content,
        meta: { title },
    } = props;
    return (
        <Layout>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Layout>
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
