import { useState } from 'react'
import '../styles/mainLayout.css'
import { InputField } from './inputField.jsx'
import { educationInputTemplate, workInputTemplate } from '../templates/inputTemplates.js'

const MainLayout = () => { 
    const [inputSections, setInputSections] = useState({
        personal: {
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
        educational: {
            key: "education",
            headline: "Educational Background",
            input:[]
            },
        work: {
            key: "work",
            headline: "Work Experience",
            input:[]
        },
    })
    const [personalData, setPersonalData] = useState({
        fullName: '',
        email: '',
        phoneNr: '',
        address: '',
    });

    const addInputSection = (inputCategory) => {
        if (inputCategory === "education"){
            let newEducationalSection = {...educationInputTemplate, key: crypto.randomUUID(), deleteButtonKey: crypto.randomUUID()};
            newEducationalSection.input = newEducationalSection.input.map((input) => ({
                ...input,
                inputId: crypto.randomUUID()
            }))
            setInputSections(prevData =>({
                ...prevData,
                educational: {
                    ...prevData.educational,
                    input: [...prevData.educational.input, newEducationalSection]        
                }
            }))
            console.log("sectionKey for deletion")
            console.log(newEducationalSection.key)
        } if (inputCategory === "work"){
            let newWorkSection = {...workInputTemplate, key: crypto.randomUUID(), deleteButtonKey: crypto.randomUUID()};
            newWorkSection.input = newWorkSection.input.map((input) => ({
                ...input,
                inputId: crypto.randomUUID()
            }))
            setInputSections(prevData => ({
                ...prevData,
                work: {
                    ...prevData.work,
                    input: [...prevData.work.input, newWorkSection]
                }
            }))
        }
    }

    const removeInputSection = (sectionType, sectionKey) => {
        if (sectionType === "education"){
            setInputSections(prevData => ({
                ...prevData,
                educational: {
                    ...prevData.educational,
                    input: [...prevData.educational.input.filter((eachSection) => eachSection.key != sectionKey)]      
                }
            }))
        }
        if (sectionType === "work"){
            setInputSections(prevData => ({
                ...prevData,
                work: {
                    ...prevData.work,
                    input: [...prevData.work.input.filter((eachSection) => eachSection.key != sectionKey)]
                }
            }))
        }
    }
    function handlePersonalInputChange(e) {
        const { name, value } = e.target;
        setPersonalData(prevData => ({
            ...prevData,
            [name]: value,
        }))
    }    
    return(
        <>
            <div className="inputSection">
                {<InputField className="personalSection"
                        section = {inputSections.personal} 
                        onChange = {handlePersonalInputChange}
                        removeSection = {removeInputSection}
                    />   
                }
                {<InputField className="educationalSection"
                        section = {inputSections.educational}
                        onChange = {handlePersonalInputChange}
                        removeSection = {removeInputSection}
                    />   
                }
                {<InputField className="workSection"
                        section = {inputSections.work}
                        onChange = {handlePersonalInputChange}
                        removeSection = {removeInputSection}
                    />   
                }
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