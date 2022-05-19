import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from 'next/head';

export default function Custom404() {
  const header=()=>(
    <Head>
            <meta name="robots" content="noindex nofollow" />
        </Head>
  )
  const router = useRouter()

  useEffect(() => {
    router.replace("/")
  })

  return(
    <>
    {header()}
    <div className=" pt-24 lg:px-20 px-3 shadow-md rounded-md">
      <h1 className=" text-2xl text-red-500">Error 404</h1>
      <p className="text-lg">Sorry for Inconvinience.The page you are requesting is deleted unfortunately</p>
      <h2 className="text-lg">We are redirecting you to the home page.Navigate more Jobs,Study Material and Blogs</h2>
    </div>
    </>

  )
}