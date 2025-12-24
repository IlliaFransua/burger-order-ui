import { Link } from "react-router-dom"

export const NotFoundPage = () => {
  return (
    <div>
      <div>404 not found</div>
      <Link to={'/'}></Link>
    </div>
  )
}
