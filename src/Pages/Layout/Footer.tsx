import styled from "styled-components"

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 12px;
  width: 100%;

  background-color: white;
`

const Footer = () => (
  <FooterWrapper>
    <span>React-Week-4</span>
    <span>2023 by Vincent</span>
  </FooterWrapper>
)

export default Footer;