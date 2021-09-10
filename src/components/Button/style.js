import styled from 'styled-components'

export const ButtonStyle = styled.button`
    
    width: 300px;
    padding: 10px 5px;
    border-radius: 5px;
    background-image: linear-gradient(to left, #3498db, blue);
    border: none;
    margin: 2px 0;
    color: #fff;
    transition: background 0.3s, transform 0.3s;

    &:hover {
        cursor: pointer;
        background-image: linear-gradient(to left, #3498db, red);
    }

    @media(max-width: 800px) {
      
        width: 400px;
        padding: 15px 10px;
        font-size: 25px;
        margin: 10px 0;

    }

`

export const ButtonDisabledStyle = styled(ButtonStyle)`
    opacity: 0.5;
    &:hover{
        cursor: default;
    }
`