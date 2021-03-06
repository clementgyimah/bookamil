import * as React from 'react'
import '../assets/css/ErrorBoundary.css'
import '../assets/css/FontSize.css'
import { IErrorBoundaryProps, IErrorBoundaryState } from '../types'

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  // catch any error that occurs in child component
  componentDidCatch(
    error: IErrorBoundaryState['error'],
    errorInfo: IErrorBoundaryState['errorInfo']
  ) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    // check if any error has occured in child component
    if (this.state.errorInfo) {
      return (
        <div className="error-main-container">
          <div className="error-sub-container">
            <div className="title30 error-title-text">Something went wrong...</div>
            <details className="error-details-title">
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        </div>
      )
    }
    // render child if no error occurs
    return this.props.children
  }
}

export { ErrorBoundary }
