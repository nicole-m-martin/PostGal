import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostGalContainer from './PostGalContainer';

describe('PostGal Container', () => {
  it('should render PostGal components to screen', () => {
    render(<PostGalContainer />);

    const URLInput = screen.getByPlaceholderText('Enter API url here...');
    userEvent.type(URLInput, 'https://www.breakingbadapi.com/api/');

    const getBtn = screen.getByText('GET');
    userEvent.click(getBtn);

    const submitBtn = screen.getByText('Go!');
    userEvent.click(submitBtn);

    const jsonRes = screen.getByLabelText('main');
    return waitFor(() => {
      expect(jsonRes).not.toBeEmptyDOMElement;
    });
  });
});
