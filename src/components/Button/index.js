import { ButtonStyle } from './style'

const Button = (props) => {
   return(
       <ButtonStyle onClick={props.onClick}>{props.children}</ButtonStyle>
   )
}

export default Button;