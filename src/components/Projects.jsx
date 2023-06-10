import React, { useState, useEffect } from 'react';
import styled  from 'styled-components'
import { BsDisplay, BsCodeSlash } from "react-icons/bs";
import {FaArrowUp } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 17%;
`

const Title = styled.h1`
    font-family: 'Mulish', sans-serif;
    color: #fff;
    font-size: 1.5rem;
    text-align: center;

    @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const Bar = styled.div`
    border-top: 1px solid #fff;
`

const ProjectTitle = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    color: #fff;
`

const ProjectTitle2 = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    color: #fff;
    grid-column: 2;
    grid-row: 4;

    @media (max-width: 768px) {
    grid-column: unset;
    grid-row: unset;
    margin-top: 20px;
    text-align: center;
  }
`

const Desc = styled.p`
    font-family: 'Mulish', sans-serif;
    font-size: 1rem;
    width: 550px;
    color: #fff;
    grid-column: 1 / 2;

    @media (max-width: 768px) {
        display: none;
  }
`

const Desc2 = styled.p`
    font-family: 'Mulish', sans-serif;
    font-size: 1rem;
    width: 550px;
    color: #fff;
    grid-column: 2;
    grid-row: 5;

    @media (max-width: 768px) {
        display: none;
  }
`

const Prev = styled.a`
    cursor: pointer;
    height: 250px;
    width: 450px;
    grid-column: 2;
    grid-row: 2 / -2;
    border-radius: 50%;
    opacity: 80%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &:hover {
        opacity: 100%;
        filter: brightness(1.2);
    }

    @media (max-width: 768px) {
    grid-column: unset;
    grid-row: unset;
    width: 100%;
    height: 200px;
    margin-top: 20px;
  }
`

const Prev2 = styled.a`
    cursor: pointer;
    height: 250px;
    width: 450px;
    border-radius: 50%;
    opacity: 80%;
    grid-column: 1;
    margin-top: 135px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &:hover {
        opacity: 100%;
        filter: brightness(1.2);
    }

    @media (max-width: 768px) {
        display: none;
  }
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #fff;
    object-fit: cover;
`

const ContainerProject = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 15%;

    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
  }
`

const ContainerProject2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 120px;

    @media (max-width: 768px) {
    margin-top: 20px;
  }
`

const Techs = styled.span`
    font-family: 'Mulish', sans-serif;
    font-size: 0.6rem;
    color: #fff;
`

const DivIcon = styled.a`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 40px;
    width: 40px;
    border-radius: 50%;

    &:visited {
    color: inherit;
  }

  &:hover {
    background-color: #00B2FF;
  }
`

const Icons = styled.div`
    padding-top: 20px;
    display: flex;
    gap: 20px;
    grid-column: 1;

    @media (max-width: 768px) {
    justify-content: center;
    grid-column: unset;
    margin-top: 20px;
  }
`

const Icons2 = styled.div`
    padding-top: 20px;
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
    justify-content: center;
  }
`

const DivTechs = styled.div`
    display: flex;
    text-transform: uppercase;
    gap: 10px;
`

const DivTechs2 = styled.div`
    display: flex;
    text-transform: uppercase;
    gap: 10px;
    padding-top: 20px;

    @media (max-width: 768px) {
    justify-content: center;
  }

`

const PrevMobile = styled.div`
    display: none;

    @media (max-width: 768px) {
    display: block;
    }
`

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 65px;
  width: 65px;
  border-radius: 50%;
  background-color: #151531;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s ease;


  svg {
    font-size: 24px;
    fill: #000;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Projects = () => {

    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const scrollThreshold = windowHeight / 2;
    
        setShowScrollToTop(scrollTop > scrollThreshold);
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const scrollToTop = () => {
        scroll.scrollToTop({
          duration: 500,
          smooth: 'easeInOutQuad',
        });
    }
  return (
    <>
    <Container id="projetos">
    <Bar />
    <Title>Projetos em destaque</Title>

    <ContainerProject>
        <ProjectTitle>Coffe Website</ProjectTitle>
            <Desc>
                Landing page de uma cafeteria, desenvolvida com HTML, CSS e algumas funcionalidades de JavaScript para criar um loop que renderiza cards do cardápio com imagens e descrições, além de adicionar um efeito de rolagem suave para as âncoras de navegação. Também adicionei um botão de menu para dispositivos móveis que abre e fecha o menu quando clicado.
            </Desc>
            <DivTechs>
                <Techs>HTML</Techs>
                <Techs>CSS</Techs>
                <Techs>Javascript</Techs>
                <Techs>UI Design</Techs>
            </DivTechs>
            <Prev href="https://coffe-shop-alpha.vercel.app/">
                <Image src="./coffee.jpg" alt="" />
            </Prev>
            <Icons>
                <DivIcon href="https://coffe-shop-alpha.vercel.app/">
                    <BsDisplay style={{fontSize: 24}}/>
                </DivIcon>
                <DivIcon href="https://github.com/WesleyMarques329/coffe-shop">
                    <BsCodeSlash style={{fontSize: 24}}/>
                 </DivIcon>
            </Icons>

            <Prev2 href="https://atlantic-travelling.vercel.app/">
                <Image src="./atlantic.png" alt="" />
            </Prev2>
        <ContainerProject2>
            <ProjectTitle2>Atlantic Travel</ProjectTitle2>
            <PrevMobile href="https://atlantic-travelling.vercel.app/">
                <Image src="./atlantic.png" alt="" />
            </PrevMobile>
            <Desc2>
            O projeto consiste no desenvolvimento de um site de viagens fictício utilizando tecnologias como ReactJS, Styled Components e Hooks. O objetivo é criar uma interface atraente e responsiva para exibir informações sobre destinos turísticos.            </Desc2>
            <DivTechs2>
                <Techs>ReactJS</Techs>
                <Techs>Styled Components</Techs>
                <Techs>Hooks</Techs>
                <Techs>UI Design</Techs>
            </DivTechs2>
            
            <Icons2>
                <DivIcon href="https://atlantic-travelling.vercel.app/">
                    <BsDisplay style={{fontSize: 24}}/>
                </DivIcon>
                <DivIcon href="https://github.com/WesleyMarques329/AtlanticTravelling">
                    <BsCodeSlash style={{fontSize: 24}}/>
                 </DivIcon>
            </Icons2>
            </ContainerProject2>
    </ContainerProject>
    <ScrollToTopButton 
    show={showScrollToTop}
    onClick={scrollToTop}
    >
        <FaArrowUp />
      </ScrollToTopButton>
    </Container>
    </>
  )
}

export default Projects