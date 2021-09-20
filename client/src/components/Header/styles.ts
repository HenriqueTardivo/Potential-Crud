import styled, { StyledComponent } from 'styled-components'

export const Container = styled.header`
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);    margin: 0 auto;
    padding: 1rem 1rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;    
    color: #FFF;  
    font-size: 1em;    

    img {
        max-width:100px;
        max-height:60px;
        width: auto;
        height: auto;
    }
    button {
        font-size: 1rem;
        color: #FFF;
        background: var(--orange);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: 0.2;
        &:hover {
            filter: brightness(0.7)
        }    
    }
`;