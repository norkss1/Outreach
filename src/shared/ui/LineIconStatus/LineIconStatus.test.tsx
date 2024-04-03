import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LineIconStatus } from './LineIconStatus';

// Мок функции mapStatusToAction
jest.mock('src/shared/lib/render/mapStatusToAction', () => ({
    mapStatusToAction: jest.fn().mockReturnValue('Mocked Action Component'),
}));

describe('LineIconStatus component', () => {
    it('should render with default size and action', () => {
        const { getByText } = render(<LineIconStatus action="default" />);
        expect(getByText('Mocked Action Component')).toBeInTheDocument();
    });
});
