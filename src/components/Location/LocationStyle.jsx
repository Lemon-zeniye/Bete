import styled from "styled-components";
export const LocContainer = styled.div`
    width: 100%;
    padding: 1rem;
    background-color:  ${p => p.night ? "#626d58" : "#d3d5d7"};
    color: white;
    text-shadow: 1px 1px 4px gold;
    @media(max-width: 800px){
        font-size: .8rem;
    }
`
export const LocH1 = styled.h1`
    text-align: center;
`
export const InfoCon = styled.div`
    display: flex;
    @media(max-width: 800px){
        flex-direction: column;
    }
`
export const Info = styled.div`
    height: 40vh;
    align-items: center;
    justify-content: space-between;
    box-shadow: 1px 1px 5px black;
    margin: 1rem;
    display: flex;
    flex: 1;
    @media(max-width: 800px){
        margin: .5rem;
    }
`
export const InCon = styled.div`
    margin: 0 1rem;
    width: 10rem;
    height: 10rem;
    border-radius: .4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 5px black;
    p{
        text-align: center;
    }
    @media(max-width: 800px){
        width: 6rem;
        height: 6rem;
        margin: 0 .4rem;
    }
`
export const Icon = styled.img`
    width: 4rem;
    height: 4rem;
    @media(max-width: 800px){
        width: 2rem;
        height: 2rem;
    }
`
export const Imgmap = styled.img`
    flex: 1;
    margin: 1rem;
    width: 40%;
    height: 40vh;
    object-fit: cover;
    @media(max-width: 800px){
        margin: .5rem;
        width: 95%;
        height: 20vh;
    }
`
export const Footer = styled.div`
    width:100%;
    height: 4rem;
    background-color: ${p => p.night ? "#56282d" : "#b2b2b2"};
    display: flex;
    align-items: center;
    justify-content: center;
`
export const FImg = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin: .5rem;
    cursor: pointer;
    :hover{
        box-shadow: 1px 1px 5px gold;
    }
`