import React from 'react'
import styled from 'styled-components'
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Container = styled.div`

  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 140px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin-top: 1rem;
  }
`

const Title = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.8rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const Description = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  color: #fff;
  font-size: 0.8rem;
  max-width: 780px;
  margin-bottom: 25px;
`

const PrimaryButton = styled.a`
  font-family: 'Mulish', sans-serif;
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 50px;
  padding: 15px 35px;
  font-size: 0.8rem;
  color: #fff;
  background: #128bbe;
  &:hover {
    background: #0f41ad;
  }
`

const SecondaryButton = styled.a`
  font-family: 'Mulish', sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  border-radius: 50px;
  border: 1px solid rgba(0, 178, 255, 1);
  margin-left: 10px;
  padding: 15px 35px;
  font-size: 0.8rem;
  color: #FFF;
  background-color: #0B0B1D;

  &:hover {
    color: #fff;
    background-color: rgba(0, 178, 255, 1);
  }
`
const CircleImg = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`
const Image = styled.img`
  margin-top: 55px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #fff;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`
const Left = styled.div``

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const Effect = styled.span`
  font-size: 64px;
  text-align: center;
  color: #00B2FF;
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

const Hero = () => {
  return (
    <>
    <Container id="inicio">
    <Left>
      <Title>Hello World!</Title>
        <Description>
          Olá, meu nome é Wesley Marques e sou um desenvolvedor front-end iniciante.
          Com meus conhecimentos em HTML, CSS, JavaScript, ReactJS, MySQL e TypeScript.<br />
          <br />
          Estou aberto a oportunidades de trabalho e interessado em projetos que me permitam aprimorar minhas habilidades e crescer profissionalmente.
          Sinta-se à vontade para me contatar caso tenha alguma oportunidade interessante ou queira conversar sobre tecnologia e desenvolvimento web.
        </Description>
        <PrimaryButton href="./curriculo.pdf" download>Download CV</PrimaryButton>
       <SecondaryButton href="https://www.linkedin.com/in/wesleymarques329/">Linkedin</SecondaryButton>
    </Left>
    <Right>
      <CircleImg >
        <Image src="./wesley.jpg" alt="" />
      </CircleImg>
      <Effect>...</Effect>
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
      </Right>
      </Container>
    </>
  )
}

export default Hero