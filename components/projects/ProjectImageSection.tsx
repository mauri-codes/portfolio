import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEye} from '@fortawesome/free-solid-svg-icons'

const Image = styled.div`
   flex: 0 0 25vw;
   margin-right: 100px;
   margin-top: 100px;
   img {
      width: 100%;
      padding: 5%;
   }
`

const Links = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`
const LinkButton = styled.div`
   display: flex;
   cursor: pointer;
   flex: 1 0 200px;
   font-size: 16px;
   font-size: 18px;
   margin: 10px;
   padding: 10px;
`

const GithubButton = styled(LinkButton)`
   background-color: lightskyblue;
   &:hover {
      background-color: lightblue;
   }

`

const ButtonIcon = styled.div`
   flex: 0 0 30px;
   padding-left: 10px;
`
const ButtonText = styled.div`
   flex: 1 0 0;
   text-align: center;
`

const AppButton = styled(LinkButton)`
   background-color: hsla(51, 79%, 60%, 1);
   &:hover {
      background-color: hsla(51, 69%, 60%, 1);
   }
`

export default function ProjectImageSection({img, ...links}) {
    function redirect (newLink) {
       window.open(newLink, '_blank');
    }
    return (
       <Image>
          <div>
             <img src={`/${img}`} alt=""/>
          </div>
          <Links>
                {links.app &&
                   <AppButton onClick={() => redirect(links.app)}>
                      <ButtonIcon><FontAwesomeIcon icon={faEye} /></ButtonIcon>
                      <ButtonText>View App</ButtonText>
                   </AppButton>
                }
                {links.github &&
                   <GithubButton onClick={() => redirect(links.github)}>       
                      <ButtonIcon><FontAwesomeIcon icon={faCode} /></ButtonIcon>
                      <ButtonText>View on Github</ButtonText>          
                   </GithubButton>
                }
                
          </Links>
       </Image>
    )
 }