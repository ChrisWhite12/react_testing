import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TodoFooter from '../TodoFooter'

const MockTodoFooter = ({tasks}) => {
    return (
    <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={tasks}/>
    </BrowserRouter>
    )
}

describe("todofooter tests", () => {
    it('renders the ToDoFooter', () => {
        render(<MockTodoFooter tasks={5} />)
        const paraEle = screen.getByText('5 tasks left')
        expect(paraEle).toBeInTheDocument()
    })
    
    it('renders the ToDoFooter, one task', () => {
        render(<MockTodoFooter tasks={1} />)
        const paraEle = screen.getByText('1 task left')
        expect(paraEle).toBeInTheDocument()
    })
    
    it('renders the ToDoFooter, visible', () => {
        render(<MockTodoFooter tasks={5} />)
        const paraEle = screen.getByText('5 tasks left')
        expect(paraEle).toBeVisible()
    })
})