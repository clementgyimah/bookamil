import '../assets/css/Button.css'
import '../assets/css/FontSize.css'
import { IButtonProps } from '../types'
import { Io5Icon } from './Icons'

const Button = (props: IButtonProps) => {
  return (
    <button className="button-style" onClick={props.buttonAction}>
      <span className="normal-text15" id="button-text">
        {props.title}
      </span>
      {props.showOpenNewTabIcon && (
        <span className="open-new-tab-icon-container">
          <Io5Icon color="white" size={15} title="open in new tab icon" />
        </span>
      )}
    </button>
  )
}

export { Button }
