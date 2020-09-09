import styled from 'styled-components'

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

export default function PageHeader() {
    return (
      <Header>
        <div>HOME</div>
        <div>PROJECTS</div>
        <div>TALKS</div>
        <div>MORE</div>
    </Header>
    )
}

