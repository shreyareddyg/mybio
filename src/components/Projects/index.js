import {
    ProjectContainer,
    CardContainer,
    LargeDeviceContainer,
    ProjectTitle,
    ProjectTechnologies,
    ProjectNumber,
    ProjectDescription,
    Line
} from './styledComponents'


const Projects = ()=>{
    return(
        <ProjectContainer id="projectSection">
            <LargeDeviceContainer>
            <CardContainer>
                <ProjectNumber>#Project 1</ProjectNumber>
                <ProjectTitle>Web Page- Web Data Management </ProjectTitle>
                <ProjectTechnologies>Technologies used: Php, XML, Html, CSS, JavaScript, MySQL</ProjectTechnologies>
                <ProjectDescription>Developed a responsive web page that performs user validations and created an XSL style sheet from an XML file.</ProjectDescription>
                <Line/>
                <ProjectNumber>#Project 2</ProjectNumber>
                <ProjectTitle>Art Gallery- Databases </ProjectTitle>
                <ProjectTechnologies>Technologies used: Php, Html, MySQL, Xamp Server</ProjectTechnologies>
                <ProjectDescription>Created UML diagrams, Database and a basic website which performs CRUD operations on the data.</ProjectDescription>
                <Line/>
                <ProjectNumber>#Project 3</ProjectNumber>
                <ProjectTitle>Great Outdoor  </ProjectTitle>
                <ProjectTechnologies>Technologies used: Spring, Angular, Tomcat, MySQL</ProjectTechnologies>
                <ProjectDescription>A complete web-based application built using Agile methodology where the user can add products to cart and place an Order.</ProjectDescription>
                <Line/>
                <ProjectNumber>#Project 4</ProjectNumber>
                <ProjectTitle>Meat to Door</ProjectTitle>
                <ProjectTechnologies>Technologies used: Java, Xml, MySQL, IDE-Android Studio</ProjectTechnologies>
                <ProjectDescription>Developed an android application where users can order various meat and dairy products.</ProjectDescription>
            </CardContainer>
            </LargeDeviceContainer>
        </ProjectContainer>

    )
}

export default Projects
