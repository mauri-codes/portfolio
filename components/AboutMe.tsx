import styled from 'styled-components'

const AboutMe = styled.div`
   background-color: rgba(220,220,220, 0.3);
`

const AboutMeContent = styled.div`
   display: flex;
   flex-wrap: wrap;
`
const ImageSection = styled.div`
   flex: 1 0 300px;
   padding: 70px 5%;
   img {
      border-radius: 50%;
      width: 100%;
   }

`
const InfoSection = styled.div`
   flex: 3 0 400px;
   text-align: center;
   padding: 70px 10%;
   font-size: 22px;
`

export default function AboutMeComponent() {
   return (
      <AboutMe id="aboutme">
         <h1>ABOUT ME</h1>
         <hr/>
         <AboutMeContent>
            <ImageSection>
               <img src="/mauri.png" alt=""/>
            </ImageSection>
            <InfoSection>
               <b style={{fontSize: "28px"}}>Who am I?</b>
               <p>I'm a Software Engineer. I believe delivering value is the most important
                  aspect of software develompent. I really enjoy my job and I also like to teach
                  what I learn.</p>
               <p>Here I want to show you what I've done and learnt these years. 
                  Want to take a look?</p>
            </InfoSection>
         </AboutMeContent>
      </AboutMe>
   )
}