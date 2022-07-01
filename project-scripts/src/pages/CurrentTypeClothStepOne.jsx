import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import HeaderText from '../components/HeaderText';
import { LinkBtn } from '../components/Btns';
import { useEffect } from "react";

import { setCurrentGroupCloth, setCloth, setCElement } from "../redux/actions";

function CurrentTypeClothStepOne({ 
    CElement, 
    cloth, 
    setCurrentGroupCloth, 
    currentGoup, 
    step,
    setCloth,
    setCElement,
    title,
    table,
}) {
    const { id } = useParams();

    useEffect(() => {
        setCurrentGroupCloth({
            cloths: table.data[id], 
            CElements: table.dataCElements[id], 
            step: id
        });

        // if complicating elements is only one
        if(table.dataCElements[id] && !table.complicatingElements.length){
            setCElement({key: 0, data: table.dataCElements[id][0]})
        }
    }, []);
    
    const handleChooseCloth = (key, text) => {
        setCloth({key, data: { ...currentGoup.cloths[key], text }})
    }

    const handleChooseComplicateElement = (key, text) => {
        setCElement({key, data: { ...currentGoup.CElements[key], text }})
    }

    return (
        <Wrapper>
            <HeaderText text={title} />

            <Header>{step} группа ткани</Header>

            {table.nameGroup.map((value, index) => (
                <Cloth
                    style={cloth.key === index ? {background: 'rgba(0,0,255,.5)', color: 'white'} : {}} 
                    key={index} 
                    onClick={() => handleChooseCloth(index, value)}
                >
                    {value}
                </Cloth>
            ))}

            {!!(cloth.key !== null && table.complicatingElements.length) && 
            <>
                <Header>Один усложняющий элемент</Header>

                {table.complicatingElements.map((element, index) => (
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
            <WrapperBtns>
                <LinkBtn link={"/types-clothes/step1"} text={'назад'}/>
                <LinkBtn link={"/types-clothes/step2"} text={'далее'}/>
            </WrapperBtns>
        </Wrapper>
    );
  }


const mapStateToProps = (store) => {
    return {
        currentGoup: {
            cloths: store.commonReducer.cloths, 
            CElements: store.commonReducer.CElements,
        },

        CElements: store.commonReducer.CElements,

        step: store.commonReducer.step,
        cloth: store.commonReducer.cloth,
        CElement: store.commonReducer.CElement,
        title: store.commonReducer.title,
        table: store.commonReducer.table,
    }
  }

  const mapDispatchToProps = {
    setCurrentGroupCloth,
    setCloth,
    setCElement,
  }

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTypeClothStepOne);
  

    const WrapperBtns = styled.div`
        display:flex;
        align-items: center;
        justify-content: space-around;
        width: 200px;
        margin: 0 auto;
    `;

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
