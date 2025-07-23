import { render, screen } from '@testing-library/react';


import App from "./App";


test('버튼의 기능이 잘 동작하고 있습니까?', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: 'change to blue!' });

    expect(button).toHaveStyle({ backgroundColor: 'red' })
});