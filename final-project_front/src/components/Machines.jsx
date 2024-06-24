
import Header from './Header';
import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

import SortingTable from './SortingTable';
import Footer from './Footer';
function Jobs() {



    //создвние стейта currentUser
    const [currentUser, changeCurrentUser] = React.useState({});




    const navigate = useNavigate();

    function onButtonMachineList() {
        navigate("/MachineList");
    }



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

    const handlePrint = () => {
        window.print();
    };


        const [sortDate, setSortDate] = useState('');
        const [sliderValue, setSliderValue] = useState(50);
      
        const handleDateChange = (event) => {
          setSortDate(event.target.value);
        };
      
        const handleSliderChange = (event) => {
          setSliderValue(event.target.value);
        };
      
        const applyFilter = () => {
          console.log("Выбранная дата: ${sortDate}, значение слайдера: ${sliderValue}");
          // Здесь можно добавить логику фильтрации или сортировки в соответствии с выбранными значениями
        };

       
            const [stateNumber, setStateNumber] = useState('');
            const [equipmentType, setEquipmentType] = useState('');
            const [mainFeature, setMainFeature] = useState('');
            const [mainFeatureValue, setMainFeatureValue] = useState('');
            const [object, setObject] = useState('');
            const [machineHours, setMachineHours] = useState('');
          
            const handleSubmit = (event) => {
              event.preventDefault();
              console.log(`Гос. номер: ${stateNumber}, Тип техники: ${equipmentType}, Основная характеристика: ${mainFeature} ${mainFeatureValue}, Объект: ${object}, Машина-часы: ${machineHours}`);
              // Здесь можно добавить отправку данных на сервер или другую логику
            };
          
        
             

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header nameOfHeaderLink={'Выйти'} isProfil={"true"} linkOfHeaderLink={'/login'} />
                <h1 className='job__header'>Ведомость потребности машин и механизмов</h1>
               


                <form className="vehicle-management" onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="stateNumber">Гос. номер:</label>
                  <input
                    id="stateNumber"
                    type="text"
                    value={stateNumber}
                    onChange={(e) => setStateNumber(e.target.value)}
                  />
                </div>
          
                <div className="input-group">
                  <label htmlFor="equipmentType">Тип техники:</label>
                  <select
                    id="equipmentType"
                    value={equipmentType}
                    onChange={(e) => setEquipmentType(e.target.value)}>
                        
                    <option value="">Ивановец КС-45717А-1P</option>
                    <option value="">Галичанин КС-74721-2</option>
                    <option value="">Гали КС-7472422221-2</option>
                   
                  </select>
                </div>
          
                <div className="input-group">
                  <label htmlFor="mainFeature">Основная характеристика:</label>
                  <select
                    id="mainFeature"
                    value={mainFeature}
                    onChange={(e) => setMainFeature(e.target.value)}>
                    
                    <option value="">Грузоподъемность</option>
                    
                  </select>
                </div>
          
                <div className="input-group">
                  <label htmlFor="mainFeatureValue">Значение основной характеристики:</label>
                  <input
                    id="mainFeatureValue"
                    type="text"
                    value={mainFeatureValue}
                    onChange={(e) => setMainFeatureValue(e.target.value)}
                  />
                </div>
          
                <div className="input-group">
                  <label htmlFor="object">Объект:</label>
                  <select
                    id="object"
                    value={object}
                    onChange={(e) => setObject(e.target.value)}>
                         
                    <option value="">ВНС, обслуживающая 500 квартир</option>
                    <option value="">ВНС, обслуживающая 45 квартир</option>
                    
                    
                  </select>
                </div>
          
                <div className="input-group">
                  <label htmlFor="machineHours">Машина-часы:</label>
                  <input
                    id="machineHours"
                    type="text"
                    value={machineHours}
                    onChange={(e) => setMachineHours(e.target.value)}
                  />
                </div>
          
              
              </form>

                <button onClick={applyFilter}>Применить</button>

                <div class="tableJobs">
                    <SortingTable
                        columns={columns}
                        data={data}
                    />
                    <div className='job__buttons'>
                        <button type="button" onClick={onButtonMachineList} className='job__button'> Ведомость наличия и состояния машин и механизмов </button>
                        <button type="button" onClick={handlePrint} className='job__button job__button_blue'> Релиз </button>
                    </div>
                </div>
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    );
}


export default Jobs;