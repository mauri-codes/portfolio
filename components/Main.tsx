import styled from 'styled-components'

const MainView = styled.div`
   height: 86vh;
   width: 100vw;
   background-image: url('./background.png');
   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-size: 40px;
   font-family: "Maiandra GD";
   color: white;
`

const ActionButton = styled.div`
   border: 4px solid none;
   color: black;
   margin-top: 40px;
   margin-bottom: 60px;
   padding: 16px 36px;
   font-size: 24px;
   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   font-weight: bold;
   cursor: pointer;
   &:hover {
      background-color: hsla(48, 69%, 60%, 1);
   }
   background-color: hsla(51, 79%, 60%, 1);
`

export default function Main() {
    return (
        <MainView>
            <div>Hello! my name is Mauricio</div>
            <div>I'm a Software Engineer</div>
            <ActionButton>See My Work</ActionButton>
        </MainView>
    )
}
