import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './Input';

describe('Input component', () => {
    it('should render input with placeholder', () => {
        const placeholderText = 'Enter your text';
        const { getByPlaceholderText } = render(<Input placeholder={placeholderText} />);
        const inputElement = getByPlaceholderText(placeholderText);
        expect(inputElement).toBeInTheDocument();
    });

    it('should update value on change', () => {
        const onChangeMock = jest.fn();
        const { getByPlaceholderText } = render(<Input placeholder="Enter text" onChange={onChangeMock} />);
        const inputElement = getByPlaceholderText('Enter text');
        const inputValue = 'New value';
        fireEvent.change(inputElement, { target: { value: inputValue } });
        expect(onChangeMock).toHaveBeenCalledWith(inputValue);
    });
});
