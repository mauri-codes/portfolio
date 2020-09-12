import styled from 'styled-components'
import { main_color, redirect } from '../components/common'

const Footer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 180px;
   background-color: ${main_color};
   width: 100%;
   font-size: 20px;
   font-family: "Maiandra GD";
   color: gainsboro;
`

const Buttons = styled.div`
   display: flex;
   flex: 0 0 30px;
   width: 300px;
   padding-bottom: 20px;
   padding-top: 20px;
   justify-content: space-between;
`

const ButtonIcon = styled.div`
   width: 50px;
   background-color: rgba(134, 203, 228, 1);
   height: 50px;
   cursor: pointer;
   &:hover {
      background-color: rgba(50, 141, 174, 1);
   }
   img {
      width: 100%;
      height: 100%;
   }
`
export default function FooterComponent() {
    let linkedinLink = "https://www.linkedin.com/in/mauricio-alarcon-261893153/"
    let githubLink = "https://github.com/mauri1789"
    let slidesLink = "https://slides.com/mau"
    return (
      <Footer>
        <Buttons>
            <ButtonIcon onClick={() => redirect(linkedinLink)}><img src="/linkedin4.png" alt=""/></ButtonIcon>
            <ButtonIcon onClick={() => redirect(githubLink)}><img src="/github2.png" alt=""/></ButtonIcon>
            <ButtonIcon onClick={() => redirect(slidesLink)} style={{padding: "1.5px"}}><img src="/comp.png" alt=""/></ButtonIcon>
        </Buttons>
        <p>Mauricio Alarcon 2020</p>
    </Footer>
    )
}