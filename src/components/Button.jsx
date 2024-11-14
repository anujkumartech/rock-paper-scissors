import './Button.css';

const Button = ({ buttonName, onClickHandler }) => {
    return (
        <button className={`rounded-square-button button-${buttonName}`} onClick={() => onClickHandler(buttonName)}>{buttonName}</button>
    )
}

export default Button;