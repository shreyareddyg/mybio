import styled from 'styled-components'

export const ProjectContainer = styled.div`
width:100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height:100vh;
`

export const CardContainer = styled.div`
width:80%;
border: 2px solid #ffffff;
padding:24px;
border-radius:12px;
@media screen and (max-width:771px){
    width:100%;
`

export const ProjectNumber=styled.h2`
color:#8c8a84;
`

export const ProjectTitle = styled.h1`
color:#ffffff;

`

export const ProjectTechnologies = styled.p`
color:#8c8a84;

`
export const ProjectDescription = styled.h3`
color:#ffffff;

`

export const Line = styled.hr`
margin-top:12px;
margin-bottom:12px;
`

export const LargeDeviceContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
padding:18px;

@media screen and (max-width:771px){
    display: none;
`