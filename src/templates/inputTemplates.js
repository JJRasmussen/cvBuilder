    
    const educationInputTemplate = {
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
    }
    
    const workInputTemplate = {
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

export { educationInputTemplate, workInputTemplate }