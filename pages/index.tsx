import Head from 'next/head'
import styled from 'styled-components'
import Main from '../components/Main'

const Container = styled.div`
   width: 100vw;
   height: 100vh;
`
const Header = styled.div`
   height: 14vh;
   width: 100vw;
   position: fixed;
   background-color: rgb(27,36,47);
`
const Content = styled.div`
   padding-top: 14vh;
   background-color: darkblue;
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

      <Header />
      <Content>
         <Main />
         <Projects />
      </Content>
    </Container>
  )
}
