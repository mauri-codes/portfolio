import ProjectImageSection from './ProjectImageSection'
import TechnologiesSection from './TechnologiesSection'
import { Project, ProjectContent } from './common'

export default function AwsJourney(props) {
    return (
      <Project key={"xml"}>
         <ProjectImageSection
            img='aws_journey.png'
            github = 'https://github.com/mauri1789/aws-journey'
            app = 'https://mauridev.net/lab/S3/S3_static_website'
            reversed = {props.reversed}
         />            
         <ProjectContent>
            <h2>AWS Journey</h2>
            <div>
               <p>
                  A learning platform that provides step by step labs and grades your
                  work when you finish. It is a great tool for people learning AWS. It is intended
                  to eventually be a learning aid for the AWS Certifications.
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
               infrastructure={["sqs", "cloudformation", "s3", "cognito"]}
            />
         </ProjectContent>
      </Project>
    )
}