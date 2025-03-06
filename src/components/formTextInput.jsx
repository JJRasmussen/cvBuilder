const FormTextInput = ({ inputLabelFor, inputType, inputId, inputPlaceholder, onChange}) => {
    return(
        <>
            <label htmlFor={inputLabelFor}>{inputLabelFor + ":"}</label>
            <input type={inputType} id={inputId} placeholder = {inputPlaceholder} name={inputId} onChange={onChange}/>
        </>
    )
}
export { FormTextInput }