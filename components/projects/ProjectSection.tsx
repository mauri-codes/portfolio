import styled from 'styled-components'
import AwsJourney from './AwsJourney'

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
         </Projects>
    )
}