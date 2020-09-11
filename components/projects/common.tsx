import styled from 'styled-components'

const ProjectContent = styled.div`
   flex: 0 0 50vw;
   padding-left: 20px;
   font-size: 20px;
   h2 {
      font-size: 30px;
   }
   margin-bottom: 150px;
`

const Project = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   text-align: left;
   width: 100%;
`

export { Project, ProjectContent }
