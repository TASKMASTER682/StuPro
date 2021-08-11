import React,{useState} from 'react';
import Card from './Card'

const LoadMore = ({listWithCategoriesAndTags,contentLimit,totalContent}) => {
    const [limit, setLimit] = useState(contentLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalContent);
    const [loadedContent, setLoadedContent] = useState([]);

    const loadMore = () => {
        let toSkip = skip + limit;
        listWithCategoriesAndTags(toSkip, limit).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedContent([...loadedContent, ...data.jobs]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button style={{width:'100%',textAlign:'center'}} onClick={loadMore} className="btn nbtn btn-danger ">
                    Load more
                </button>
            )
        );
    };
    const showLoadedJobs = () => {
        return loadedContent.map((job, i) => (
            <article key={i} >
                <Card job={job} />
            </article>
        ));
    };
    return (
        <>
            {showLoadedJobs()}
            {loadMoreButton()}

        </>
    )
}

export default LoadMore
