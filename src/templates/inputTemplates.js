    
    const educationInputTemplate = {
        key: "",
        deleteButtonKey: "",
        input: [
            {
                inputLabelFor: "School or University",
                inputType: "text",
                inputId: "school",
                inputPlaceholder: "Aarhus University",
            },
            {
                inputLabelFor: "Degree",
                inputType: "text",
                inputId: "degree",
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
                inputId: "schoolLocation",
                inputPlaceholder: "Aarhus, Denmark",
            },
        ]
    }
    
    const workInputTemplate = {
        key: "",
        deleteButtonKey: "",
        input: [
            {
                inputLabelFor: "Company Name",
                inputType: "text",
                inputId: "companyName",
                inputPlaceholder: "Enter company name",
            },
            {
                inputLabelFor: "Position Title",
                inputType: "text",
                inputId: "position",
                inputPlaceholder: "Enter position title",
            },
            {
                inputLabelFor: "Start Month",
                inputType: "month",
                inputId: "workStart",
                inputPlaceholder: "Starting Month",
            },
            {
                inputLabelFor: "Ending Month",
                inputType: "month",
                inputId: "workEnd",
                inputPlaceholder: "Final Month",
            },
            {
                inputLabelFor: "Description",
                inputType: "text",
                inputId: "workDescription",
                inputPlaceholder: "Describe your tasks",
            },
        ]
    }

export { educationInputTemplate, workInputTemplate }