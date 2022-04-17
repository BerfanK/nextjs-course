import ArticleItem from './ArticleItem';

const ArticleList = ({articles}) => {
    return (
        <>
            <div className="container">
                {articles.map((article) => 
                    <ArticleItem article={article} />
                )}
            </div>
        </>
    )
}

export default ArticleList
