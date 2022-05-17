import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;  
    height: 100%;
    width: 100%;
    background-color: ${({theme}) => theme.colors.main};
    transition: 0.25s;
    font-size : 1.15vw;

    #About{
        display: flex;  
        height: 65vh;
        width: 100%;
    }

    #Works{
        display: flex;  
        height: 65vh;
        width: 100%;
    }

    #Experience{
        display: flex;  
        height: 65vh;
        width: 100%;
    }

    #SNS{
        display: flex;  
        height: 65vh;
        width: 100%;
    }
`
