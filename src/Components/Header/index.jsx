import { Link } from "react-router-dom";
const Header = ({ incomplete }) => {
    return (
        <header data- testid="todo-header" >
            <h1 data-testid="todo-h1">
               { incomplete? `To Do List: ${incomplete.length} items pending`: 'Todo List'}
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/settings'>Settings</Link>
                    </li>
                    <li>
                        <Link to='/'>ToDo List</Link>
                    </li>
                </ul>
            </nav>
        </header >
    )
}

export default Header;