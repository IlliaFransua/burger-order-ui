import { Suspense } from "react"

export const Providers = ({ children }) => {
  return (
    <Suspense fallback="Loading...">
      <div>{children}</div>
    </Suspense >
  )
}
