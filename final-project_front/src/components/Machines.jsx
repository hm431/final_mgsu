import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import { useNavigate } from "react-router-dom";

function SortingTable() { //Шаблон таблицы для задач
    
    const [currentUser, changeCurrentUser] = React.useState({});
    // Определение данных и столбцов как раньше
    const data = React.useMemo( //Тут должны быть входные данные
        () => [
            {
                col1: 'Hello',
                col2: 'World'
            },
            {
                col1: 'react-table',
                col2: 'rocks'
            },
            {
                col1: 'Привет',
                col2: 'Мир'
            },
            {
                col1: 'react-table',
                col2: 'это круто'
            },
            // Дополнительные данные...
        ],
        []
    );

    const columns = React.useMemo( // Тут должны быть формы, которые используются таблицей 
        () => [
            {
                Header: 'Column 1',
                accessor: 'col1', // accessor является "ключом" для данных
            },
            {
                Header: 'Column 2',
                accessor: 'col2',
            },
            {
                Header: 'Column 3',
                accessor: 'col3',
            },
            // Дополнительные столбцы...
        ],
        []
    );

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



        <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
            <Header nameOfHeaderLink={'Выйти'} isProfil={"true"} linkOfHeaderLink={'/login'} />

            <div class="jobs">
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


        </div>

    </CurrentUserContext.Provider>
    )
}

export default SortingTable;
