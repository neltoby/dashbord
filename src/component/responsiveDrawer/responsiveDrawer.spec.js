import React from 'react';
import { render, screen } from '../../../test-util';
import '@testing-library/jest-dom/extend-expect';
import ResponsiveDrawer from './';

describe('ResponsiveDrawer', () => {
  test('search placeholder must be present', () => {
    render(<ResponsiveDrawer />);
    const dashboard = screen.getByText(/dashboard/i);
    const companies = screen.getByText(/companies/i);
    const projects = screen.getByText(/projects/i);
    const messages = screen.getByText(/messages/i);
    expect(dashboard).toBeInTheDocument();
    expect(companies).toBeInTheDocument();
    expect(projects).toBeInTheDocument();
    expect(messages).toBeInTheDocument();
  });
});
