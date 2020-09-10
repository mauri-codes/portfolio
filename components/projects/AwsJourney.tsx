import styled from 'styled-components'
import ProjectImageSection from './ProjectImageSection'
import TechnologiesSection from './TechnologiesSection'
import { Project, ProjectContent } from './common'

export default function AwsJourney(props) {
    return (
      <Project key={"xml"}>
         <ProjectImageSection
            img='aws_journey.png'
            github = 'http://www.github.com'
            app = 'http://www.netflix.com'
            reversed = {props.reversed}
         />            
         <ProjectContent>
            <h2>AWS Journey</h2>
            <div>
               <p>m that provides step by step labs and grades your
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