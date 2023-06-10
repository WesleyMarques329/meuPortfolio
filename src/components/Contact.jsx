import React from 'react'
import styled from 'styled-components'
import { AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 120px;
    padding-bottom: 10%;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

const Bar = styled.div`
    border-top: 1px solid #fff;
`

const Title = styled.h1`
    font-family: 'Mulish', sans-serif;
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
`

const SubTitle = styled.p`
    font-family: 'Mulish', sans-serif;
    font-size: 0.7rem;
    color: #fff;
    text-align: center;
    padding-bottom: 5%;
`

const CardContact = styled.div`
    height: 200px;
    width: 350px;
    background-color: #a7a6a6;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    @media (max-width: 768px) {
        height: 150px;
        width: 250px;
    }
`

const ContainerCard = styled.div`
    display: flex;
    gap: 40px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const CardTitle = styled.h1`
    font-family: 'Mulish', sans-serif;
    font-size: 1.5rem;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 768px) {
       font-size: 1rem;
    }
`

const Desc = styled.p`
    font-family: 'Mulish', sans-serif;
    text-align: center;
    font-size: 1rem;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`

const Icon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 42px;
    margin-top: 20px;
`

const Link = styled.a`
    margin-top: 15px;
    font-size: 1rem;
    text-decoration: none;
    color: black;

    &:hover {
        color: blue;
    }
`

const Contact = () => {
  return (
    <>
    <Container id="contatos"> 
        <Bar />
        <Title>Contato</Title>
        <SubTitle>Não seja timido! Me envie uma mensagem!</SubTitle>
        <ContainerCard>
            <CardContact>
            <Icon><AiOutlineMail /></Icon>
                <CardTitle>
                    E-mail
                </CardTitle>
                    <Desc>
                    wesleymarquees329@gmail.com
                    </Desc>
            </CardContact>
            <CardContact>
            <Icon><AiOutlinePhone /></Icon>
                <CardTitle>
                    Número de contato
                </CardTitle>
                    <Desc>
                    11 946011417
                    </Desc>
            </CardContact>
            <CardContact>
            <Icon><AiOutlineWhatsApp/></Icon>
                <CardTitle>
                    WhatsApp
                    <Link href="https://api.whatsapp.com/send?phone=5511946011417&text=Ol%C3%A1%20Wesley%20venho%20do%20seu%20site!">Clique aqui!</Link>
                </CardTitle>
            </CardContact>
        </ContainerCard>
    </Container>
    </>
  )
}

export default Contact