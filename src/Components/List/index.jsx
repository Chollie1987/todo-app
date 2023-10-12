// TodoList.js
import React from 'react';
import { useSettings } from './SettingsContext';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const TodoList = ({ list, toggleComplete }) => {
    const { settings } = useSettings();
    const [currentPage, setCurrentPage] = React.useState(1);

    const startIndex = (currentPage - 1) * settings.maxItems;

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const filteredList = settings.hideCompleted ? list.filter(item => !item.complete) : list;

    return (
        <>
            {filteredList.slice(startIndex, startIndex + settings.maxItems).map((item) => (
                <div key={item.id}>
                    <p>{item.text}</p>
                    <p><small>Assigned to: {item.assignee}</small></p>
                    <p><small>Difficulty: {item.difficulty}</small></p>
                    <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
                    <hr />
                </div>
            ))}
            <Stack spacing={2}>
                <Pagination
                    count={Math.ceil(filteredList.length / settings.maxItems)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Stack>
        </>
    );
};

export default TodoList;
