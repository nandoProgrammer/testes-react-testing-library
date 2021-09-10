import styled from 'styled-components'

export const Wrapper = styled.div`

    width: 1200px;
    height: 100vh;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    

    @media(max-width: 800px) {

        width: 100vw;
        height: 100vh;

    }

`
export const Text = styled.h1`

    color: black;
    font-size: 30px;

`

export const WrapperSmall = styled.div`
     
     display: flex;
     flex-direction: column;
     margin: 0 auto;

`