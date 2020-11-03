import Link from 'next/link';
import moment from 'moment';



const Card=({job})=>{
    const showJobCategories = job =>
    job.jobCategories.map((c, i) => (
        <Link key={i} href={`/jobCategories/${c.slug}`}>
            <a style={{padding:" 0 0.8rem",border:'solid #00e7d2'}}  className="btn nbtn bg-light-gray "><p className="extra-small">{c.name}</p></a>
        </Link>
    ));

const showJobTags = job =>
    job.jobTags.map((t, i) => (
        <Link key={i} href={`/jobTags/${t.slug}`}>
            <a style={{padding:" 0 0.8rem",border:'solid black '}}  className="btn nbtn bg-light-gray "><p className="extra-small">{t.name}</p></a>
        </Link>
    ));

    return (
        <>
    <div className="nbtn job-read my-1">
       <main className="p-1"  style={{display: "flex",justifyContent:'space-between'}}>
       
       <Link href={`/jobs/${job.slug}`}>
       <a>
       <h2 className="lead text-dark" style={{lineHeight:'1.9rem'}}>{job.title}</h2>
       </a>
       
       </Link>
       
       
       <p className="extra-small "><i className="fas fa-shield-alt text-primary"></i><strong> {job.agency}</strong></p>
    </main>
    <small className="text-light-gray p-1"> Published {moment(job.updatedAt).fromNow()}</small>
     <p className="extra-small" style={{paddingLeft:'1rem'}}>Last Date {job.lastDate}</p>
     <div  style={{display: "inline",marginLeft:'1rem'}}>
         {showJobCategories(job)}
         {showJobTags(job)}
        </div>
       <div className="xyz">
       <div>
           <p className=" text-light-gray my-1"><i className="fas fa-rupee-sign"></i><span> </span> {job.salary}</p>
           <p className=" text-light-gray my-1"><i className="fas fa-briefcase"></i><span> </span> {job.type}</p>
           <p className=" text-light-gray my-1"><i className="fas fa-map-marker-alt "></i><span> </span>{job.location}</p>
        </div>
           <a href={`${job.applyLink}`} target="_blank" className="btn btn-primary nbtn m-1 lead">Apply now</a>
        </div>
    </div>
</>
    )

};
export default Card;