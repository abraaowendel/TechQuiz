import styled from 'styled-components';

export const Container = styled.div`
    background-color: #0D1117;
    min-height: 100vh;
    padding: 0 20px 50px;
    position: relative;
`;

export const Header = styled.div `
    height: 80px;
    display: flex;   
    align-items: center;
    justify-content: center;
`
export const Logo = styled.div `
    font-size: 2em;
    color: #fff;
    font-family: 'Lucida Sans', sans-serif;
`
export const Main = styled.div `
    max-width: 800px;
    margin: auto;
`
export const Answers = styled.div `

`
export const Loading = styled.h1 `
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 150px);
    max-width: 1140px;
    margin: auto;
    color: #fff;
`
export const Title = styled.h1 `
    color: #cecece;
    font-size: 1.4em;
    margin: 30px 0;
    text-align: start;
`