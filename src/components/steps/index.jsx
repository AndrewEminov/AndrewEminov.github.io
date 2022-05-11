import Step from './Step';
import styled from 'styled-components/macro';
import { Link } from "react-router-dom";

function Steps({styles, titles, handleChooseGroup, link}) {
    return ( // onClick={handleChooseGroup}
        <Wrapper customStyles={styles.steps} linkStyles={styles.link}>
            {titles.map((title, index) => (
                <Step link={link} key={index} title={title} step={index+1} styles={styles}/>
            ))}
        </Wrapper>
    )
}

export default Steps;

const Wrapper = styled.div`
    ${(p) => p.customStyles}
    a{
        ${(p) => p.linkStyles}

        text-decoration: none;
    }
`;