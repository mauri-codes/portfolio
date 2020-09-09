import styled from 'styled-components'
import Main from '../components/Main'
import PageHeader from '../components/PageHeader'
import HtmlHeader from '../components/HtmlHeader'

const Container = styled.div`
   width: 100vw;
   height: 100vh;
`

const Content = styled.div`
   padding-top: 14vh;
`

const Projects = styled.div`
   height: 86vh;
   width: 100vw;
   background-color: lightgray;

`

export default function Home() {

  return (
    <Container>
      <HtmlHeader />
      <PageHeader />
      <Content>
         <Main />
         <Projects />
      </Content>
    </Container>
  )
}
