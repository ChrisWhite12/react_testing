import { render, screen } from "@testing-library/react";
import Header from '../Header'

//get by
it('renders the header', () => {
    render(<Header title='my header'/>)
    const headerEl = screen.getByText('my header')
    expect(headerEl).toBeInTheDocument()
})

it('renders the header, by role', () => {
    render(<Header title='my header'/>)
    const headerEl = screen.getByRole('heading', {name: 'my header'})
    expect(headerEl).toBeInTheDocument()
})

//find by
it('renders the header, findBy', async () => {
    render(<Header title='my header'/>)
    const headerEl = await screen.findByText('my header')
    expect(headerEl).toBeInTheDocument()
})

//query by
it('renders the header, queryBy', () => {
    render(<Header title='my header'/>)
    const headerEl = screen.queryByText('dogs')
    expect(headerEl).not.toBeInTheDocument()
})

//getall
it('renders the header, by getAllByRole', () => {
    render(<Header title='my header'/>)
    const headerEl = screen.getAllByRole('heading')
    expect(headerEl.length).toBe(2)
})

