
import ProjectImageSection from './ProjectImageSection'
import TechnologiesSection from './TechnologiesSection'
import { Project, ProjectContent } from './common'


export default function Portfolio(props) {
   return (
      <Project>
         <ProjectImageSection
            img='portfolio.png'
            github = 'https://github.com/mauri1789/portfolio'
            reversed = {props.reversed}
         />            
         <ProjectContent>
            <h2>My Portfolio</h2>
            <div>
               <p>
                  The very page you are at right now.
               </p>
               <p>
                  In this project I wanted to try something new, so I used nextjs. In this case
                  using the static html export.
               </p>
               <p>
                  Nextjs also provides server side rendering, which I implemented in the CI/CD
                  pipeline project above.
               </p>
            </div>
            <TechnologiesSection
               frontend={["react", "next"]}
               infrastructure={["s3"]}
            />
         </ProjectContent>
      </Project>
   )
}
