import Link from 'next/link';
import {Router, useRouter} from 'next/router';

const article = ({article}) => {
    const router = useRouter();
    const url = router.query.id;

    return (
        <>
            <h5 className="text-center">{article.title}</h5>
            <span className="fw-light">{article.body}</span>
            <br />
            
            <Link href="/">Go Back</Link>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const article = await res.json();

    const ids = article.map(article => article.id);
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export default article
