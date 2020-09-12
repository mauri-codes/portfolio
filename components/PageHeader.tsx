import styled from 'styled-components'
import Link from 'next/link'
import { main_color } from './common'

const Header = styled.div`
display: flex;
height: 14vh;
width: 100vw;
position: fixed;
align-items: center;
font-size: 18px;
color: white;
background-color: ${main_color};
padding-left: 50px;
>div{
   margin: 30px;
   cursor: pointer;
   &:hover {
      color: hsla(51, 79%, 60%, 1);
   }
}
`
export default function PageHeader() {
    return (
      <Header>
         <Link href="#home">
            <div>HOME</div>
         </Link>
         <Link href="#home">
            <div>ABOUT ME</div>
         </Link>
         <Link href="#projects">
            <div>PROJECTS</div>
         </Link>
         <Link href="#talks">
            <div>TALKS</div>
         </Link>
    </Header>
    )
}
