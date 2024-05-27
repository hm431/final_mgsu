import Header from './Header';
import { useNavigate } from "react-router-dom";

import React, { useEffect } from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

import SortingTable from './SortingTable';
import Footer from './Footer';



function MachineList() {

    
    //создвние стейта currentUser
    const [currentUser, changeCurrentUser] = React.useState({});


   function onButtonBack() {

        navigate("/machines");
    }

    const navigate = useNavigate();

    const data = React.useMemo( //Тут должны быть входные данные
    () => [
        {
            col1: 'Автокран',
            col2: '24535',
            col3: '«Галичанин КС-74721-2» ',
            col4: 'Грузоподъемность',
            col5: '70',
            col6: 'Есть',
            col7: 'Не требует ремонта',
            col8: '1',
        },
        {
            col1: 'Автокран',
            col2: '324234',
            col3: '«Ивановец КС-45717А-1P» ',
            col4: 'Грузоподъемность',
            col5: '25',
            col6: 'Есть',
            col7: 'Требует',
            col8: '1',
        },
        {
            col1: 'Башенный кран',
            col2: '345345435',
            col3: '«Гали КС-7472422221-2» ',
            col4: 'Грузоподъемность',
            col5: '25',
            col6: 'Нет',
            col7: 'Не требует ремонта',
            col8: '0',
        },

        
    ],
    []
);

const columns = React.useMemo( // Тут должны быть формы, которые используются таблицей 
    () => [
        {
            Header: 'Тип машины',
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
            Header: 'Наличие (есть/нет)',
            accessor: 'col6',
        },
        {
            Header: 'Состояние грузоподъёмной техники (требует/не требует ремонта)',
            accessor: 'col7',
        },
        {
            Header: 'Кол-во собственной техники',
            accessor: 'col8',
        },
        // Дополнительные столбцы...
    ],
    []
);

    return(
        <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
            <Header nameOfHeaderLink={'Выйти'} isProfil={"true"} linkOfHeaderLink={'/login'} />
            <h1 className='job__header'> Ведомость наличия и состояния машин и механизмов</h1>
            <div class="tableJobs">
                <SortingTable
                columns={columns}
                data={data}
                />
                <div className='job__buttons'>
                <button onClick={onButtonBack} className='job__button job__button_blue' >Назад</button>
                </div>
            </div>
            <Footer/>
        </div>
        
    </CurrentUserContext.Provider>
    )
}

export default MachineList;