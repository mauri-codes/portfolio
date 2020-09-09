import Head from 'next/head'
import styled from 'styled-components'
import Main from '../components/Main'

const Container = styled.div`
   width: 100vw;
   height: 100vh;
`
const Header = styled.div`
   display: flex;
   height: 14vh;
   width: 100vw;
   position: fixed;
   align-items: center;
   font-size: 20px;
   color: white;
   background-color: hsl(213, 27%, 15%);
   padding-left: 50px;
   >div{
      margin: 30px;
      cursor: pointer;
      &:hover {
         color: hsla(51, 79%, 60%, 1);
      }
   }
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
      <Head>
         <title>Mauricio Alarcon</title>
         <link rel="icon" href="/favicon.ico" />
         <link rel="stylesheet"
          href="//db.onlinewebfonts.com/c/066ce24dae3730ed6c648b09efaea93a?family=Acumin+Variable+Concept"></link>
         <link rel="stylesheet"
          href="//db.onlinewebfonts.com/c/0141df8c3436a6c3eb8be69855e1ec0d?family=Maiandra+GD"></link>
      </Head>

      <Header>
         <div>HOME</div>
         <div>PROJECTS</div>
         <div>TALKS</div>
         <div>MORE</div>
      </Header>
      <Content>
         <Main />
         <Projects />
      </Content>
    </Container>
  )
}
