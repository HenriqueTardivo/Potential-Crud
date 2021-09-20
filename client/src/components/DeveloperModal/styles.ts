import styled from "styled-components";

export const Container = styled.form`
    h2 { 
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        font-weight: 400;
        font-size: 1rem;
        &::placeholder{
            color: var(--text-body);
        }
        &+input{
            margin-top: 1rem;
        }    
    }
    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        font-weight: 600;
        &:hover {
            filter: opacity(0.9);
        }
    }
`;
export const RadioGroup = styled.div`
    margin: 1rem 0;
    display: grid;
    height: 4rem;
    grid-template-columns: repeat(3,1fr);
    background: #e7e9ee;
    gap: 0.5rem;   
`;

interface RadioBoxProps {
    isActive: boolean;
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    background: ${(props)=> props.isActive ? '#000000': 'transparent'};
    color: ${(props)=> props.isActive ? '#FFFFFF': '#969CB3'};
    font-weight: 600;
    border-radius: 0.25px;
    width: 100%;
    flex-direction:row;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s;
    &:hover{
        filter: brightness(0.7);
    }    
`;
