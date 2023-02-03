import styled from "styled-components"
import colors from "../../utils/style/colors"
import homeBackground from '../../assets/home-background.png'

const HeroContainer = styled.div`
width: 100%;
position: relative;
`

const Background = styled.img`
object-fit: cover;
`

const TextDiv = styled.div`
position: absolute;
top: 100px;
left: 350px;
`

const Welcome = styled.h1`
color: ${colors.globaltext};
font-weight: bold;
font-family: Copperplate gothic light;
font-size: 72px;
`

const SubWelcome = styled.p`
color: ${colors.globaltext};
font-weight: bold;
font-size: 36px;
`

function Home () {
    return (
        <HeroContainer>
            <Background src={homeBackground}/>
            <TextDiv>
                <Welcome>Welcome to HRnet</Welcome>
                <SubWelcome>The Wealth Health Intranet</SubWelcome>
            </TextDiv>
        </HeroContainer>
    )
}

export default Home