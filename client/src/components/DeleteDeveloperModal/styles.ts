import styled from "styled-components";

export const Container = styled.div`
    h2 { 
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
`;
export const ControlButtons = styled.div`
    margin: 1rem 0;
    display: grid;
    height: 4rem;
    grid-template-columns: 1fr 1fr;
    background: #e7e9ee;
    gap: 0.5rem;   

    button{
        height: 4rem;
        border: 1px solid #d7d7d7;
        font-weight: 600;
        align-items: center;
        flex-direction:row;
        justify-content: center;
        transition: border-color 0.2s;
        &:hover{
            background: #000000;
            color: #FFFFFF;    
        }    
    }
`;