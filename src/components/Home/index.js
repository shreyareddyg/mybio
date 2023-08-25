import {MainHeading, MainContainer,FrontendImage,ContainerOne,ContainerTwo,IconsContainer,IconsMainConatiner,LargeDeviceContainer, } from './styledComponents'
import {AiFillGithub} from 'react-icons/ai'
import Image from './img2.png'

const Home = () =>{
    const style = { fontSize: "70px", color:'#ffffff' };
    return(
        <MainContainer id="homeSection">
            
            <LargeDeviceContainer>
            <ContainerOne>
                <MainHeading color="#ffffff">Hi, My name is Shreya Reddy Gade</MainHeading>
                <MainHeading color="#8c8a84">I am a Software Developer</MainHeading>
                <IconsMainConatiner>
                    
                <IconsContainer href="https://github.com/shreyareddyg" target="_blank">
                <AiFillGithub style={style}/>
                </IconsContainer>
                </IconsMainConatiner>
                
            </ContainerOne>
            <ContainerTwo>
                <FrontendImage src={Image} alt="working"/>
            </ContainerTwo>
            </LargeDeviceContainer>
        </MainContainer>
    )
}


export default Home
