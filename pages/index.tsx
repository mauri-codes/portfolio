import styled from 'styled-components'
import Main from '../components/Main'
import PageHeader from '../components/PageHeader'
import HtmlHeader from '../components/HtmlHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
   width: 100%;
   height: 100vh;
`

const Content = styled.div`
   padding-top: 14vh;
   text-align: center;
   hr {
      border: 4px solid black;
      width: 100px;
      margin-bottom: 50px;
   }
   h1 {
      margin: 0;
      padding-top: 50px;
   }
`

const Projects = styled.div`
   height: 86vh;
   width: 100%;
   background-color: white;

`

const Image = styled.div`
   flex: 0 0 30vw;
   img {
      width: 100%;
      padding: 5%;
   }
`

const ProjectContent = styled.div`
   flex: 0 0 60vw;
   padding-left: 20px;
   font-size: 22px;
   h2 {
      font-size: 30px;
   }
`

const Project = styled.div`
   display: flex;
   justify-content: center;
   text-align: left;
   width: 100%;
`
const Links = styled.div`
   display: flex;
   justify-content: center;
`
const LinkButton = styled.div`
   display: flex;
   cursor: pointer;
   flex: 1 0 0;
   font-size: 16px;
   font-size: 18px;
   margin: 10px;
   padding: 10px;
`

const GithubButton = styled(LinkButton)`
   background-color: lightskyblue;
   &:hover {
      background-color: lightblue;
   }

`

const ButtonIcon = styled.div`
   flex: 0 0 20px;
   padding-left: 10px;
`
const ButtonText = styled.div`
   flex: 1 0 0;
   text-align: center;
`

const AppButton = styled(LinkButton)`
   background-color: hsla(51, 79%, 60%, 1);
   &:hover {
      background-color: hsla(51, 69%, 60%, 1);
   }
`


export default function Home() {

  return (
    <Container>
      <HtmlHeader />
      <PageHeader />
      <Content>
         <Main />
         <Projects >
            <h1>PROJECTS</h1>
            <hr/>
            <Project>
               <Image>
                  <div>
                     <img src="/aws_journey.png" alt=""/>
                  </div>
                  <Links>
                     <AppButton>
                        <ButtonIcon><FontAwesomeIcon icon={faEye} /></ButtonIcon>
                        <ButtonText>View App</ButtonText>
                     </AppButton>
                     <GithubButton>
                        <ButtonIcon>
                           <FontAwesomeIcon icon={faCode} />
                        </ButtonIcon>
                        <ButtonText>
                           View on Github
                        </ButtonText>                        
                     </GithubButton>
                  </Links>
               </Image>
               
               <ProjectContent>
                  <h2>AWS Journey</h2>
                  <div>
                     <p>
                        A learning platform that provides step by step labs and grades your
                        work when you finish. It is a great tool for people learning AWS.
                     </p>
                     <p>
                        This project is completely serverless and scalable.
                     </p>
                     <p>
                        It is still a work in progress, but you can take a look
                     </p>
                     
                  </div>
                  

               </ProjectContent>
            </Project>
         </Projects>
      </Content>
    </Container>
  )
}
