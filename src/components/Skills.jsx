import React, { useState } from 'react'
import styled  from 'styled-components'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
`

const Title = styled.h1`
  font-family: 'Mulish', sans-serif;
  font-size: 1rem;
  text-align: left;
  color: #fff;
`

const Techs = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const DivTech = styled.div`
  position: relative;
  cursor: pointer;
`

const Description = styled.p`
  font-family: 'Mulish', sans-serif;
  font-size: 0.6rem;
  color: #fff;

  @media (max-width: 768px) {
    display: none;
  }
`

const TechDescription = styled.p`
  width: 350px;
  position: absolute;
  top: 65%;
  background-color: #13132e;
  color: #fff;
  padding: 5px;
  font-size: 0.8rem;
  opacity:${(props) => (props.isVisible ? '1':'0')};
  visibility:${(props) => (props.isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.3 ease;

  @media (max-width: 768px) {
    width: auto;
  }
`

const Skills = () => {
  const [techDescriptions, setTechDescriptions] = useState({
    html5: false,
    css3: false,
    js: false,
    typescript: false,
    react: false,
    sass: false,
    tailwind: false,
    wordpress: false,
  });

  const handleTechHover = (tech) => {
    setTechDescriptions((prevState) => ({
      ...prevState,
      [tech]: !prevState[tech],
    }))
  };

  return (
    <>
    <Container>
    <Title>Tech Stack</Title>
    <Description>Passe o mouse sobre a Tech</Description>
    <Techs>
      <DivTech
        onMouseEnter={() => handleTechHover('html5')}
        onMouseLeave={() => handleTechHover('html5')}
      >
        <img src="./html5.svg" alt="" />
        <TechDescription isVisible={techDescriptions.html5}>
        o HTML é a linguagem de marcação usada para criar e estruturar o conteúdo das páginas da web, permitindo que os desenvolvedores criem sites estáticos ou interativos, de acordo com suas necessidades.
        </TechDescription>
      </DivTech>
      <DivTech
      onMouseEnter={() => handleTechHover('css3')}
      onMouseLeave={() => handleTechHover('css3')}
    >
      <TechDescription isVisible={techDescriptions.css3}>
      CSS é uma linguagem utilizada para estilizar e formatar documentos HTML, permitindo que os desenvolvedores controlem a aparência e o layout dos elementos de uma página da web, criando designs personalizados e atraentes.
      </TechDescription>
        <img src="./css3.svg" alt="" />
        </DivTech>
      <DivTech 
        onMouseEnter={() => handleTechHover('js')}
        onMouseLeave={() => handleTechHover('js')}
      >
      <TechDescription isVisible={techDescriptions.js}>
      o JavaScript é uma linguagem de programação poderosa que permite adicionar interatividade, comportamento dinâmico e manipulação de elementos em páginas da web. Ele desempenha um papel fundamental na criação de experiências web mais ricas e responsivas.
      </TechDescription>
        <img src="./js.svg" alt="" />
      </DivTech>
      <DivTech 
        onMouseEnter={() => handleTechHover('typescript')}
        onMouseLeave={() => handleTechHover('typescript')}
      >
      <TechDescription isVisible={techDescriptions.typescript}>
      o TypeScript é uma extensão do JavaScript que adiciona recursos de tipagem estática ao código, melhorando a detecção de erros, a legibilidade e a manutenção. Ele é amplamente adotado na comunidade de desenvolvimento devido aos seus benefícios e ao suporte oferecido pela Microsoft e pela comunidade de desenvolvedores.      </TechDescription>
        <img src="./typescript.svg" alt="" />
      </DivTech>
      <DivTech 
      onMouseEnter={() => handleTechHover('react')}
      onMouseLeave={() => handleTechHover('react')}
    >
      <TechDescription isVisible={techDescriptions.react}>
      O React é uma biblioteca JavaScript de código aberto utilizada para construir interfaces de usuário (UI) em aplicações web. Ele foi desenvolvido pelo Facebook e é amplamente adotado pela comunidade de desenvolvimento. <br />
      O React permite criar componentes reutilizáveis e declarativos, o que significa que você pode dividir a interface do usuário em pequenos blocos independentes chamados de componentes. Cada componente encapsula seu próprio estado e lógica, tornando o desenvolvimento mais modular e facilitando a manutenção do código.
      </TechDescription>
        <img src="./react.svg" alt="" />
        </DivTech>
      <DivTech 
        onMouseEnter={() => handleTechHover('sass')}
        onMouseLeave={() => handleTechHover('sass')}
      >
      <TechDescription isVisible={techDescriptions.sass}>
      o Sass é uma linguagem de extensão do CSS que oferece recursos adicionais e uma sintaxe mais poderosa. Ele facilita a escrita de estilos mais eficientes, reutilizáveis e organizados, ajudando a melhorar a produtividade e a manutenção do código CSS em projetos web.
      </TechDescription>
        <img src="./sass.svg" alt="" />
        </DivTech>
      <DivTech 
        onMouseEnter={() => handleTechHover('tailwind')}
        onMouseLeave={() => handleTechHover('tailwind')}
      >
      <TechDescription isVisible={techDescriptions.tailwind}>
      o Tailwind CSS é uma biblioteca de classes utilitárias de CSS que permite criar interfaces de usuário de forma rápida e eficiente. Com uma abordagem baseada em classes, o Tailwind facilita a criação de estilos consistentes e responsivos, acelerando o processo de desenvolvimento e promovendo uma aparência coesa nas interfaces.
      </TechDescription>
        <img src="./tailwind.svg" alt="" />
        </DivTech>
      <DivTech
      onMouseEnter={() => handleTechHover('wordpress')}
      onMouseLeave={() => handleTechHover('wordpress')}
    >
      <TechDescription isVisible={techDescriptions.wordpress}>
      O WordPress é um sistema de gerenciamento de conteúdo (CMS) popular e de código aberto, amplamente utilizado para a criação e manutenção de sites, blogs e lojas online. Ele oferece uma plataforma flexível e fácil de usar, permitindo que pessoas com pouca ou nenhuma experiência em programação possam criar e gerenciar conteúdo na web.
      </TechDescription>
        <img src="./wordpress.svg" alt="" />
        </DivTech>
    </Techs>
    </Container>

    </>
  )
  
}

export default Skills