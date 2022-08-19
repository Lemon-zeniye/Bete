import styled from "styled-components";
import img from "../../images/ll.jpg";
export const MainC = styled.div`
    position: relative;
    
`
export const Container = styled.div`
    background-image: url(${img});
    opacity: 1;
    height: 100vh;
    background-position: center;
    background-repeat:no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    color: ${p => p.night ? "black" : "white"};
    h1{
        text-decoration: underline;
        text-shadow: 1px 1px 5px gold;
    };
    p{
        font-size: 1.1rem;
        letter-spacing: .1rem;
        text-align: center;
        text-shadow: 1px 1px 5px gold;
    };
    @media(max-width: 800px){
        h1{
            font-size: 2rem;
            text-decoration: underline;
        };
        p{
            font-size: 1.2rem;
        };
    };
`

export const A = styled.a`
    text-decoration: none;
`