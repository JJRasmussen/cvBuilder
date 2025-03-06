import { useState } from 'react'
import '../styles/mainLayout.css'
import { InputField } from './inputField.jsx'


const MainLayout = () => { 
    const [personalData, setPersonalData] = useState({
        fullName: '',
        email: '',
        phoneNr: '',
        address: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setPersonalData(prevData => ({
            ...prevData,
            [name]: value,
        }))
    }

    const inputFields = [
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
                inputType: "text",
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
        {
            key: "education",
            headline: "Education",
            input: [
                {
                    inputLabelFor: "School or University",
                    inputType: "text",
                    inputId: "schoolInput",
                    inputPlaceholder: "Aarhus University",
                },
                {
                    inputLabelFor: "Degree",
                    inputType: "text",
                    inputId: "degreeInput",
                    inputPlaceholder: "Diplomingeniør i Fødevareteknologi",
                },
                {
                    inputLabelFor: "Start Month",
                    inputType: "month",
                    inputId: "educationStart",
                    inputPlaceholder: "Starting Month",
                },
                {
                    inputLabelFor: "Finish Month",
                    inputType: "month",
                    inputId: "educationEnd",
                    inputPlaceholder: "Final Month",
                },
                {
                    inputLabelFor: "Location",
                    inputType: "text",
                    inputId: "schoolLocationInput",
                    inputPlaceholder: "Aarhus, Denmark",
                },
            ]
        },
        {
            key: "work",
            headline: "Work Experience",
            input: [
                {
                    inputLabelFor: "Company Name",
                    inputType: "text",
                    inputId: "companyNameInput",
                    inputPlaceholder: "Enter company name",
                },
                {
                    inputLabelFor: "Position Title",
                    inputType: "text",
                    inputId: "positionTitleInput",
                    inputPlaceholder: "Enter position title",
                },
                {
                    inputLabelFor: "Start Month",
                    inputType: "month",
                    inputId: "workStartMonth",
                    inputPlaceholder: "Starting Month",
                },
                {
                    inputLabelFor: "Ending Month",
                    inputType: "month",
                    inputId: "workEndMonth",
                    inputPlaceholder: "Final Month",
                },
                {
                    inputLabelFor: "Description",
                    inputType: "text",
                    inputId: "workDescriptionInput",
                    inputPlaceholder: "Describe your tasks",
                },
            ]
        }
    ]
    return(
        <>
            <div className="inputSection">
                {inputFields.map((inputField) => {
                    return(
                    <InputField 
                        headline = {inputField.headline} 
                        input = {inputField.input}
                        key = {inputField.key}
                        onChange = {handleChange}
                    />
                )})}
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