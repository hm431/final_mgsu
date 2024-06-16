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
            col1: '1',
            col2: 'Объект №1 ВНС на улице Ленина',
            col3: '1380',
            col4: '1086',
            col5: '10',
            col6: '14',

        },
        {
            col1: '2',
            col2: 'Объект №2 ВНС на улице Первого Мая',
            col3: '4790',
            col4: '3737',
            col5: '30',
            col6: '16',

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
            Header: 'Наименование объекта',
            accessor: 'col2',
        },
        {
            Header: 'Стоимость СМР в тыс.руб',
            accessor: 'col3',
        },
        {
            Header: 'Затрата труда в чел.час',
            accessor: 'col4',
        },
        {
            Header: 'Численность бригады',
            accessor: 'col5',
        },
        {
            Header: 'Продолжительность в дн.',
            accessor: 'col6',
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