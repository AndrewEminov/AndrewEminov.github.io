import styled from 'styled-components/macro';
import HeaderText from '../components/HeaderText';
import TypeClothes from '../components/TypeClothes';
import { connect } from 'react-redux';
import { setTitleTypeClothes, setTableClothes, setInitData } from '../redux/actions'
import { MenAndWomen, Men, Women } from "../constants/tables";

function TypesClothesMain({setTitleTypeClothes, setTableClothes, setInitData}) {
    return (
        <Wrapper>
            <HeaderText text={'Выберите один из типов одежды тип одежды:'} />

            <TypeClothes
                setInitData={setInitData}
                setTable={setTableClothes}
                setTitle={setTitleTypeClothes}
                link={"/types-clothes/step1"}
                text={'Мужская и женская верхняя одежда'}
                table={MenAndWomen}
            />
            <TypeClothes
                setInitData={setInitData}
                setTable={setTableClothes}
                setTitle={setTitleTypeClothes}
                link={"/types-clothes/step1"}
                text={'Женская легкая одежда'}
                table={Women}
            />
            <TypeClothes
                setInitData={setInitData}
                setTable={setTableClothes}
                setTitle={setTitleTypeClothes}
                link={"/types-clothes/step1"}
                text={'Мужская легкая одежда'}
                table={Men}
            />
        </Wrapper>
    );
  }
  
  const mapDispatchToProps = {
    setTitleTypeClothes,
    setTableClothes,
    setInitData,
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
