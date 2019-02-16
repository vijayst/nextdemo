import { Converter } from 'showdown';
import Layout from '../components/layout';
import { withRouter } from 'next/router';

function Service(props) {
    const { content, meta: { title }} = props;
    return (
        <Layout>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Layout>
    );
}

Service.getInitialProps = function(reqOrContext) {
    const { slug } = reqOrContext.query;
    let content = require(`../services/${slug}.md`);
    const converter = new Converter({ metadata: true });
    content = converter.makeHtml(content);
    const meta = converter.getMetadata();
    return { content, meta };
}

export default withRouter(Service);