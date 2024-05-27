import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import { useNavigate } from "react-router-dom";

function SortingTable({ data, columns }) { //Шаблон таблицы для задач
    
    const [currentUser, changeCurrentUser] = React.useState({});
    // Определение данных и столбцов как раньше
   

    // Используем хуки useTable и useSortBy
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy // Теперь useSortBy управляет состоянием сортировки
    );

    // Рендерим UI вашей таблицы
    return (



            <div >
            <table {...getTableProps()}>
             <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.render('Header')}
                            {/* Добавляем текстовый индикатор сортировки */}
                            <span>
                                {column.isSorted
                                    ? column.isSortedDesc
                                        ? ' ↓'
                                        : ' ↑'
                                    : ''}
                            </span>
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
            </div>


      
    )
}

export default SortingTable;
