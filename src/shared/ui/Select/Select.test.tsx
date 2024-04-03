import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Select, SelectOption } from './Select';

describe('Select component', () => {
    const options: SelectOption[] = [
        { value: '1', content: 'Option 1' },
        { value: '2', content: 'Option 2' },
        { value: '3', content: 'Option 3' },
    ];

    test('opens a list of options by clicking on the button', () => {
        const { getByTestId, getByText } = render(<Select options={options} />);

        const selectBtn = getByTestId('select-btn');
        fireEvent.click(selectBtn);

        expect(getByText('Option 1')).toBeInTheDocument();
        expect(getByText('Option 2')).toBeInTheDocument();
        expect(getByText('Option 3')).toBeInTheDocument();
    });
});
