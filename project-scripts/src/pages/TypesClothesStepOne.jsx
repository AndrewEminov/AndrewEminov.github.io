import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import Steps from '../components/steps/index';
import { setCurrentGroupCloth, setCloth, setCElement } from "../redux/actions";
import { LinkBtn } from '../components/Btns';

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

function TypesClothesStepOne() {

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
