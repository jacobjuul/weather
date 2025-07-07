import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { App } from './App';

describe('App', () => {
    it('Renders Component According To Snapshot', () => {
        const { container } = render(<App />);

        expect(container).toMatchSnapshot();
    });

    it('Checks Input Functionality', async () => {
        const user = userEvent.setup();
        render(<App />);

        const searchInput = screen.getByRole('search');
        await user.type(searchInput, 'Copenhagen');
        expect(searchInput).toHaveValue('Copenhagen');
    });
});
