import React from 'react'
import { render, screen } from '../responsiveDrawer/node_modules/test-util'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import Header from './'

describe('Header', () => {
    test('search placeholder must be present', () => {
        render(<Header />)
        const element = screen.getByPlaceholderText('Search')
        expect(element).toBeInTheDocument()
    })
})