import React from 'react'
import { HomePage } from './pages/home/HomePage'
import { ErrorBoundary } from './components'

const Router = () => {
  return (
    // wrap home page in the error boundary component to catch all errors
    <ErrorBoundary props={undefined}>
      <HomePage />
    </ErrorBoundary>
  )
}

export { Router }
