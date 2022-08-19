import styled from "styled-components";
export const Nav = styled.nav`
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 3rem;
    background-color: ${p =>  p.night ? "#4e5340" : "#cdd3c8"};
    transition: all 2s ease;
    color: ${p => p.night ? "white" : "black"} ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    img{
        cursor: pointer;
    }
`
export const H1 = styled.h2`
    font-family: monospace;
`
export const UL = styled.ul`
    display: flex;
    list-style: none;
`
export const LI = styled.li`
    margin: 0 .3rem;
`
export const Img = styled.img`
        display: ${p => p.active ? "none" : "block"};
        width: 22px;
        height: 22px;
        margin-left: .3rem;
        cursor: pointer;
        color: white;
`
export const Ndiv = styled.div`
    position: relative;
    width: 2rem;
    height: .7rem;
    border-radius: .5rem;
    background-color: white;
    cursor: pointer;
`
export const Cir = styled.div`
    position: absolute;
    top: -4px;
    left: ${p => p.night ? "-3px" : ""} ;
    right: ${p => p.night ? "" : "-3px"};
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    background-color: #661013;
`