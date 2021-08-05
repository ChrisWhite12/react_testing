import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput tests", () => {
    it("renders the AddInput", () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
        const AddInputEle = screen.getByPlaceholderText(
            "Add a new task here..."
        );
        expect(AddInputEle).toBeInTheDocument();
    });

    it("should able to type input", async () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

        const AddInputEle = screen.getByPlaceholderText(
            "Add a new task here..."
        );
        fireEvent.change(AddInputEle, { target: { value: "get shopping" } });

        expect(AddInputEle.value).toBe("get shopping");
    });

    it("should empty input after button click", async () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

        const buttonEle = screen.getByRole('button')  
        const AddInputEle = screen.getByPlaceholderText(
            "Add a new task here..."
        );
        
        fireEvent.change(AddInputEle, { target: { value: "get shopping" } });
        fireEvent.click(buttonEle);
        
        expect(AddInputEle.value).toBe("");
    });
});
