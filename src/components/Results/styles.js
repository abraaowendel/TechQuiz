
import styled from 'styled-components';

export const Main = styled.div `
    max-width: 800px;
    margin: auto;
    position: relative;
`

export const Result = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 150px);
    font-size: 2em;
    color: #cecece;
`
export const Title = styled.h1 `
    color: #cecece;
    font-size: 1.4em;
    margin: 30px 0;
    text-align: start;
    user-select: none;
`

export const Mistakes = styled.div `
    height: 220px;
    width: 220px;
    border: 10px solid ${props => props.mistakes < 10? "#A73229":"#047A5A"};
    color: ${props => props.mistakes < 10? "#A73229":"#047A5A"};
    border-radius: 50%;
    font-size: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BtnRestart = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #CECECE;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: .3s all ease-in;
    border: 0;
    &:hover{
        background-color: #BAB195;
    }
`;
