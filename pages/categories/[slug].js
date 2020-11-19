import Head from 'next/head';
import { singleCategory } from '../../actions/category';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import Card from '../../components/blogs/Card';

const Category=({category,blogs,query})=>{

    const head = () => (
        <Head>
            <title>
                {category.name} | {APP_NAME}
            </title>
            <meta name="description" content={`Blogs related to category: ${category.name}`} />
            <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:title" content={`${category.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`Blogs related to: ${category.name}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/img/stupro2.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:type" content="image/png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );

 

    return(
     <>
     {head()}
     <section class="container">
     <h1 className="text-primary large m-1">{category.name}</h1>
     <div className="line"></div>
       <main>
           <article className="blog bg-light">
           {blogs.map((b, i) => (
                <Card key={i} blog={b} /> 
               ))}
           </article>
       </main>
       
      </section>
    </>
    )
};

Category.getInitialProps = ({ query }) => {
    
    return singleCategory(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { category: data.category, blogs: data.blogs ,query};
        }
    });
};
export default Category;