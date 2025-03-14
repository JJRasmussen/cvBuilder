const FormTextInput = ({ inputLabelFor, inputType, inputId, inputPlaceholder, onChange, inputSectionKey = ''}) => {
    if (inputSectionKey === ''){
        return(
        <div>
            <label htmlFor={inputLabelFor}>{inputLabelFor + ":"}</label>
            <input type={inputType} id={inputId} placeholder = {inputPlaceholder} name={inputId} onChange={onChange}/>
        </div>
    )
    }
    else {
        return(
            <div>
                <label htmlFor={inputLabelFor}>{inputLabelFor + ":"}</label>
                <input type={inputType} id={inputId} placeholder = {inputPlaceholder} name={inputId} onChange={(e) => onChange(e, inputSectionKey)}/>
            </div>
        )
    }
}
export { FormTextInput }