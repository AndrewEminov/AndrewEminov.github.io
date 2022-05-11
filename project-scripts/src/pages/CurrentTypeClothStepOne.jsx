import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import HeaderText from '../components/HeaderText';
import { LinkBtn } from '../components/Btns';
import { useEffect } from "react";

import { setCurrentGroupCloth, setCloth, setCElement } from "../redux/actions";

const data = {
    "1": [{id: Math.random(), value: 1}, {id: Math.random(), value: 2}, {id: Math.random(), value: 4}, {id: Math.random(), value: 223,}, {id: Math.random(), value: 999,}],
    "2": [{id: Math.random(), value: 2}, {id: Math.random(), value: 1}, {id: Math.random(), value: 31, }, {id: Math.random(), value: 41, }, {id: Math.random(), value: 5988, }],
    "3": [{id: Math.random(), value: 3}, {id: Math.random(), value: 3}, {id: Math.random(), value: 11, }, {id: Math.random(), value: 432, }, {id: Math.random(), value: 56,}],
    "4": [{id: Math.random(), value: 4}, {id: Math.random(), value: 4}, {id: Math.random(), value: 31,}, {id: Math.random(), value: 1114,}, {id: Math.random(), value: 777,}],
};

const dataCElements = {
    "1": [{id: Math.random(), value: 2.5}, {id: Math.random(), value: 2.3}, {id: Math.random(), value: 2.2}, {id: Math.random(), value: 1} ],
    "2": [{id: Math.random(), value: 2}, {id: Math.random(), value: 1.8}, {id: Math.random(), value: 1.7, }, {id: Math.random(), value: 0.8} ],
    "3": [{id: Math.random(), value: 232}, {id: Math.random(), value: 1222}, {id: Math.random(), value: 333, }, {id: Math.random(), value: 111} ],
    "4": [{id: Math.random(), value: 1.7}, {id: Math.random(), value: 1.5}, {id: Math.random(), value: 1.4, }, {id: Math.random(), value: 0.6} ],
}

const nameGroup = [
    'Пальто, полупальто зимние (с подкладкой и утепляющей прокладкой)',
    'Жакет зимний (с подкладкой и утепляющей прокладкой)',
    'Смокинг',
    'Пиджак без подкладки',
    'Фрак, визитка'
]

const complicatingElements = [
    'в плечевых изделиях (кроме комбинезона)',
    'в поясных изделиях (брюках, юбке, полукомбинезоне) и комбинезоне',
]

const titles = [ '1', '2', '3', '4']

function CurrentTypeClothStepOne({ 
    CElement, 
    cloth, 
    setCurrentGroupCloth, 
    currentGoup, 
    step,
    setCloth,
    setCElement,
    title,
}) {

    const { id } = useParams();

    // if complicating elements is only one
    useEffect(() => {
        if( complicatingElements.length < step ){
            setCElement({data: currentGoup.CElements[step-1]});
        }
    }, [step]);


    useEffect(() => {
        setCurrentGroupCloth({
            cloths: data[id], 
            CElements: dataCElements[id], 
            step: id
        });
    }, [id]);
    

    const handleChooseCloth = (key, text) => {
        console.log(key, text, currentGoup);

        setCloth({key, data: { ...currentGoup.cloths[key], text }})
    }

    const handleChooseComplicateElement = (key, text) => {
        setCElement({key, data: { ...currentGoup.CElements[key], text }})
    }

    return (
        <Wrapper>
            <HeaderText text={title} />

            <Header>{step} группа ткани</Header>

            {nameGroup.map((value, index) => (
                <Cloth
                    style={cloth.key === index ? {background: 'rgba(0,0,255,.5)', color: 'white'} : {}} 
                    key={index} 
                    onClick={() => handleChooseCloth(index, value)}
                >
                    {value}
                </Cloth>
            ))}

            {cloth.key !== null && complicatingElements.length > step && 
            <>
                <Header>Один усложняющий элемент</Header>

                {complicatingElements.map((element, index) => (
                    <ComplicatingElement
                        style={CElement.key === index ? 
                            {background: 'rgba(0,0,255,.5)', color: 'white'} : {}} 
                        key={index} 
                        onClick={() => handleChooseComplicateElement(index, element)}
                    >
                        {element}
                    </ComplicatingElement>
                ))}
            </>
            }
            <LinkBtn link={"/types-clothes/step1"} text={'назад'}/>
        </Wrapper>
    );
  }


const mapStateToProps = (store) => {
    return {
        currentGoup: {
            cloths: store.commonReducer.cloths, 
            CElements: store.commonReducer.CElements,
        },
        step: store.commonReducer.step,
        cloth: store.commonReducer.cloth,
        CElement: store.commonReducer.CElement,
        title: store.commonReducer.title,
    }
  }

  const mapDispatchToProps = {
    setCurrentGroupCloth,
    setCloth,
    setCElement,
  }

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTypeClothStepOne);
  

  const ComplicatingElement = styled.div`
    font-size: 16px;
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: gainsboro;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0px;
    cursor: pointer;


    // @media (max-width: 1024px) { }
    // font-size: 17px;
  `;

  const Cloth = styled.div`
    line-height: 1.5;
    font-size: 17px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: gainsboro;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0px;
    cursor: pointer;

    // @media (max-width: 1024px) { }
    // font-size: 20px;

  `;

  const Header = styled.h1`
    font-size: 16px;
    font-weight: 600;
    margin-bottom 30px;
    text-align: center;
  `;

  const Wrapper = styled.div`
    //display: flex;
    // align-items: center;
    // justify-content: space-around;
    // @media (max-width: 1024px) { }

    width: 90%;
    margin: 50px auto;
    // a{
    //     width: 90%;
    //     margin: 0 auto 20px;
    // }
`;
