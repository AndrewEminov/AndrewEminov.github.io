import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { setCurrentCElements, setFewCElements } from "../redux/actions";
import { useEffect } from "react";
import { LinkBtn } from '../components/Btns';

import { GeneralCElements } from '../constants/tables';

// const dataCElements = {
//     "1": [
//         {
//             id: Math.random(), 
//             value: 2.5, 
//             title: 'Рельефы разрезные или неразрезные, прямые или переходящие в складки – не более двух'
//         },
//         {
//             id: Math.random(), 
//             value: 2.3,
//             title: `Рельефы, или отрезные бочки, или швы в изделии.
//                     два прерывающихся рельефа на одной полочке или другой детали`
//         },
//         {
//             id: Math.random(), 
//             value: 2.2,
//             title: 'Отрезные бочки в изделии'
//         },
//         {
//             id: Math.random(), 
//             value: 1,
//             title: 'Швы в изделии, включая швы клиньев – не более двух '
//         },
//     ],
//     "2": [
//         {
//             id: Math.random(), 
//             title: '11111', 
//             value: 2
//         }, 
//         {
//             id: Math.random(), 
//             title: '222', 
//             value: 1.8
//         }, 
//         {
//             id: Math.random(), 
//             title: '43411', 
//             value: 1.7, 
//         }, 
//         {
//             id: Math.random(), 
//             title: 'tttt', 
//             value: 0.8
//         } 
//     ],
//     "3": [{id: Math.random(), value: 232}, {id: Math.random(), value: 1222}, {id: Math.random(), value: 333, }, {id: Math.random(), value: 111} ],
//     "4": [{id: Math.random(), value: 1.7}, {id: Math.random(), value: 1.5}, {id: Math.random(), value: 1.4, }, {id: Math.random(), value: 0.6} ],
// }


const CurrentTypeClothStepTwo = ({ 
    setCurrentCElements, 
    CElementList,  
    CElementsTitle, 
    currentCElements,
    setFewCElements

}) => {
    // const { state: {title} } = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        console.log( GeneralCElements.CElements, id);
        setFewCElements({
            data: GeneralCElements.CElements[id], 
            //title
        })
    }, [id]);

    const handleChooseCElements = (element) => {
        const isExist = currentCElements.some((item) => item.id === element.id);
       
        if(!isExist){
            setCurrentCElements([...currentCElements, element]);
        }else{
            setCurrentCElements(
                currentCElements.filter((item) => (item.id !== element.id && item))
            )
        }
    }


console.log(CElementsTitle);
return (
    <Wrapper>
        <Header>{CElementsTitle}</Header>
        {CElementList.map((element, index) => (
            <Cloth
                style={
                    currentCElements.some((item) => item.id === element.id) ? 
                        {background: 'rgba(0,0,255,.5)', color: 'white'} : {}
                }
                key={index} 
                onClick={() => handleChooseCElements({...element, CElementsId: id})}
            >
                {element.title}
            </Cloth>
        ))}
        <LinkBtn link={"/types-clothes/step2"} text={'назад'}/>
    </Wrapper>
    )
}


const mapStateToProps = (store) => {
    return {
        CElementList: store.commonReducer.CElementList,
        CElementsTitle: store.commonReducer.CElementsTitle,
        currentCElements: store.commonReducer.currentCElements,
    }
  }

  const mapDispatchToProps = {
    setCurrentCElements,
    setFewCElements
  }

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTypeClothStepTwo);

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

const Header = styled.h1`
font-size: 16px;
font-weight: 600;
margin-bottom 50px;
text-align: center;
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