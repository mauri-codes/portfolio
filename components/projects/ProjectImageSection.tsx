import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEye} from '@fortawesome/free-solid-svg-icons'
import { main_yellow, secondary_yellow, main_blue, secondary_blue } from '../common'

const Image = styled.div`
   flex: 2 0 200px;
   order: ${props => (props.reversed)?2:0};
   padding: 1% 5%;
   margin-top: 50px;
   img {
      width: 100%;
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
   background-color: ${main_blue};
   &:hover {
      background-color: ${secondary_blue};
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
   background-color: ${main_yellow};
   &:hover {
      background-color: ${secondary_yellow};
   }
`

export default function ProjectImageSection({img, ...props}) {
   function redirect (link) {
      window.open(link, '_blank');
   }
   return (
      <Image reversed={props.reversed}>
         <div>
            <img src={`/${img}`} alt=""/>
         </div>
         <Links>
            {props.app &&
               <AppButton onClick={() => redirect(props.app)}>
                  <ButtonIcon><FontAwesomeIcon icon={faEye} /></ButtonIcon>
                  <ButtonText>View App</ButtonText>
               </AppButton>
            }
            {props.github &&
               <GithubButton onClick={() => redirect(props.github)}>       
                  <ButtonIcon><FontAwesomeIcon icon={faCode} /></ButtonIcon>
                  <ButtonText>View on Github</ButtonText>          
               </GithubButton>
            }
         </Links>
      </Image>
   )
 }