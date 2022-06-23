import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from 'styled-components/macro';
import NavBar from './NavBar';
import { Btn } from '../components/Btns';

const Header = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [navBarIsOpen, setNavBarIsOpen] = useState(false);
    const BtnStyles = { padding: '5px 13px', fontSize: '15px', marginRight: '10px'};

    useEffect(() => {
      window.addEventListener("beforeunload", navigate("/"));
      return () => {
        window.removeEventListener("beforeunload", navigate("/"));
      };
    }, []);

    return (
        <Wrapper menuIsOpen={open}>
            <section className="top-nav">
                <div className={'logo'}>
                    <LinkExtends to={"/"}>ShopLiv</LinkExtends>
                </div>

                <MenuWrapper>
                  <NavBar
                    navBarIsOpen={navBarIsOpen}
                    setNavBarIsOpen={setNavBarIsOpen}
                  />
                  
                  {!navBarIsOpen && 
                    <Btn styles={BtnStyles} handleClick={() => setNavBarIsOpen(!navBarIsOpen)} text={'состав'}/>
                  }

                  <input onClick={() => setOpen(!open)} id="menu-toggle" type="checkbox" />
                  <label className='menu-button-container' for="menu-toggle">
                      <div className='menu-button'></div>
                  </label>                  
                  <Menu className="menu" onClick={() => setOpen(false)} >
                      <LinkExtends to={"/"}>главная</LinkExtends>
                      <LinkExtends to={"/types-clothes/step1"}>группы ткани</LinkExtends>
                      <LinkExtends to={"/types-clothes/step2"}>усложняющих элементы</LinkExtends>
                      <LinkExtends to={"/types-clothes/finish"}>финальный подсчет</LinkExtends>                    
                  </Menu>
                </MenuWrapper>
            </section>
        </Wrapper>
    )
}

export default Header;


const MenuWrapper = styled.div`
  display: flex;
  align-items: center;

  @media(min-width: 700px){
    flex-direction: row-reverse;

    button{
      margin-right: 0px;
    }
  }
`;
const Menu = styled.div`
//   width: 65%;
//   display: flex;
//   justify-content: space-around;


`;

const LinkExtends = styled(Link)`
    color: black;

    &:hover{
        color: black;
    }
`;

const Wrapper = styled.div`
  
  h2 {
    vertical-align: center;
    text-align: center;
  }
  

  * {
    box-sizing: border-box;
  }
  
  .top-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #00BAF0;
    background: linear-gradient(to left, #f46b45, #eea849);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    // color: #FFF;
    height: 50px;
    padding: 1em;
  }
  
  .menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .menu > a {
    margin: 0 1rem;

    @media(min-width: 700px){
      font-size: 14px;
      margin: 0 12px;
    }
  }
  
  .menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  #menu-toggle {
    display: none;
  }
  
  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }
  
  .menu-button::before {
    content: '';
    margin-top: -8px;
  }
  
  .menu-button::after {
    content: '';
    margin-top: 8px;
  }

.menu-button-container .menu-button::before {
    ${(p) => p.menuIsOpen && `
        margin-top: 0px;
        transform: rotate(405deg);
    `}
}
  
.menu-button-container .menu-button {
    ${(p) => p.menuIsOpen && `
        background: rgba(255, 255, 255, 0);
    `}
}
  
.menu-button-container .menu-button::after {
    ${(p) => p.menuIsOpen && `
        margin-top: 0px;
        transform: rotate(-405deg);
    `}
}
    
  @media (max-width: 700px) {
    .menu-button-container {
      display: flex;
    }
    .menu {
      position: absolute;
      top: 0;
      margin-top: 50px;
      left: 0;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    #menu-toggle ~ .menu a {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    #menu-toggle ~ .menu a {
    ${(p) => p.menuIsOpen && `
      border: 1px solid #333;
      height: 2.5em;
      padding: 0.5em;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);  
    `}
      
    }
    .menu > a {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: white;
      background-color: #222;
    }
    .menu > a:not(:last-child) {
      border-bottom: 1px solid #444;
    }
  }
` 