import React,{useState} from 'react'
import Card from './Card';

const LoadMoreMat = ({ listMaterialWithCategories,materialsLimit,totalMaterials}) => {
    const [limit, setLimit] = useState(materialsLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalMaterials);
    const [loadedMaterials, setLoadedMaterials] = useState([]);

    const loadMore = () => {
        let toSkip = skip + limit;
        listMaterialWithCategories(toSkip, limit).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedMaterials([...loadedMaterials, ...data.materials]);
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
    const showLoadedMaterial = () => {
        return loadedMaterials.map((mat) => (
            <article key={mat._id} >
                <Card material={mat} />
            </article>
        ));
    };
    return (
        <>
        {showLoadedMaterial()}
        {loadMoreButton()}
            
        </>
    )
}

export default LoadMoreMat
