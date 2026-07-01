import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('deve renderizar o componente principal da aplicação', () => {
    // Como o App original tem componentes do React (Header, Hero, etc), 
    // renderizamos o App e checamos por algum texto ou elemento estático esperado.
    render(<App />);
    
    // Supondo que o App renderiza a logo ou o Header que contém "Donna Pizza"
    const headingElements = screen.getAllByText(/Donna Pizza/i);
    expect(headingElements.length).toBeGreaterThan(0);
  });
});
