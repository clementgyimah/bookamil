import renderer from 'react-test-renderer'
import { ErrorBoundary } from '../../../components'

test('error boundary component snapshot test', () => {
  const errorBoundarySnap = renderer.create(
    <ErrorBoundary props={undefined}>
      <div />
    </ErrorBoundary>
  )
  const errorBoundarySnapTree = errorBoundarySnap.toJSON()
  expect(errorBoundarySnapTree).toMatchSnapshot()
})
