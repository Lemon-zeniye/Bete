import styled from "styled-components";
import Table from "../../images/wood.jpeg";
export const Container = styled.div`
    width: 20rem;
    height: 11rem;
    margin: 2rem;
    box-shadow: 1px 1px 5px #603f21;
    background-image: url(${Table});
    background-position: center;
    background-repeat:no-repeat;
    background-size: cover;
    position: relative;
    border-radius: .4rem;
    @media(max-width: 800px){
        width: 46%;
        margin:.6rem 0;

    }
`
export const CardTitle = styled.div`
    position: relative;
    height:2.7rem;
    width: 20rem;
    border: 1px solid black;
    background-image: url(${Table});
    box-shadow: 1px 1px 6px 5px black;
    color: black;
    font-weight: bold;
    font-size: 1.1rem;
    filter: blur(3px);
    border-radius: .5rem;
    @media(max-width: 800px){
        width: 100%;
    }
`
export const CardText= styled.div`
    position: absolute;
    bottom: 4px;
    text-align: left;
    text-shadow: 1px 1px 5px gold;
    margin-left: .8rem;
    /* display: flex; */
`
export const CImg = styled.img`
    width: 20rem;
    height: 8rem;
    object-fit: contain;
    @media(max-width: 800px){
        width: 100%;
    }
`