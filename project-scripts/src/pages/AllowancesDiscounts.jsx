import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import HeaderText from '../components/HeaderText';
import { LinkBtn } from '../components/Btns';
import { useEffect } from "react";

import { setCurrentDataAD } from "../redux/actions";

import { AllowancesAndDiscounts } from "../constants/tables";

function AllowancesDiscounts({ 
    setCurrentDataAD,
    currentDataAD
}) {    
    const handleChooseAllowancesDiscounts = (data) => {
        const isExist = currentDataAD.some((item) => item.id === data.id);

        if(!isExist){
            setCurrentDataAD([...currentDataAD, data]);
        }else{
            setCurrentDataAD(
                currentDataAD.filter((item) => (item.id !== data.id && item))
            )
        }

    }

    return (
        <Wrapper>
            <HeaderText text={'Таблица надбавок и скидок'} />

            <Header>Особенности изготовления швейных изделий</Header>

            {AllowancesAndDiscounts.map((data) => (
                <Cloth
                    style={
                        currentDataAD.some((item) => item.id === data.id) ? 
                            {background: 'rgba(0,0,255,.5)', color: 'white'} : {}
                    }
                    key={data.id} 
                    onClick={() => handleChooseAllowancesDiscounts(data)}
                >
                    {data.title}
                </Cloth>
            ))}

            {/* <WrapperBtns>
                <LinkBtn link={"/types-clothes/step1"} text={'назад'}/>
                <LinkBtn link={"/types-clothes/step2"} text={'далее'}/>
            </WrapperBtns> */}

        </Wrapper>
    );
  }


const mapStateToProps = (store) => {
    return {
        currentDataAD: store.commonReducer.currentDataAD,
    }
  }

  const mapDispatchToProps = {
    setCurrentDataAD   
  }

export default connect(mapStateToProps, mapDispatchToProps)(AllowancesDiscounts);
  

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
