import styled from "styled-components"
import colors from "../../utils/style/colors"
import homeBackground from '../../assets/home-background.png'


const HeroContainer = styled.div`
width: 100%;
position: relative;
`

const Background = styled.img`
object-fit: cover;
width: 100%;
@media (max-width: 767px) {
    margin-top: 150px;
}
`

const TextDiv = styled.div`
position: absolute;
top: 15%;
left: 15%;
@media (min-width: 2560px) {
    left: 30%;
}
@media (max-width: 767px) {
    left: 5%;
    top: 0;
}
`

const Welcome = styled.h1`
color: ${colors.globaltext};
font-weight: bold;
font-family: Copperplate gothic light;
font-size: 72px;
@media (max-width: 768px) {
    font-size: 36px;
}
`

const SubWelcome = styled.p`
color: ${colors.globaltext};
font-weight: bold;
font-size: 36px;
@media (max-width: 768px) {
    font-size: 18px;
}
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