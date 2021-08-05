import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Todo from '../Todo'


const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputEle = screen.getByPlaceholderText('Add a new task here...')
    const buttonEle = screen.getByRole('button', { name: 'Add'})

    tasks.forEach(task => {
        fireEvent.change(inputEle, { target: { value: task}})
        fireEvent.click(buttonEle)        
    });
}

describe('ToDo tests', () => {
    it('renders the ToDo', () => {
        render(<MockTodo />)
        addTask(['exercise'])

        const divEle = screen.getByText('exercise')
        expect(divEle).toBeInTheDocument()

    })
    
    it('should render 3 things', () => {
        render(<MockTodo />)
        addTask(['exercise', 'go shopping', 'walk dog'])
   
        const listEle = screen.getAllByTestId('listItem')
        expect(listEle.length).toBe(3)
    })
      
    it('shouldn\'t have completed class when rendered', () => {
        render(<MockTodo />)
        addTask(['exercise', 'go shopping', 'walk dog'])
   
        const divEle = screen.getByText('go shopping')
        expect(divEle).not.toHaveClass('todo-item-active')
    })
    
     it('should have completed class when clicked', () => {
        render(<MockTodo />)
        addTask(['exercise', 'go shopping', 'walk dog'])
   
        const divEle = screen.getByText('go shopping')
        fireEvent.click(divEle)
        expect(divEle).toHaveClass('todo-item-active')
    })
    
})
    