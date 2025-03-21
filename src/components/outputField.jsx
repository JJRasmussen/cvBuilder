const OutputField = ({section, data}) => {
    if(data.length === 0){return}
    let outputSections = []
    let newSection = []
    if (section.key === 'personal'){
        outputSections = 
            <div className='outputHeader'>
                <h1>{data.fullName}</h1>
                <p>You can send me an email at: {data.email}</p>
                <p>Give me a call. my number is {data.phoneNr}</p>
                <p>or feel free to swing by. I live at {data.address}</p>
            </div>
    } else if (section.key === 'education'){
        let educationHeadline = <h1>Educational Experience</h1>
        newSection = data.map((eachSection) => (
                <div className='outputHeader' key={eachSection.key}>
                    <h2>Degree: {eachSection.degree}</h2>
                    <p>School/University: {eachSection.school}</p>
                    <p>Started on: {eachSection.educationStart}</p>
                    <p>Ended on: {eachSection.educationEnd}</p>
                    <p>Location: {eachSection.schoolLocation}</p>
                </div>
        ))
        outputSections.push(educationHeadline)
        outputSections.push(newSection) 
    } else if (section.key === 'work'){
        let workHeadline = <h1>Work Experience</h1>
        newSection = data.map((eachSection) => (
        <div className='outputHeader' key={eachSection.key}>
                <h2>Position: {eachSection.position}</h2>
                <p>Company: {eachSection.companyName}</p>
                <p>Starting on: {eachSection.workStart}</p>
                <p>Ended on: {eachSection.workEnd}</p>
                <p>Description: {eachSection.workDescription}</p>
            </div>
        ))  
        outputSections.push(workHeadline)
        outputSections.push(newSection) 
    }
    console.log(outputSections)
    return (outputSections) 
}

export { OutputField }