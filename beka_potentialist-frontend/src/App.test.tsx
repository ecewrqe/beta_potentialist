import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders App', () => {
    render(
        <App />
    );
    const heading = screen.getAllByText(/Create User/);
    expect(heading[0]).toBeInTheDocument();
    expect(heading[1]).toBeInTheDocument();
})
