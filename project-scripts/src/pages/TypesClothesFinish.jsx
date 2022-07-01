
import { useState } from "react";
import HeaderText from '../components/HeaderText';
import { Btn } from '../components/Btns';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const BtnStyles = { padding: '5px 13px', fontSize: '16px'};

function TypesClothesFinish ({ CElement, currentCElements, cloth, currentDataAD }) {
    const [ currency, setCurrency ] = useState(0);
    const [ sum, setSum ] = useState(0);
    const [ error, setError ] = useState(false);

    let sumCElements = currentCElements.reduce((sum, { value }) => sum + value, 0);
    let sumDataAD = currentDataAD.reduce((sum, { discount, value }) => discount ? sum - value : sum + value, 0);

    currentDataAD.map((data) => <li key={data.id}>{data.title}</li> )

    const handleGetResult = () => {
        if(cloth.data.value){
            setError(false);

            const sum = ((CElement.data.value || 0) * sumCElements + cloth.data.value) * currency;
            sumDataAD = sumDataAD/100 * sum;

            setSum(sum + sumDataAD);
        }else{
            setError(true);
        }
        
    }

    const linkAllowancesDiscount = <LinkExtends to={"/types-clothes/allowances-and-discounts"}>Выбрать?</LinkExtends>

    return (
        <Wrapper>
            <HeaderText text={'Финальный подсчет'} />
            <InfoWrapper>
                <span>Кол-во условных единиц: {cloth.data.value}</span>
                <span>Коэффициент сложности: {CElement.data.value || 0}</span>
                <span>Кол-во усложняющий элементов: {sumCElements}</span>

                <div>
                    <span>Кол-во надбавок, скидок: {!currentDataAD.length && linkAllowancesDiscount} </span>
                    <ul>{currentDataAD.map((data) => <li key={data.id}>{data.title}</li>)}</ul>
                </div>

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
        currentDataAD: store.commonReducer.currentDataAD,
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

const LinkExtends = styled(Link)`
    padding-left: 5px;
    font-size: 14px;
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

    @media(max-width: 425px){
        width: 170px;
    }
`;