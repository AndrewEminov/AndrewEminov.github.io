
import { useState } from "react";
import HeaderText from '../components/HeaderText';
import { Btn } from '../components/Btns';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';

const BtnStyles = { padding: '5px 13px', fontSize: '16px'};

function TypesClothesFinish ({ CElement, currentCElements, cloth }) {
    const [ currency, setCurrency ] = useState(0);
    const [ sum, setSum ] = useState(0);
    const [ error, setError ] = useState(false);

    const handleGetResult = () => {
        if(CElement.data.value && currentCElements.length && cloth.data.value){
            setError(false);
            const sum = (CElement.data.value * currentCElements.length + cloth.data.value) * currency;
            setSum(sum);
        }else{
            setError(true);
        }
        
    }

    return (
        <Wrapper>
            <HeaderText text={'Финальный подсчет'} />
            <InfoWrapper>
                <span>Группа ткани: {cloth.data.value || <Error>не выбрано</Error>}</span>
                <span>Усложняющий элемент: {CElement.data.value || <Error>не выбрано</Error>}</span>
                <span>Кол-во усложняющий элементов: {currentCElements.length}</span>
                <span>
                    Стоимость: 
                    <EnterPrice
                        placeholder="введите цену" 
                        onChange={({target}) => setCurrency(target.value)}
                    />
                </span>
            </InfoWrapper>

            {error &&
                <>
                    <Error>Не хватает входных параметров!</Error>
                    <Error>Пожалуйста проверьте все ли данные были выбраны</Error>
                </>
            }

            <Btn styles={BtnStyles} handleClick={handleGetResult} text={'вычислить'}/>

            {!!sum && 
            <span style={{paddingTop: '20px', display: 'block'}}>
                Всего: <mark style={{fontSize: '18px', fontWeight: '500'}}>{Math.round(sum)}</mark> руб
            </span>}
        </Wrapper>
    )
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

  

export default connect(mapStateToProps)(TypesClothesFinish);

const Error = styled.div`
  color: red;
  font-size: 18px;
  width: 
`;
const Wrapper = styled.div`
    width: 60%;
    margin: 0 auto;

    @media(max-width: 425px){
        width: 85%;

    }

`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  span{
      margin-bottom: 10px;
      &:last-child{
        display: flex;
        align-items: baseline;
      }
  }
`;

const EnterPrice = styled.input`
    border: 2px solid #B9B8CD;
    outline: none;
    font-size: 18px;

    @media(max-width: 320px){
        width: 100%;
    }
`;