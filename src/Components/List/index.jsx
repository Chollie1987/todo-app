import { useContext, useMemo, useState } from 'react';
import React, { useEffect } from 'react';

import { Pagination } from '@mui/material';
import { GlobalContext } from '../../App';


const TodoList = ({ list, toggleComplete, incomplete }) => {
   const { showCompleted, itemsPerPage } = useContext(GlobalContext);
   const [count, setCount] = useState(0);
   const [page, setPage] = useState(1);

   const listToUse = useMemo(() => {
    console.log(showCompleted, incomplete, list);
    if(showCompleted) return incomplete;
    else return list;
   }, [showCompleted, incomplete, list]);

   useEffect(() => {
    console.log(listToUse, itemsPerPage);
    const totalPages = Math.floor(listToUse.length / itemsPerPage);
    const addOne = listToUse.length % itemsPerPage;
    console.log(totalPages, addOne);
    setCount(addOne ? totalPages + 1 : totalPages);
   }, [itemsPerPage, listToUse]);

   const handlePageChange = (e, ePage) => {
    setPage(ePage);
   };

   const startIndex = useMemo(() => {
    return (page - 1) * itemsPerPage;
   }, [itemsPerPage, page]);

   const endIndex = useMemo(() => {
    return (page - 1) * itemsPerPage + itemsPerPage;
   }, [page, itemsPerPage]);

   return (
    <>
           {listToUse.slice(startIndex, endIndex).map((item) => (
               <div key={item.id}>
                   <p>{item.text}</p>
                   <p>
                       <small>Assigned to: {item.assignee}</small>
                   </p>
                   <p>
                       <small>Difficulty: {item.difficulty}</small>
                   </p>
                   <div onClick={() => toggleComplete(item.id)}>
                       Complete: {item.complete.toString()}
                   </div>
                   <hr />
               </div>
           ))}
           <Pagination
               count={count}
               variant="outlined"
               color="secondary"
               onChange={handlePageChange}
           />
    </>
   );
 };

 export default TodoList;
