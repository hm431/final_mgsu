
import Header from './Header';
import { useNavigate } from "react-router-dom";

import React, { useEffect } from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

import SortingTable from './SortingTable';
import Footer from './Footer';
function Jobs() {



    //создвние стейта currentUser
    const [currentUser, changeCurrentUser] = React.useState({});




    const navigate = useNavigate();





    const data = React.useMemo( //Тут должны быть входные данные
    () => [
        {
            col1: '1',
            col2: '24535',
            col3: '«Галичанин КС-74721-2» ',
            col4: 'Грузоподъемность',
            col5: '70',
            col6: 'ВНС, обслуживающая 500 квартир',
            col7: '500'
        },
        {
            col1: '2',
            col2: '324234',
            col3: '«Ивановец КС-45717А-1P» ',
            col4: 'Грузоподъемность',
            col5: '25',
            col6: 'ВНС, обслуживающая 500 квартир',
            col7: '343'
        },
        {
            col1: '3',
            col2: '345345435',
            col3: '«Гали КС-7472422221-2» ',
            col4: 'Грузоподъемность',
            col5: '25',
            col6: 'ВНС, обслуживающая 45 квартир',
            col7: '666'
        },

        
    ],
    []
);

const columns = React.useMemo( // Тут должны быть формы, которые используются таблицей 
    () => [
        {
            Header: '№ п.п.',
            accessor: 'col1', // accessor является "ключом" для данных
        },
        {
            Header: 'Гос. номер',
            accessor: 'col2',
        },
        {
            Header: 'Наименование техники',
            accessor: 'col3',
        },
        {
            Header: 'Основная характеристика',
            accessor: 'col4',
        },
        {
            Header: 'Значение основной характеристики',
            accessor: 'col5',
        },
        {
            Header: 'Наименование объекта',
            accessor: 'col6',
        },
        {
            Header: 'Машино-часы',
            accessor: 'col7',
        },
        // Дополнительные столбцы...
    ],
    []
);


    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header nameOfHeaderLink={'Выйти'} isProfil={"true"} linkOfHeaderLink={'/login'} />
                <h1 className='job__header'>Ведомость потребности машин и механизмов</h1>
                <div class="tableJobs">
                    <SortingTable
                    columns={columns}
                    data={data}
                    />
                    <div className='job__buttons'>
                    <button className='job__button'> Реестр объектов </button>
                    <button className='job__button job__button_blue'> Релиз </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </CurrentUserContext.Provider>
    );
}


export default Jobs;