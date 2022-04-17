import Head from 'next/head';
import Link from 'next/link';
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
    console.log(articles);
    return (
        <>
            <Head>
                <title>Next.js - Course</title>
            </Head>

            <ArticleList articles={articles} />

        </>
    );
}

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
    const articles = await res.json();

    return {
        props: {
            articles
        }
    }
};