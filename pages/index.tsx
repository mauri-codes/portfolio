import Head from 'next/head'
import styled from 'styled-components'
import styles from '../styles/Home.module.scss'

export default function Home() {
   const Container = styled.div`
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
   `
   const Header = styled.div`
      flex: 10 0 0;
      background-color: lightcoral;
   `
   const Content = styled.div`
      flex: 90 0 0;
      background-color: lightblue;
   `

  return (
    <Container>
      <Head>
         <title>Mauricio Alarcon</title>
         <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Content />
    </Container>
  )
}
