
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HRnetLogo from '../../assets/hrnet-logo.png'
import colors from '../../utils/style/colors'

const NavContainer = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px 20px;
background: ${colors.primary}
`

const HomeLogoContainer = styled.div`
display: flex;
align-items: center;
`

const HomeLogo = styled.img`
 width: 100px;
`

const StyledLink = styled(Link)`
margin-right: 0.5rem;
// text-decoration: none;
font-weight: bold;
font-size: 18px;
color: ${colors.globaltext}
&:focus {
  color: ${colors.globaltext}
}
&:active {
  color: ${colors.globaltext}
}
&:hover {
 text-decoration: underline;
 color: ${colors.globaltext}
}
@media (max-width: 767px) {
  font-size: 15px;
}
`

function Header() {

 return (
  <NavContainer>
   <Link to="/">
    <HomeLogoContainer>
    <HomeLogo src={HRnetLogo} />
    </HomeLogoContainer>
   </Link>
    <StyledLink to="/create">
      Create employee
    </StyledLink>
    <StyledLink to="/list">
      Employees list
    </StyledLink>
  </NavContainer>
  
 )
}

export default Header
