import App from "./App";
import {test, expect} from "vitest";
import TodoTable from "./TodoTable";
import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
test("renders App components", () => {
	render(<App />);
	const header = screen.getByText(/My Todolist/i);
	expect(header).toBeInTheDocument();
});
test("renders todotable", () => { 
	const row = [
		{desc: "Go to coffee", date: "24.01.2023"}
	];
	render(<TodoTable todos={row} />);
	const table = screen.getByRole("table");
	expect(table).toHaveTextContent((/go to coffee/i));
});
test("add todo", () => {
	render(<App />);
	const desc = screen.getByPlaceholderText("Description");
	fireEvent.change(desc, {target: {value:"Go to coffee"}});
	const date =screen.getByPlaceholderText("Date");
	fireEvent.change(date, {target:{value:"29.01.2023"}});
	const button = screen.getByText("Add");
	fireEvent.click(button);
	const table = screen.getByRole("table");
	expect(table).toHaveTextContent((/go to coffee/i));
});

