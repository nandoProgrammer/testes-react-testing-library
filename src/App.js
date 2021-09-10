import React, { useState } from 'react';
import { Wrapper, WrapperSmall, Text } from './styles';

import Counter from './components/Counter'
import Button from './components/Button';
import ButtonDisabled from './components/Button/Disabled';

const App = () => {
  
  const [text, setText] = useState('Clique no botão Incrementar');
  const [value, setValue] = useState(0);
  const [color, setColor] = useState('blue');

  const incrementValue = () => {
      setValue(value + 1);
      setText('Clique em um botão');

      if(value >= 10){
        setColor('red');
      }

  }

  const resetValue = () => {
    setValue(0);
    setColor('blue');
    setText('Clique no botão Incrementar');
  }


  return (
    <Wrapper>

      <Text>{text}</Text>
      <Counter value={value} color={color} />
      
      <WrapperSmall>
          <Button onClick={() => incrementValue()}>Incrementar</Button>
           { 
              value === 0 ? (
                <ButtonDisabled>Resetar</ButtonDisabled> 
              ) : (
                <Button onClick={() => resetValue()}>Resetar</Button>
              )
           }
          
      </WrapperSmall>

    </Wrapper>
  );
}

export default App;
