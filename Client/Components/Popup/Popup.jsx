import { useContext } from 'react'
import { ModalBar, ModalStyle, ModalWrapper } from "./PopupStyles";
import { GlobalContext } from '../../contexts/global.provider'
import { togglePopupState } from '../../contexts/actions/app.action'
import { COLORS } from "../../utils";

import CloseIcon from '../../../assets/svg/CloseButton.svg'

const PopupComponent = (props) => {
  const { 
    appDispatch, 
    appState: {
      appModes: {
        popup
      }
    }} = useContext(GlobalContext)
  return (
    <ModalWrapper onClick={()=>togglePopupState(false)(appDispatch)}>
      <ModalStyle >
        {
          popup.excludeCloseButton
            ? null 
            : <ModalBar>
              <CloseIcon 
                fill={COLORS.DARK_PURPLE}
                onClick={()=>togglePopupState(false)(appDispatch)}
              />
            </ModalBar>
        }
        {popup.content}
      </ModalStyle>
    </ModalWrapper>
  )
}

export default PopupComponent