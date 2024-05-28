import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '@/app/page';

describe('Home', () => {
    it('renders an empty basket', () => {
        render(<Home />);

        const basketButton = screen.getByRole('button', {
            name: /Basket:/i,
        });

        expect(basketButton).toHaveTextContent('Basket: 0 items');
    });

    it('renders a basket with 1 item', async () => {
        render(<Home />);
        const user = userEvent.setup();

        const buttonOfItem1 = screen.getByRole('button', {
            name: /Add Item 1 to basket/i,
        });

        await user.click(buttonOfItem1);

        const basketButton = screen.getByRole('button', {
            name: /Basket:/i,
        });

        expect(basketButton).toHaveTextContent('Basket: 1 item');
    });

    it('renders a basket with 1 of item 1 and 2 of item 2', async () => {
        render(<Home />);
        const user = userEvent.setup();

        const buttonOfItem1 = screen.getByRole('button', {
            name: /Add Item 1 to basket/i,
        });

        const buttonOfItem2 = screen.getByRole('button', {
            name: /Add Item 2 to basket/i,
        });

        await user.click(buttonOfItem1);
        await user.click(buttonOfItem2);
        await user.click(buttonOfItem2);

        const basketButton = screen.getByRole('button', {
            name: /Basket:/i,
        });

        expect(basketButton).toHaveTextContent(/Basket: 3 items$/);
    });
});
