import styled from 'styled-components'
import AwsJourney from './AwsJourney'
import CodeDeploy from './CodeDeploy'
import Portfolio from './Portfolio'

const Projects = styled.div`
   height: 86vh;
   width: 100%;
   background-color: white;

`

export default function ProjectSection() {
   return (
      <Projects >
         <h1>PROJECTS</h1>
         <hr/>
         <AwsJourney />
         <CodeDeploy reversed />
         <Portfolio />
      </Projects>
   )
}