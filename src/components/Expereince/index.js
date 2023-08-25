import {
    ExpereienceContainer,
    Experiences,
    ExperienceTitle,
    Part1,
    CompanyName,
    FromTo,
    Role,
    Part3,
    ListType,
    WorkDescription,
    WholeExperenice
} from './styledComponents'

const Experience = () =>{
    return (
        <ExpereienceContainer id="experienceSection">
            <WholeExperenice>
                <ExperienceTitle>#WORK EXPEREIENCES</ExperienceTitle>
            <Experiences>
                <Part1>
                    <CompanyName>Arius System Inc, Frisco, Texas</CompanyName>
                    <FromTo>Feb 2023 – May 2023</FromTo>
                </Part1>
                <Role>Java Full Stack Developer Intern</Role>
                <Part3>
                    <ListType>
                        <WorkDescription>Analysis and develop software as per project defined software process.</WorkDescription>
                        <WorkDescription>Demonstrate successful completion of analysis, technical design, and programming assignments.</WorkDescription>
                        <WorkDescription>Execute test plans and create test cases and test data.</WorkDescription>
                        <WorkDescription>Contribute to appropriate software (including programming languages) development life</WorkDescription>
                        <WorkDescription>Code & unit test cases should be delivered with high quality and on time - “Right-first- time” practice.</WorkDescription>
                        <WorkDescription>Prepare/Analyze/ Review system documentation.</WorkDescription>
                        <WorkDescription>Provide data for Metrics collection.</WorkDescription>
                        <WorkDescription>Implementation and Usage of project-related tools.</WorkDescription>
                        <WorkDescription>Work closely with support teams and delivery managers to address incidents and problem queues</WorkDescription>
                    </ListType>
                </Part3>
            </Experiences>
            <Experiences>
                <Part1>
                    <CompanyName>Capgemini Technology Services India Limited, Bangalore, India </CompanyName>
                    <FromTo>June 2020 – August 2021</FromTo>
                </Part1>
                <Role>Software Engineer/Analyst</Role>
                <Part3>
                    <ListType>
                        <WorkDescription>Created Web-based and distributed J2EE Enterprise Applications, expertise in implementing OOPS with Core Java, J2EE</WorkDescription>
                        <WorkDescription>Provided Application support (L1&L2 – Technical Support)</WorkDescription>
                        <WorkDescription>Prepared daily and weekly reports for multiple errors and non-acknowledged receipts.</WorkDescription>
                        <WorkDescription>Created an automation tool to eliminate manual work in the day-to-day activities using UiPath, Java</WorkDescription>
                        <WorkDescription>Resolved 100+ client’s incidents including 20 critical incidents.</WorkDescription>
                        <WorkDescription>Collaborated with other teams of our project IKEA and solved nearly 97% of tickets within SLA time.</WorkDescription>
                        <WorkDescription>Participated in various training sessions to update my skills.</WorkDescription>
                        <WorkDescription>Served as a first line of SL1 Production Support for the Project</WorkDescription>
                        <WorkDescription>Worked with great responsibilities with team and sharing knowledge to fresher’s joining in</WorkDescription>
                        <WorkDescription>Performed migration of data from Oracle to PostgreSQL relational database</WorkDescription>
                        <WorkDescription>Developed REST API with multiple request params in IKEA foods application which returns json response of food related transactions and their receipts.</WorkDescription>
                    </ListType>
                </Part3>
            </Experiences>
            <Experiences>
                <Part1>
                    <CompanyName>Capgemini Technology Services India Limited, Bangalore, India</CompanyName>
                    <FromTo>January 2020 – May 2020</FromTo>
                </Part1>
                <Role>Full Stack Intern</Role>
                <Part3>
                    <ListType>
                        <WorkDescription>Created full-stack applications using latest industry-adopted technologies and frameworks such as Spring Boot, Angular</WorkDescription>
                        <WorkDescription>Played Scrum Master Role and followed Agile Methodologies maintaining sprint backlog and product backlog sheets.</WorkDescription>
                        <WorkDescription>Gained hands-on expertise in Bootstrap and similar back end Node.js as well as front-end web application frameworks.</WorkDescription>
                        <WorkDescription>Design and develop a database using DBMS principles to store data using MySQL relational database.</WorkDescription>
                        <WorkDescription>Conducted unit testing to uncover bugs and troubleshoot issues prior to application launch.</WorkDescription>
                    </ListType>
                </Part3>
            </Experiences>
            {/* Dummy Copy for further use */}
            {/* <Experiences>
                <Part1>
                    <CompanyName></CompanyName>
                    <FromTo></FromTo>
                </Part1>
                <Role></Role>
                <Part3>
                    <ListType>
                        <WorkDescription></WorkDescription>
                        <WorkDescription></WorkDescription>
                        <WorkDescription></WorkDescription>
                        <WorkDescription></WorkDescription>
                        <WorkDescription></WorkDescription>
                        <WorkDescription></WorkDescription>
                        <WorkDescription></WorkDescription>
                        <WorkDescription></WorkDescription>
                        <WorkDescription></WorkDescription>
                    </ListType>
                </Part3>
            </Experiences> */}
            </WholeExperenice>
        </ExpereienceContainer>
    )
}

export default Experience
