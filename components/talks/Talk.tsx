import styled from 'styled-components'

const Talk = styled.div`
    flex: 1 0 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    font-size: 18px;
    margin-bottom: 100px;
    img {
        height: 250px;
        width: 100%;
    }
`
const TalkContents = styled.div`
    background-color: rgba(220,220,220, 0.15);
    padding: 0 20px;;
    width: 80%;
    h3 {
        text-align: center;
    }
`
const TalkText = styled.div`
    display: flex;
    align-items:center;
    height: 100px;
`
interface TalkDetails {
    audience: string
    place: string
    year: string
    url: string
}
interface TalkComponentType {
    details: TalkDetails
    txt: string
    img: string
    title: string
}

export default function TalkComponent({title, details, txt, img}: TalkComponentType) {
    let {audience, place, year, url} = details
    let TalkDetails = ({audience, place, url, year}) => {
        return (
            <p style={{paddingLeft: "30px"}}>
                <b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At:
                </b> <a href={url} target="_blank">{place}</a> <br/>
                <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Year: </b> {year} <br/>
                <b>Audience:</b> {audience}
            </p>
        )
    }
    return (
        <Talk>
            <TalkContents>
                <h3>{title}</h3>
                <TalkText>
                    {txt}
                </TalkText>
                <img src={`/${img}`} alt=""/>
                <TalkDetails
                    audience={audience}
                    place={place}
                    year={year}
                    url={url}
                />
            </TalkContents>
        </Talk>
    )
}