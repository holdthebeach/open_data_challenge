import './Button.scss'

const Button = ({text, handler, ariaText}) => {

    return(
        <div>
            <button className="button" type="button" onClick={handler} aria-label={ariaText} autoFocus>{text}</button>
        </div>
    )
}

export default Button;