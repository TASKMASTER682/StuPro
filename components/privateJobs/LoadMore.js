import React,{useState} from 'react'
import Card from './Card'

const LoadMore = ({ listPvtJobsWithCategoriesAndTags,jobsLimit,totalJobs}) => {
    const [limit, setLimit] = useState(jobsLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalJobs);
    const [loadedJobs, setLoadedJobs] = useState([]);

    const loadMore = () => {
        let toSkip = skip + limit;
        listPvtJobsWithCategoriesAndTags(toSkip, limit).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedJobs([...loadedJobs, ...data.privateJobs]);
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
        return loadedJobs.map((privateJob) => (
            <article key={privateJob._id} >
                <Card privateJob={privateJob} />
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
