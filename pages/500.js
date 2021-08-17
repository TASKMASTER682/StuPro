import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Custom500() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/")
  })

  return (
    <div className="container my-2 p-2">
    <h1 className="text-danger large my-1">Error 500</h1>
    <p className="lead text-dark">Sorry for Inconvinience.There is Server Error.Something went Wrong</p>
    <h2 className="text-primary small my-1">We are redirecting you to the home page.Navigate more Jobs,Study Material and Blogs</h2>
  </div>
  )
}