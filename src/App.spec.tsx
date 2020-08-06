import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('TEST', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app')).toBeDefined();
  });
});
