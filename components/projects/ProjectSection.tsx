import styled from 'styled-components'
import AwsJourney from './AwsJourney'
import CodeDeploy from './CodeDeploy'
import Portfolio from './Portfolio'


const Projects = styled.div`
   width: 100%;
   background-color: white;
`

export default function ProjectSection() {
   return (
      <Projects id="projects">
         <h1>PROJECTS</h1>
         <hr/>
         <AwsJourney />
         <CodeDeploy reversed />
         <Portfolio />
      </Projects>
   )
}