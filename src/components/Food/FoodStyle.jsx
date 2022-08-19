import styled from "styled-components";
export const MainDiv = styled.div`
    background-color: ${p => p.night ? "#544343" : "#ede6e3"};
    color: ${p => p.night ? "white" : "black"};
    //#ede6e3
    //#C9E4E7
    //#f2dfd7
`
export const FCon = styled.div`
    position: relative;
    padding: 1rem;
    transition: transform 1s ease;
    height: 100vh;
    overflow-x: hidden;
`
export const FoodCon = styled.div`
    transition: transform 1s ease;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    transform: ${p => p.act ? "": "translate(-105%)" } ;
`
export const FoodC = styled.div`
    transition: transform 1s ease;
    position: absolute;
    top: 0;
    display: flex;
    flex-wrap: wrap;
    transform: ${p => p.act ? "translate(100%)": "" } ;
`
export const H1 = styled.h1`
    text-align: center;
    padding-top: 1rem;
    text-shadow: 2px 2px 26px gold;
`

export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Btn = styled.button`
        margin: .4rem;
        padding: .3rem .8rem;
        border: none;
        background-color: #914a0c;
        color: white;
        text-shadow: 1px 1px 5px gold;
        border-radius: .3rem;
        box-shadow: ${p => p.act ? "1px 1px 12px purple" : ""};
        outline: ${p => p.act ? "2px solid white": ""};
        cursor: pointer;
`
export const Btnn = styled.button`
        margin: .4rem;
        padding: .3rem .8rem;
        border: none;
        background-color: #914a0c;
        color: white;
        text-shadow: 1px 1px 5px gold;
        border-radius: .3rem;
        box-shadow: ${p => p.act ? "" : "1px 1px 12px purple"};
        outline: ${p => p.act ? "": "2px solid white"};
        cursor: pointer;
`