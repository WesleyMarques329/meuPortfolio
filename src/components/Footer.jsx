import React from 'react'
import styled from 'styled-components'
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        margin-top: 60px;
        flex-direction: column;
        align-items: center;
    }
`

const Bar = styled.div`
    width: 100%;
    border-top: 1px solid #fff;
`

const Desc = styled.p`
    font-family: 'Mulish', sans-serif;
    font-size: 0.8rem;
    color: #fff;
`

const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    animation: jump 0.8s ease-in-out;
  }

  @keyframes jump {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`

const SocialMedia = styled.div`
  display: flex;
  gap: 20px;
`
const IconLink = styled.a`

&:visited {
    color: inherit;
  }
`

const Footer = () => {
  return (
    <>
    <Bar />
    <Container>
    <Desc>
        Desenvolvido e construido por Wesley Marques.<br />
        Todos os direitos reservados.
    </Desc>
    <SocialMedia>
        <IconLink href="https://github.com/WesleyMarques329">
          <IconDiv>
            <BsGithub style={{fontSize:24}}/>
          </IconDiv>
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/wesleymarques329/">
          <IconDiv>
            <BsLinkedin style={{fontSize:24}}/>
          </IconDiv>
        </IconLink>
        <IconLink href="https://twitter.com/weesleydev">
          <IconDiv>
            <BsTwitter style={{fontSize:24}}/>
          </IconDiv>
        </IconLink>
      </SocialMedia>
    </Container>
    </>
  )
  
}

export default Footer