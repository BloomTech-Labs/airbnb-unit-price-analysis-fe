import React, { useState } from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { connect } from 'react-redux';
import { useAuth0 } from '../../../react-auth0-wrapper';;

import { SearchBar } from '../SearchBar';

afterEach(cleanup);

describe('<SearchBar />', () => {
    it('renders without any errors', () => {
        render(connect(<SearchBar />));
    });

    it('populates the search input with a test URL', () => {
        const { user } = useAuth0();

        const { getByTestId } = render(<SearchBar />);
        const plusIcon = getByTestId('plus-icon');

        fireEvent.click(plusIcon);

        expect()
    });
})