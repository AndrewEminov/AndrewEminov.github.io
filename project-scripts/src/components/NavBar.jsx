
import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { setTitleTypeClothes } from '../redux/actions'
import { Btn } from '../components/Btns';

const BtnStyles = { padding: '5px 13px', fontSize: '15px'};

const NavBar = ({title, step, cloth, CElement, currentCElements, navBarIsOpen, setNavBarIsOpen}) => {
    const NavBarIsNotEmpty = cloth.key !== null || CElement.key !== null || currentCElements.length;
    
    return (
        <Wrapper navBarIsOpen={navBarIsOpen}>
            {!!navBarIsOpen && 
            <List>
                <Btn styles={BtnStyles} handleClick={() => setNavBarIsOpen(!navBarIsOpen)} text={'состав'}/>

                {NavBarIsNotEmpty ? 
                    <>
                    <h1>{title}</h1>
                    <TypesClothesWrap>
                    {cloth.data.text && 
                    <>
                        <LinkExtends onClick={() => setNavBarIsOpen(false)} to={`/types-clothes/step1/${step}`}>Группа ткани: {step}</LinkExtends>
                        <ul>
                            <li>
                                {cloth.data.text}
                            </li>
                            {CElement.data.text && 
                            <li>
                                {CElement.data.text}
                            </li>}
                        </ul>
                    </>
                    }
                    </TypesClothesWrap>

                    {!!currentCElements.length && 
                    <>
                        <h1>Перечень усложняющих элементов</h1>
                        <CElementsWrap>
                            {currentCElements.map((element) => 
                                <li>
                                    <LinkExtends onClick={() => setNavBarIsOpen(false)} to={`/types-clothes/step2/${element.CElementsId}`}>
                                        {element.title}
                                    </LinkExtends>
                                </li>
                            )}
                        </CElementsWrap>
                    </>
                    }
                    </>
                    : 
                        <div>
                            <h1>Ничего не выбрано</h1>
                        </div>
                    }
            </List>
            }
        </Wrapper>
    );
}


const mapStateToProps = (store) => {
    return {
        title: store.commonReducer.title,
        step: store.commonReducer.step,
        cloth: store.commonReducer.cloth,
        CElement: store.commonReducer.CElement,  
        currentCElements: store.commonReducer.currentCElements,
        CElementList: store.commonReducer.CElementList,
    }
  }

  const mapDispatchToProps = {
    setTitleTypeClothes,
  }

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);


const Wrapper = styled.div`

    button{
        z-index: 999;
        position: relative;
        font-size: 18px;
        cursor: pointer;
        margin-right: 20px;

        ${(p) => p.navBarIsOpen && `
            position: absolute;
            left: 80%;  
            top: 3%;
        `}

        @media(min-width: 425px){}

        @media(min-width: 700px){
            padding: 5px 10px;
            font-size: 14px;
            margin-right: 0px;
        }
    }
`;

const List = styled.div`
    position: fixed;
    z-index: 110;
    top: 0px;
    right: 0px;
    bottom: 0px;
    background: rgb(255, 255, 255);
    width: 100%;
    overflow-y: auto;
    display: block;
    border-left: 1px solid rgb(204, 204, 204);
    max-width: 450px;
    box-sizing: border-box;
    padding: 0 20px;

    h1{
        font-size: 20px;
        margin-top: 90px;
    }

    li{
        margin-bottom: 15px;
        line-height: 1.5;
    }
`;

const LinkExtends = styled(Link)`
    color: black;

    &:hover{
        color: blue;
    }
`;

const TypesClothesWrap = styled.div`
    button:hover::after{
        content: attr(data-title); 
        position: absolute; /* Абсолютное позиционирование */
        left: 20%; top: 30%; /* Положение подсказки */
        z-index: 1; /* Отображаем подсказку поверх других элементов */
        background: rgba(255,255,230,0.9); /* Полупрозрачный цвет фона */
        font-family: Arial, sans-serif; /* Гарнитура шрифта */
        font-size: 11px; /* Размер текста подсказки */
        padding: 5px 10px; /* Поля */
        border: 1px solid #333; /* Параметры рамки */
    }
`;

const CElementsWrap = styled.ul`

`;