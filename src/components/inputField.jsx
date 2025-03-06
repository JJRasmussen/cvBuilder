import { FormTextInput } from './formTextInput'


const InputField = ({ headline, input, key, onChange }) => {
    return(
            <div>
                <h1>{headline}</h1>
                {input.map((eachInput) => {
                    return (
                        <FormTextInput
                            inputLabelFor = {eachInput.inputLabelFor} 
                            inputType = {eachInput.inputType}
                            inputId = {eachInput.inputId} 
                            inputPlaceholder = {eachInput.inputPlaceholder} 
                            key = {key}
                            onChange = {onChange}
                        />
                    )
                })}
            </div>
    )
}

export { InputField }