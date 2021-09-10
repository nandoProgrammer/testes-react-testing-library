import styled from 'styled-components'

export const NumberRounded = styled.div`

    width: 100px;
    height: 100px; 
    border-radius: 50%;
    margin: 0 auto 10px auto;
    background-image: linear-gradient(to left, #3498db, ${(props) => props.color});
    box-shadow: 2px 2px 10px #cecece;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 800px) {
      
        width: 200px;
        height: 200px; 

    }

`


export const Number = styled.span`

    font-size: 30px;
    font-weight: bold;   
    color: #fff;

`