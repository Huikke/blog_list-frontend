import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

const blog = {
	title: 'React testing is something else',
	author: 'Pate',
	likes: 1,
	user: {
		username: 'testuser'
	}
}

const user = {
	username: 'testuser'
}

const mockAddLike = jest.fn()

test('renders content', () => {
	render(<Blog blog={blog} user={user} />)

	const element = screen.getByText('React testing is something else | Pate | likes: 1')
	expect(element).toBeDefined()
})

test('click the like button twice calls event handler twice', async() => {
	render(<Blog blog={blog} user={user} addLike={mockAddLike} />)

	const clicker = userEvent.setup()
	const button = screen.getByText('like')
	await clicker.click(button)
	await clicker.click(button)

	expect(mockAddLike.mock.calls).toHaveLength(2)
})