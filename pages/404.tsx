import { useEffect } from "react"

const ErrorPage = () => {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/"
        },2000)
    },[])
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <h1>404</h1>
      <h2>Page not found</h2>
    </div>
  )
}

export default ErrorPage
