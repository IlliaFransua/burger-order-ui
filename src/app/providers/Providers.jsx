import { Suspense } from "react"
import { QueryProvider } from "./with-query"

export const Providers = ({ children }) => {
  return (
    <Suspense fallback="Loading...">
      <QueryProvider>
        {children}
      </QueryProvider>
    </Suspense >
  )
}
