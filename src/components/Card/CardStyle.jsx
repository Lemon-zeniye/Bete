import styled from "styled-components";
export const CardContainer = styled.div`
    width: 30%;
    margin: 1rem auto;
    box-shadow: 2px 2px 15px black;
    color: white;
    border-radius: .4rem;
    @media(max-width: 800px){
        width: 90%;
    }
    /* border-bottom: 1px solid lightgray; */
`
export const ImgCon = styled.div`
    width: 100%;
    height: 12rem;
    margin-bottom: .4rem;
    box-shadow: 1px 1px 5px  black;
    border-radius: .4rem;
    @media(max-width: 800px){
        height: 10rem;
    }
`
export const TitleCon = styled.div`
    padding:.1rem 0 .5rem .5rem;
    text-shadow: 1px 1px 5px black;
   
    
`
export const Img = styled.img`
    width: 100%;
    height: 12rem;
    background-color: lightgray;
    object-fit: cover;
    border-radius: .4rem .4rem 0 0;
    @media(max-width: 800px){
        height: 10rem;
    }
`
export const Title = styled.h3`
    font-weight: bold;
`