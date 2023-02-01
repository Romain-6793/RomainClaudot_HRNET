import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
  background: ${colors.tertiary};
`

const StyledFooterText = styled.span`
  margin: 0;
  padding: 0;
`

function Footer() {
    return (
        <StyledFooter>
            <StyledFooterText>Copyright 2020 Wealth Health</StyledFooterText>
        </StyledFooter>
    )
}

export default Footer