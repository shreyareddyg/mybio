import {AboutContainer,ImageContainer,TextContainer,MainTexts,SmallDeviceContainer,LargeDeviceContainer} from './styledComponents'
import Image from '../img1.png'
const About = () =>{
    return(
        <AboutContainer id="aboutSection">
                <LargeDeviceContainer>
                    <ImageContainer>
                        <img src={Image} alt="Mani"/>
                    </ImageContainer>
                    <TextContainer>
                        <MainTexts color='#8c8a84'>Hello there, I'm so happy you are here! &#40;:</MainTexts>
                        <MainTexts color='#ffffff'>
                    Hi, I'm Mani Charan Reddy. I'm a 20-year-old third year Information Technology student at Anurag University in Hyderabad.I am passionate about front-end development and have a strong foundation in HTML, CSS, and JavaScript. I am also proficient in a front-end frameworks, that is React
                        </MainTexts>
                <MainTexts color='#ffffff'>
                    Outside of my studies, I enjoy watching movies, listening to music, and spending time with my friends and family. I'm also a foodie and love trying new restaurants.
                </MainTexts>
                <MainTexts color='#ffffff'>
                I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences. Your visit to my portfolio is deeply appreciated !
                </MainTexts>
                    </TextContainer>
                </LargeDeviceContainer>
             </AboutContainer>
    )
}

export default About