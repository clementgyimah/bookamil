import React from 'react'
import { HomePage } from './pages/home/HomePage'
import { ErrorBoundary } from './components'

const Router = () => {
  return (
    <ErrorBoundary props={undefined}>
      <HomePage />
    </ErrorBoundary>
  )
}

export { Router }
