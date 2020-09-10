import styled from 'styled-components'
import ProjectImageSection from './ProjectImageSection'
import TechnologiesSection from './TechnologiesSection'

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

export default function AwsJourney() {
    return (
      <Project>
         <ProjectImageSection
            img='aws_journey.png'
            github = 'http://www.github.com'
            app = 'http://www.netflix.com'
         />            
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
                  It is still a work in progress, but you can take a look.
               </p>
            </div>
            <TechnologiesSection
               backend={["lambda", "api", "cloudfront", "dynamo", "python"]}
               frontend={["react", "redux", "svg"]}
               infrastructure={["sqs", "cloudformation", "cognito"]}
            />
         </ProjectContent>
      </Project>
    )
}