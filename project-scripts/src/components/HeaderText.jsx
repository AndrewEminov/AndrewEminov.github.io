import styled from 'styled-components/macro';

function HeaderText({text}) {
    return (
        <Wrapper>{text}</Wrapper>
    )
}

export default HeaderText;

const Wrapper = styled.h1`
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    margin: 20px 0 40px;
`;
