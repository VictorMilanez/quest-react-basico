import './button.css'

const alertMessage = () => {
    alert('A label deste botão é baixar CV')
}

const Button = ({label}) => {
    return <button className="button" onClick={alertMessage}>{label}</button>
}

export default Button