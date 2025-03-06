import { useState } from 'react'
import '../styles/mainLayout.css'
import { InputField } from './inputField.jsx'
import { educationInputTemplate, workInputTemplate } from '../templates/inputTemplates.js'

const MainLayout = () => { 
    const [inputSections, setInputSections] = useState({
        inputFields: [
            {
            key: "personal",
            headline: "Personal Information",
            input: [
                {
                    inputLabelFor: "Full Name",
                    inputType: "text",
                    inputId: "fullName",
                    inputPlaceholder: "Jane Doe",
                },
                {
                    inputLabelFor: "Email",
                    inputType: "text",
                    inputId: "email",
                    inputPlaceholder: "jane.doe@doemail.com",
                },
                {
                    inputLabelFor: "Phone Number",
                    inputType: "tel",
                    inputId: "phoneNr",
                    inputPlaceholder: "12345678",
                },
                {
                    inputLabelFor: "Address",
                    inputType: "text",
                    inputId: "address",
                    inputPlaceholder: "Andeby",
                },
                ]
            },
        ]
    })

    const [personalData, setPersonalData] = useState({
        fullName: '',
        email: '',
        phoneNr: '',
        address: '',
    });

    const addInputSection = (inputCategory) => {
        if (inputCategory === "education"){
            const newEducationalSection = {...educationInputTemplate, key: crypto.randomUUID()};
            newEducationalSection.input.map((input) => ({
                ...input,
                inputId: crypto.randomUUID()
            }))
            setInputSections(prevData => ({
                ...prevData,
                inputFields: [...prevData.inputFields, newEducationalSection]
            }))
        } else {
            const newWorkSection = {...workInputTemplate, key: crypto.randomUUID()};
            newWorkSection.input.map((input) => ({
                ...input,
                inputId: crypto.randomUUID()
            }))
            setInputSections(prevData => ({
                ...prevData,
                inputFields: [...prevData.inputFields, newWorkSection]
            }))
        }
    }
    function handleInputChange(e) {
        const { name, value } = e.target;
        setPersonalData(prevData => ({
            ...prevData,
            [name]: value,
        }))
    }    
    return(
        <>
            <div className="inputSection">
                {inputSections.inputFields.map((inputField) => {
                return(
                    <InputField 
                        headline = {inputField.headline} 
                        input = {inputField.input}
                        key = {inputField.key}
                        onChange = {handleInputChange}
                    />
                )})}
                <button onClick={() => addInputSection("education")}>Add Educational Section</button>
                <button onClick={() => addInputSection("work")}>Add Work Section</button>
            </div>
            <div className="outputPreview">
                <div className="outputHeader">
                    <h1>{personalData.fullName}</h1>
                    <p>You can send me an email at: {personalData.email}</p>
                    <p>Give me a call. my number is {personalData.phoneNr}</p>
                    <p>or feel free to swing by. I live at {personalData.address}</p>
                </div>
            </div>
        </>
    )
}

export default MainLayout