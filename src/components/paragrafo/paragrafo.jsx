const Paragrafo = (props) => {
    return (
        <p style={{color: props.color, fontWeight: props.fontWeight, textTransform: props.textTransform}}>{props.text}</p>
    )
}

export default Paragrafo