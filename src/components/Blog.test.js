import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {
	const blog = {
		title: 'Rantakeli',
		author: 'Kalle Rantanen',
		likes: 1,
		user: {
			username: 'testuser'
		}
	}

	const user = {
		username: 'testuser'
	}

	render(<Blog blog={blog} user={user} />)

	const element = screen.getByText('Rantakeli | Kalle Rantanen | likes: 1')
	expect(element).toBeDefined()
})