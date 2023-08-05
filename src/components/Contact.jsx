import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineMail, AiOutlinePhone, AiFillLinkedin } from "react-icons/ai";
import emailjs from '@emailjs/browser'

const Container = styled.div`
    display: flex;
    flex-direction: column;
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
    margin-top: 10%;
    margin-bottom: 10%;
    max-width: 1200px;
    border-top: 1px solid #fff;

`

const Title = styled.h1`
    font-family: 'Mulish', sans-serif;
    font-size: 1.5rem;
    color: #fff;
`

const SubTitle = styled.p`
    font-family: 'Mulish', sans-serif;
    font-size: 0.8rem;
    color: #fff;
    padding-bottom: 2%;
`

const Image = styled.img`
    grid-column: 1;
    grid-row: 3;
    height: 450px;
    width: 450px;
    border: 1px solid snow;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 100px;
    filter: brightness(80%);
`

const Text = styled.div`
    grid-column: 2;
    grid-row: 3;
`

const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const SpanText = styled.p`
    color: snow;
`
const ContainerInputs = styled.div`
    display: flex;
    gap: 10px;
`

const NameInput = styled.input`
    border: 1px solid black;
    border-radius: 5px;
    height: 30px;
    width: 230px;
    `

const Message = styled.textarea`
    margin-top: 2%;
    width: 710px;
    height: 150px;
`

const StyledButton = styled.button`
    margin-top: 2%;
    background-color: #00B2FF;
    width: 710px;
    border-radius: 5px;
`

const ContainerContact = styled.div`
    display: grid;
`

const FormContainer = styled.form``

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || subject === '' || message === ''){
            alert("Preencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: name,
            email: email,
            subject: subject,
            message: message
           
        }

        emailjs.send("service_a6llut5", "template_8xpripa", templateParams, "IzdybPwpXYgynTkCe")
        .then((response) => {
            console.log("Email enviado", response.status, response.text)
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
        }, () => {

        }, (err) => {
            console.log("Erro: ", err)
        })
    }

  return (
    <>

    <Container id="contatos"> 
    <Bar />
    <ContainerContact>
        <Text>
            <Title>Contato</Title>
            <SubTitle>Não seja timido! Me envie uma mensagem!</SubTitle>
            <SocialMedia>
                <AiOutlinePhone style={{ color: 'snow', fontSize: '24'}}/>
                <SpanText>(11) 94601-1417</SpanText>
                <AiOutlineMail style={{ color: 'snow', fontSize: '24'}}/>
                <SpanText>wesleymarqueesz@gmail.com</SpanText>
                <AiFillLinkedin style={{ color: 'snow', fontSize: '24'}}/>
                <SpanText>WesleyMarques329</SpanText>
            </SocialMedia>
            <FormContainer onSubmit={sendEmail}> 
            <ContainerInputs>
           
                <NameInput 
                    placeholder='Nome'
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
                <NameInput 
                    placeholder='Email'
                    type='text'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                <NameInput 
                    placeholder='Assunto'
                    type='text'
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                />

            </ContainerInputs>
            <Message 
                placeholder='Digite sua mensagem...'
                type='text'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            />
            <StyledButton type="submit" value="Enviar">Enviar</StyledButton>
            </FormContainer>
        </Text>
        <Image src='../robot.jpg'/>
    </ContainerContact>
    </Container>
    </>
  )
}

export default Contact