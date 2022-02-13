import renderer from 'react-test-renderer'
import { HomePage } from '../../../pages/home/HomePage'

test('home page snapshot test', () => {
  const homeSnap = renderer.create(<HomePage />)
  const homeSnapTree = homeSnap.toJSON()
  expect(homeSnapTree).toMatchSnapshot()
})
