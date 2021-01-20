import Link from 'next/link';
import moment from 'moment';



const Card=({privateJob})=>{
    const showJobCategories = privateJob =>
    privateJob.privateJobCategories.map((c, i) => (
        <Link key={i} href={`/privateJobCategories/${c.slug}`}>
            <a style={{padding:" 0 0.8rem",border:'solid #00e7d2'}}  className="btn nbtn bg-light-gray "><p className="extra-small">{c.name}</p></a>
        </Link>
    ));

const showJobTags = privateJob =>
    privateJob.privateJobTags.map((t, i) => (
        <Link key={i} href={`/privateJobTags/${t.slug}`}>
            <a style={{padding:" 0 0.8rem",border:'solid black '}}  className="btn nbtn bg-light-gray "><p className="extra-small">{t.name}</p></a>
        </Link>
    ));
    const today=moment();


    return (
        <>
    <div className="nbtn job-read my-1"style={{border:'solid #e64444'}}>
       <main className="p-1"  style={{display: "grid",gridTemplateColumns:'10fr 2fr'}}>
       
       <Link href={`/privateJobs/${privateJob.slug}`}>
       <a>
       <h2 className="lead text-success" style={{lineHeight:'1.9rem'}}>{privateJob.title}</h2>
       </a>
       
       </Link>
       <p className="extra-small p-1"><i className="fas fa-shield-alt text-primary"></i><strong> {privateJob.agency}</strong></p>
    </main>
    <small className="text-gray p-1"> Published {moment(privateJob.updatedAt).fromNow()}</small>
     <p className="extra-small py-1" style={{paddingLeft:'1rem'}}> Expire  {moment(privateJob.lastDate).fromNow()}</p>
     <div  style={{display: "flex",marginLeft:'1rem',flexWrap:'wrap',lineHeight:'1.2rem'}}>
         {showJobCategories(privateJob)}
         {showJobTags(privateJob)}
        </div>
       <div className="xyz">
       <div>
           <p className=" text-gray my-1"><i className="fas fa-rupee-sign"></i><span> </span> {privateJob.salary}</p>
           <p className=" text-gray my-1"><i className="fas fa-briefcase"></i><span> </span> {privateJob.type}</p>
           <p className=" text-gray my-1"><i className="fas fa-map-marker-alt "></i><span> </span>{privateJob.location}</p>
        </div>
        <a href={`${privateJob.applyLink}`}  target="_blank" className={`btn nbtn btn-${ moment(privateJob.lastDate).format()<today.format() ? 'danger':'primary'} nbtn1 my-1 `}>{moment(privateJob.lastDate).format()<today.format()  ? 'Closed':'Apply now'}</a>

        </div>
       
    </div>
</>
    )

};
export default Card;