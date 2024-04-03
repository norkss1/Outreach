import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button component', () => {
    test('renders with default props', () => {
        render(<Button>Click me</Button>);
        const button = screen.getByTestId('button-component');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Click me');
    });

    test('fires onClick callback when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        const button = screen.getByTestId('button-component');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('applies additional attributes from otherProps', () => {
        render(<Button aria-label="Custom label">Click me</Button>);
        const button = screen.getByTestId('button-component');
        expect(button).toHaveAttribute('aria-label', 'Custom label');
    });
});
