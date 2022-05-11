import styled from 'styled-components/macro';
import { Link } from "react-router-dom";

function Step({styles, step, title, link}) {
    return (
        <Link to={`${link}${step}`} state={{title}}>
            <Wrapper styles={styles.currentStep} data-step={step}>{title}</Wrapper>
        </Link>
    )
}

export default Step;


const Wrapper = styled.div`
    cursor: pointer;
    text-align: center;
    background: gainsboro;
    border-radius: 5px;
    padding: 0 10px;
    box-sizing: border-box;
    transition: transform .2s;
    color: black;
    text-decoration: none;

    ${(p) => p.styles}
`;