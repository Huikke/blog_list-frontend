import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import BlogForm from './BlogForm'

test('BlogForm calls event handler createBlog and creates a new blog entry', async () => {
  const mockCreateBlog = jest.fn()
  const user = userEvent.setup()

  render(<BlogForm createBlog={mockCreateBlog} />)

  const inputs = screen.getAllByRole('textbox')
  const sendButton = screen.getByText('create')

  await user.type(inputs[0], 'creating a form has never been easier')
  await user.type(inputs[1], 'Katja Kaakao')
  await user.type(inputs[2], 'reactutorials.com')
  await user.click(sendButton)

  expect(mockCreateBlog.mock.calls).toHaveLength(1)
  expect(mockCreateBlog.mock.calls[0][0].title).toBe('creating a form has never been easier')
  expect(mockCreateBlog.mock.calls[0][0].author).toBe('Katja Kaakao')
  expect(mockCreateBlog.mock.calls[0][0].url).toBe('reactutorials.com')
})