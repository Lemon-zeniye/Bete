import styled from "styled-components";
import img1 from "./images/kkk.jpg";

export const BigDiv = styled.div`
    position: relative;
`
export const SideB = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    background-image:url(${img1});
    background-position: center;
    background-repeat:no-repeat;
    background-size: cover;
    transform: translate(${p => p.active ? "0" : "-100%"});
    transition: transform .6s ease;
    z-index: 10;
    top: 0;
    color: white;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    ul{
        list-style: none;
        margin-left:5rem;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font-size: 1.3rem;
        font-weight: bold;
    }
    li{
        cursor: pointer;
    }
    li:hover{
        font-size: 1.3rem;
        font-weight: bold;
    }
`
export const SmallDiv = styled.div`
    position: relative;
`
export const A = styled.a`
    text-decoration: none;
    color: inherit;
    cursor: pointer;
`