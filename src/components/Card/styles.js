import styled from 'styled-components';

export const Item = styled.div`
    height: 65px;
    border: 1px solid transparent;
    background-color: #161B22;
    border-radius: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 15px 0;
    &:hover{
        background-color: #21262C;
    }
`;

export const Title = styled.div`
    background-color: #21262C;
    border: 1px solid #656868;
    min-width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    font-size: 1.1em;
    margin: 0 20px;
    color: #cecece;
`;

export const Alternative = styled.div`
    color: #cecece;
`;