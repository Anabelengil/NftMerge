// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NftMerge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NftMerge/i);
    expect(titleElement).toBeInTheDocument();
});
