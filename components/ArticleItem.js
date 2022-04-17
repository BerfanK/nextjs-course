import Link from 'next/link';

const ArticleItem = ({article}) => {
    return (
        <Link className="streched-link" href="/article/[id]" as={`/article/${article.id}`}>
            <div className="card mb-3">
                <div className="card-body">
                    <h6 className="text-primary">{article.title}</h6>
                    <span className="fw-light">{article.body}</span>
                </div>
            </div>
        </Link>
    )
}

export default ArticleItem
