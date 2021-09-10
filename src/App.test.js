import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('soma 1 + 1', () => {
  const sum = () => {
      return 1 + 1;
  } 
  expect(sum()).toBe(2);
});


describe('Testes no App', () => {

  test('Clique no botão Incrementar', () => {
    render(<App />);
    const textIncrement = screen.getByText(/Clique no botão Incrementar/i);
    expect(textIncrement).toBeInTheDocument();
  });

  test('O valor inicial a ser incrementado deverá iniciar com valor zero', () => {
      render(<App />);
      const value = screen.getByText('0');
      expect(value).toBeInTheDocument();
  });

  test('Não deve existir o texto Clique em um botão', () => {
    render(<App />);
    expect(screen.queryByText('Clique em um botão')).toBeNull();
  });

  test('Deve conter o texto Clique em um botão após incrementar mais um no valor', () => {
      render(<App />);
      const buttonIncrement =  screen.getByRole('button', { 
        name:/Incrementar/i 
      });
      userEvent.click(buttonIncrement);
      expect(screen.getByText('Clique em um botão'));
  });

  test('Busca botão de incrementar', () => {
      render(<App />);
      const buttonIncrement = screen.getByRole('button', { 
        name:/Incrementar/i 
      });
      expect(buttonIncrement).toBeInTheDocument();
  });

  test('Incrementar +1 no valor ao clicar no botão de incrementar', () => {
      render(<App />);
      const buttonIncrement =  screen.getByRole('button', { 
        name:/Incrementar/i 
      });
      userEvent.click(buttonIncrement);
      expect(screen.getByText('1'));
  });



});
