import { useState } from 'react'
import '../styles/mainLayout.css'
import { InputField } from './inputField.jsx'
import { OutputField } from './outputField.jsx'
import { educationInputTemplate, workInputTemplate } from '../templates/inputTemplates.js'
import { educationalDataTemplate, workDataTemplate } from '../templates/dataTemplates.js'


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
    const [personalData, setPersonalData] = useState([{
        fullName: '',
        email: '',
        phoneNr: '',
        address: '',
    }]);
    const [educationalData, setEducationalData] = useState([
    ]);
    const [workData, setWorkData] = useState([
    ]);
    const addInputSection = (inputCategory) => {
        if (inputCategory === "education"){
            //add educational section to input section
            let newEducationalInputSection = {...educationInputTemplate, key: crypto.randomUUID(), deleteButtonKey: crypto.randomUUID()};
            newEducationalInputSection.input = newEducationalInputSection.input.map((input) => ({
                ...input,
            }))
            setInputSections(prevData =>({
                ...prevData,
                educational: {
                    ...prevData.educational,
                    input: [...prevData.educational.input, newEducationalInputSection]        
                }
            }))
            //add educational section to output section
            let newEducationalData = {...educationalDataTemplate, key: crypto.randomUUID(), inputKey: newEducationalInputSection.key}
            setEducationalData(prevData => ([
                ...prevData,
                newEducationalData
            ]))
        } if (inputCategory === "work"){
            //add work section to input section
            let newWorkInputSection = {...workInputTemplate, key: crypto.randomUUID(), deleteButtonKey: crypto.randomUUID()};
            newWorkInputSection.input = newWorkInputSection.input.map((input) => ({
                ...input,
            }))
            setInputSections(prevData => ({
                ...prevData,
                work: {
                    ...prevData.work,
                    input: [...prevData.work.input, newWorkInputSection]
                }
            }))
            //add work section to output section
            let newWorkData = {...workDataTemplate, key: crypto.randomUUID(), inputKey: newWorkInputSection.key}
            setWorkData(prevData => ([
                ...prevData,
                newWorkData
            ]))
        }
    }
    const removeInputSection = (sectionType, sectionKey) => {
        console.log("sectionKey " + sectionKey)
        if (sectionType === "education"){
            setInputSections(prevData => ({
                ...prevData,
                educational: {
                    ...prevData.educational,
                    input: [...prevData.educational.input.filter((eachSection) => eachSection.key != sectionKey)]      
                }
            }))
            //remove educational section from output section
            setEducationalData(prevData => ([
                ...prevData.filter((eachSection) => eachSection.inputKey != sectionKey),
            ]))
        }
        if (sectionType === "work"){
            //remove work section from input section
            setInputSections(prevData => ({
                ...prevData,
                work: {
                    ...prevData.work,
                    input: [...prevData.work.input.filter((eachSection) => eachSection.key != sectionKey)]
                }
            }))
            //remove work section from output section
            setWorkData(prevData => ([
                ...prevData.filter((eachSection) => eachSection.inputKey != sectionKey),
            ]))
        }
    }
    function handleEducationalInputChange(e, inputSectionKey) {
        const { name, value } = e.target;
        setEducationalData(prevData => {
            const newData = prevData.map(section => {
                if(section.inputKey === inputSectionKey) {
                    return {...section, [name]: value};
                }
                return section;
            })
            return newData;})   
    }    
    function handleWorkInputChange(e, inputSectionKey) {
        const { name, value } = e.target;
        setWorkData(prevData => {
            const newData = prevData.map(section => {
                if(section.inputKey === inputSectionKey) {
                    return {...section, [name]: value};
                }
                return section;
            })
            return newData;})   
    }
    function handlePersonalInputChange(e) {
        const { name, value } = e.target;
        console.log("name: " + name)
        console.log("value: " + value)
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
                        onChange = {handleEducationalInputChange}
                        removeSection = {removeInputSection}
                        sectionType = 'educational'
                    />   
                }
                {<InputField className="workSection"
                        section = {inputSections.work}
                        onChange = {handleWorkInputChange}
                        removeSection = {removeInputSection}
                        sectionType = 'work'
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
                <div className="outputMain">
                {<OutputField className="educationalSection"
                        section = {inputSections.educational}
                        data = {educationalData}
                    />   
                }
                {<OutputField className="workSection"
                        section = {inputSections.work}
                        data = {workData}
                    />   
                }
                </div>
            </div>
        </>
    )
}

export default MainLayout