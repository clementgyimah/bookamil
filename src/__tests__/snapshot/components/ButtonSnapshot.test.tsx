import renderer from 'react-test-renderer'
import { Button } from '../../../components'

test('button component snapshot test', () => {
  const buttonPressedAction = () => null
  const buttonSnap = renderer.create(
    <Button title="Test Button" showOpenNewTabIcon={true} buttonAction={buttonPressedAction} />
  )
  const buttonSnapTree = buttonSnap.toJSON()
  expect(buttonSnapTree).toMatchSnapshot()
})
