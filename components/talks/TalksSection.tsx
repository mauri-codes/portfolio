import styled from 'styled-components'
import TalkComponent from './Talk'

const TalksContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
`

export default function TalksSection(props) {
    return (
        <div id="talks">    
            <h1>TALKS AND COURSES</h1>
            <hr/>
            <TalksContainer>
                <TalkComponent 
                    title="AWS Serverless"
                    txt="A complete semester course for College  students.
                    The contents are the same as the AWS Developer Certification."
                    details= {{
                        audience: "College Students",
                        place: "UPB",
                        year: "2020",
                        url: "http://www.upb.edu/"
                    }}
                    img= "serverless.png"
                />
                <TalkComponent 
                    title="Feedback Workshop"
                    txt="A talk about how continuous feedback can make us more productive in an
                        agile environment. This was for the company I currently work for."
                    details= {{
                        audience: "Coworkers",
                        place: "Mojix",
                        year: "2019",
                        url: "https://mojix.com/"
                    }}
                    img= "feedback.png"
                />
                <TalkComponent 
                    title="Angular Course"
                    txt="A 2 month course for a Software development company. Back when Angular
                        was popular."
                    details= {{
                        audience: "Company Employees",
                        place: "MC4",
                        year: "2017",
                        url: "https://mc4.com.bo/"
                    }}
                    img= "angular.png"
                />
                <TalkComponent 
                    title="Cognito and OAuth 2.0"
                    txt="Cognito and OAuth 2.0 really catched my attention, so I had to make a
                        talk about it."
                    details= {{
                        audience: "Coworkers",
                        place: "Mojix",
                        year: "2019",
                        url: "https://mojix.com/"
                    }}
                    img= "oauth.png"
                />
                <TalkComponent 
                    title="The Joy of Reactive"
                    txt="I've always been a big fan of reactive programming, this talk is about its
                        advantages and its importance in software development."
                    details= {{
                        audience: "Coworkers",
                        place: "Mojix",
                        year: "2018",
                        url: "https://mojix.com/"
                    }}
                    img= "reactive.png"
                />
                <TalkComponent 
                    title="Graphs and Algorithms"
                    txt="Making what's difficult into an easy explanation. That's what I liked most
                        about this course I gave back when I was in college."
                    details= {{
                        audience: "University Students",
                        place: "UMSA",
                        year: "2015",
                        url: "https://www.umsa.bo/"
                    }}
                    img= "graphs.png"
                />
            </TalksContainer>
        </div>
    )
}
