import styled from "styled-components";

export const DrinkCon = styled.div`
    position: relative;
    height: 100vh;
    color: ${p => p.night ? "white" : "black"};
    text-align: center;
    background-color: ${p => p.night ? "" : "#e2eaf0"};
`
export const Img = styled.img`
    filter: blur(10px);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
`

export const Dh1 = styled.h1`
    padding-top: 1rem;
    position: relative;
    text-shadow: 2px 2px 26px gold;
`
export const DrinkCardCon = styled.div`
    color: white;
    display: flex;
    margin: 2rem 4rem;
    flex-wrap: wrap;
    justify-content: space-between ;
    @media(max-width: 800px){
        margin: 1rem;
    }
`