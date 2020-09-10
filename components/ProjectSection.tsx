import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons'

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
   flex-wrap: wrap;
   justify-content: center;
   text-align: left;
   width: 100%;
`
const Links = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`
const LinkButton = styled.div`
   display: flex;
   cursor: pointer;
   flex: 1 0 180px;
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

const Technologies = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Technology = styled.div`
    flex: 1 0 200px;
    padding: 2px 5px;
`

const Tool = styled.div`
    display: flex;
`

const ToolText = styled.div`
    margin-left: 5px;
    flex: 1 0 0;
`

const ToolImg = styled.div`
    flex: 0 0 30px;
    img {
        width: 100%;
        padding: 3px;
    }
`

const TechnologyTitle = styled.div`
    width: 100%;
    padding-bottom: 20px;
`

function ToolComponent({img, txt}) {
    return (
        <Tool>
            <ToolImg><img src={`/${img}`} alt=""/></ToolImg>
            <ToolText>{txt}</ToolText>
        </Tool>
    )
}
export default function ProjectSection() {
    return (
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
                  
                    <Technologies>
                        <Technology>
                            <TechnologyTitle><b>Backend</b></TechnologyTitle>
                            <ToolComponent img="lambda.svg" txt="Lambda" />
                            <ToolComponent img="api_gateway.svg" txt="API Gateway" />
                            <ToolComponent img="cloudfront.svg" txt="CloudFront" />
                            <ToolComponent img="dynamo.svg" txt="DynamoDB" />
                            <ToolComponent img="python.png" txt="Python" />
                        </Technology>
                        <Technology>
                            <TechnologyTitle><b>FrontEnd</b></TechnologyTitle>
                            <ToolComponent img="react.svg" txt="React" />
                            <ToolComponent img="redux.png" txt="Redux" />
                            <ToolComponent img="svg.png" txt="SVG" />
                        </Technology>
                        <Technology>
                            <TechnologyTitle><b>Infrastructure</b></TechnologyTitle>
                            <ToolComponent img="sqs.png" txt="SQS" />
                            <ToolComponent img="cloudformation.svg" txt="CloudFormation" />
                            <ToolComponent img="cognito.svg" txt="Cognito" />
                        </Technology>
                    </Technologies>
               </ProjectContent>
            </Project>
         </Projects>
    )
}