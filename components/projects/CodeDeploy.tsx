
import ProjectImageSection from './ProjectImageSection'
import TechnologiesSection from './TechnologiesSection'
import { Project, ProjectContent } from './common'


export default function CodeDeploy(props) {
    return (
      <Project>
         <ProjectImageSection
            img='pipeline-aws.png'
            github = 'https://github.com/mauri1789/cicd-ha-nextjs'
            reversed = {props.reversed}
         />            
         <ProjectContent>
            <h2>High Availability CI/CD Pipeline</h2>
            <div>
               <p>
                  This is a blueprint for any nodejs application that needs High Availability and
                  a CI/CD pipeline. You just run deploy.sh and voila!                  
               </p>
               <p>
                  You have an Autoscaling group where the app will run and it is distributed into
                  multiple Availability Zones.
               </p>
               <p>
                  Also you have a codepipeline integration that will deploy any change in the infrastructure
                  with cloudformation and any change in the code with codeploy. It is just a matter of updating
                  the github repo.

               </p>
            </div>
            <TechnologiesSection
               backend={["ec2"]}
               infrastructure={["cloudformation", "codedeploy", "codepipeline", "vpc", "autoscaling"]}
            />
         </ProjectContent>
      </Project>
    )
}