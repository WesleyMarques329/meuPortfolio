import React, { useState } from 'react'
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';



    const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
    `

    const Logo = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1rem;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
    `

    const MenuItem = styled.div`
    margin-top: 10px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1rem;
    margin-bottom: 15px;
    color: snow;

    a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    span {
      position: relative;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background-color: transparent;
        transition: background-color 0.3s ease;
      }
    }

    &:hover span:after {
        background-color: #00B2FF;
    }
  }
    `


    const Right = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 768px) {
        display: none;
    }
    `

    const MobileButton = styled.button`
    display: none;
    
    @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: #fff;
    outline: none;
    }
    `

    const MobileMenu = styled.div`
    background-color: #0B0B1D;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    position: absolute;
    margin-top: 5px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 3;

    @media (max-width: 768px) {
        display: block;
    }
    `

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

  return (
    <>
    <Container>
    <Logo>Wesley Marques - Desenvolvedor Front-End.</Logo>
    <MobileButton id="btn-mobile" onClick={toggleMobileMenu}>
    {isMobileMenuOpen ? (
        <FaTimes />
        
    ) : (
        <FaBars />
    )}
    </MobileButton>
    <Right>
    <MenuItem>
            <Link to="inicio" smooth={true} duration={1200}>
              <span>Início</span>
            </Link>
          </MenuItem>
          <MenuItem>
          <Link to="projetos" smooth={true} duration={1200}>
              <span>Projetos</span>
            </Link>
          </MenuItem>
          <MenuItem>
          <Link to="contatos" smooth={true} duration={1200}>
              <span>Contato</span>
            </Link>
          </MenuItem>
    </Right>
    </Container>
    {isMobileMenuOpen && (
    <MobileMenu>
        <MenuItem>
            <a href="#inicio">Início</a>
          </MenuItem>
          <MenuItem>
            <a href="#projetos">Projetos</a>
          </MenuItem>
          <MenuItem>
            <a href="#contato">Contato</a>
          </MenuItem>
    </MobileMenu>
    )}
    </>
  )
}

export default Header