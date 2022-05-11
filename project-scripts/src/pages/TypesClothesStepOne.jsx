import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import HeaderText from '../components/HeaderText';
import Steps from '../components/steps/index';

import { useEffect, useState } from "react";

import { setCurrentGroupCloth, setCloth, setCElement } from "../redux/actions";
import { LinkBtn } from '../components/Btns';

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

const currentStepStyles = `
    font-size: 22px;
    font-weight: 600;
    display: flex;
    height: 80px;
    width: 80px;
    align-items: center;
    justify-content: center;

    &:hover{
        transform: scale(1.1);
        box-shadow: 5px 5px 4px 1px rgba(0, 0, 255, .2);
        color: rgba(0, 0, 255, .5);
    }
`;

const stepsStyles = `
    width: 100%; 
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-around;
`;

function TypesClothesStepOne({ 
    CElement, 
    cloth, 
    setCurrentGroupCloth, 
    currentGoup, 
    step,
    setCloth,
    setCElement,
}) {

    // if complicating elements is only one
    useEffect(() => {
        if( complicatingElements.length < step ){
            setCElement({data: currentGoup.CElements[step-1]});
        }
    }, [step]);

    const handleChooseGroup = (event) => {
        const currentStep = event.target.getAttribute('data-step');

        if(currentStep) {
            setCurrentGroupCloth({
                cloths: data[currentStep], 
                CElements: dataCElements[currentStep], 
                step: currentStep
            });
        };
    }

    const handleChooseCloth = (key, text) => {
        setCloth({key, data: { ...currentGoup.cloths[key], text }})
    }

    const handleChooseComplicateElement = (key, text) => {
        setCElement({key, data: { ...currentGoup.CElements[key], text }})
    }

    return (
        <Wrapper>
            {/* <HeaderText text={text} /> */}

            <Header>Выберите группу ткани</Header>
            <Steps
                styles={{steps: stepsStyles, currentStep: currentStepStyles}}
                titles={titles} 
                link={'/types-clothes/step1/'}
            />
            <LinkBtn link={"/types-clothes/step2"} text={'далее'}/>
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
    }
  }

  const mapDispatchToProps = {
    setCurrentGroupCloth,
    setCloth,
    setCElement,
  }

export default connect(mapStateToProps, mapDispatchToProps)(TypesClothesStepOne);

  const Header = styled.h1`
    font-size: 16px;
    font-weight: 600;
    margin-bottom 50px;
    text-align: center;
  `;
//   const Wrapper = styled.div`
//     width: 60%;
//     margin: 0 auto;
//   `;


  const Wrapper = styled.div`
    //display: flex;
    // align-items: center;
    // justify-content: space-around;
    // @media (max-width: 1024px) { }

    width: 90%;
    margin: 50px auto;
    a{
        margin: 0 20px 20px;
    }
`;
