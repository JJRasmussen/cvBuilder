import { FormTextInput } from './formTextInput'


const InputField = ({section, onChange, removeSection}) => {
    let inputSections = []
    let newSection = []

    if(section.key === "personal"){
        inputSections = section.input.map((eachInput) => (
                <FormTextInput
                    inputLabelFor = {eachInput.inputLabelFor} 
                    inputType = {eachInput.inputType}
                    inputId = {eachInput.inputId} 
                    inputPlaceholder = {eachInput.inputPlaceholder} 
                    key = {eachInput.inputId}
                    onChange = {onChange}
                />
           )
        )
    } else {
        section.input.map((eachSection) => {
            newSection = eachSection.input.map((eachInput) => (
                    <FormTextInput
                        inputLabelFor = {eachInput.inputLabelFor} 
                        inputType = {eachInput.inputType}
                        inputId = {eachInput.inputId} 
                        inputPlaceholder = {eachInput.inputPlaceholder} 
                        key = {eachInput.inputId}
                        onChange = {onChange}
                    />
            ))
            newSection.push(<button key = {eachSection.deleteButtonKey} onClick={() => removeSection(section.key, eachSection.key)}>{"Delete this section"}</button>)
            inputSections.push(newSection)
        })
    }

    

    return(
            <div>
                <h1>{section.headline}</h1>
               {inputSections}
            </div>
    )
}

export { InputField }