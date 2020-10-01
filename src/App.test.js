import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

describe('Initial tests', () => {
  it('should contains name', () => {
    const { getByText } = render(<App name="Pranjal Jain" />)
    getByText('Curriculum Vitae (CV)')
  })
})