import { useEffect } from 'react';
import styled from 'styled-components/macro';
import HeaderText from '../components/HeaderText';
import TypeClothes from '../components/TypeClothes';
import { connect } from 'react-redux';
import { setTitleTypeClothes } from '../redux/actions'

function TypesClothesMain({setTitleTypeClothes}) {
    return (
        <Wrapper>
            <HeaderText text={'Выберите один из типов одежды тип одежды:'} />

            <TypeClothes 
                setTitle={setTitleTypeClothes}
                link={"/types-clothes/step1?type=1"}
                text={'Мужская и женская верхняя одежда'}
            />
            <TypeClothes 
                setTitle={setTitleTypeClothes}
                link={"/types-clothes/step1?type=2"}
                text={'Женская легкая одежда'}
            />
            <TypeClothes 
                setTitle={setTitleTypeClothes}
                link={"/types-clothes/step1?type=3"}
                text={'Мужская легкая одежда'}
            />
        </Wrapper>
    );
  }
  
  const mapDispatchToProps = {
    setTitleTypeClothes
  }

  export default connect(null, mapDispatchToProps)(TypesClothesMain);
  

const Wrapper = styled.div`
    //display: flex;
    // align-items: center;
    // justify-content: space-around;
    // @media (max-width: 1024px) { }

    width: 90%;
    margin: 0 auto;
    a{
        width: 90%;
        margin: 0 auto 20px;
    }
`;
