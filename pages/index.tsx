import styled from 'styled-components'
import Main from '../components/Main'
import PageHeader from '../components/PageHeader'
import HtmlHeader from '../components/HtmlHeader'
import ProjectSection from '../components/projects/ProjectSection'

const Container = styled.div`
   width: 100%;
   height: 100vh;
`

const Content = styled.div`
   padding-top: 14vh;
   text-align: center;
   hr {
      border: 4px solid black;
      width: 100px;
      margin-bottom: 50px;
   }
   h1 {
      margin: 0;
      padding-top: 50px;
   }
`


export default function Home() {

  return (
    <Container>
      <HtmlHeader />
      <PageHeader />
      <Content>
         <Main />
         <ProjectSection />
      </Content>
    </Container>
  )
}
