import renderer from 'react-test-renderer'
import { Spinner } from '../../../components'

test('spinner component snapshot test', () => {
  const spinnerSnap = renderer.create(<Spinner />)
  const spinnerSnapTree = spinnerSnap.toJSON()
  expect(spinnerSnapTree).toMatchSnapshot()
})
