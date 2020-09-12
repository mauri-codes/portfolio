import styled from 'styled-components'
import {main_yellow, secondary_yellow, main_blue, secondary_blue} from '../common'

const Talk = styled.div`
    flex: 1 0 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    font-size: 16px;
    margin-bottom: 100px;
`

const TalkImage = styled.div`
    display: flex;
    align-items: center;
    height: 300px;
    img {
        max-height: 300px;
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
const TalkLinks = styled.div`
    display: flex;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
`

const LinkButton = styled.div`
    flex: 1 0 100px;
    padding: 10px;
    margin: 10px;
    &:hover {
        background-color: ${({button}) => {
            if (button == "article") return secondary_blue
            if (button == "slides") return secondary_yellow
            else return secondary_blue
    }};
    }
    background-color: ${({button}) => {
        if (button == "article") return main_blue
        if (button == "slides") return main_yellow
        else return main_blue
    }};
`

interface TalkDetails {
    audience: string
    place: string
    year: string
    url: string
}
interface Links {
    slides: string
    article?: string
    code?: string
}
interface TalkComponentType {
    details: TalkDetails
    txt: string
    img: string
    title: string
    links: Links
}

export default function TalkComponent({title, details, txt, img, links}: TalkComponentType) {
    function redirect (link) {
       window.open(link, '_blank');
    }
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
                <TalkImage>
                    <img src={`/${img}`} alt=""/>
                </TalkImage>
                <TalkLinks>
                    {links.slides &&
                        <LinkButton button="slides" onClick={() => redirect(links.slides)}>Slides</LinkButton>
                    }
                    {links.article &&
                        <LinkButton button="article" onClick={() => redirect(links.article)}>Article</LinkButton>
                    }
                    {links.code &&
                        <LinkButton button="code" onClick={() => redirect(links.article)}>Code</LinkButton>
                    }
                </TalkLinks>
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