import renderer from 'react-test-renderer'
import { Router } from '../../../Router'

test('home page snapshot test', () => {
  const routerSnap = renderer.create(<Router />)
  const routerSnapTree = routerSnap.toJSON()
  expect(routerSnapTree).toMatchSnapshot()
})
